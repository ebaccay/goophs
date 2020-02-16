from PIL import Image
import numpy as np
import random
import json

SKELETON_IMAGES_PATH = "~/Repositories/goophs/skeleton_image_bank/"
INDEX_PNG_SKELETON = SKELETON_IMAGES_PATH + "index.png"
DICT_PNG_SKELETON = SKELETON_IMAGES_PATH + "dict.png"
NUM_SKELETONS = 42


# File upload
def get_image_matrix(filename):
    im = Image.open(filename)
    return np.array(im)


def write_image_matrix(matrix, filename):
    im = Image.fromarray(matrix, "RGB")
    im.save(filename)
    return True


def byte_difference(original_byte, wanted_byte):
    mask = wanted_byte & 3
    cleared_original = original_byte & 252
    return cleared_original | mask


def split_byte(byte):
    quad1 = (byte & 192) >> 6
    quad2 = (byte & 48) >> 4
    quad3 = (byte & 12) >> 2
    quad4 = byte & 3
    return [quad1, quad2, quad3, quad4]


def get_bytes(filename):
    with open(filename, "rb") as f:
        bytes_read = f.read()
    return bytes_read


def get_split_bytes(byte_arr):
    byte_chunks = []
    [byte_chunks.extend(split_byte(byte)) for byte in byte_arr]
    return byte_chunks


def overwrite_bytes(img_matrix, byte_chunks):
    x, y, z = img_matrix.shape
    i = 0
    for xi in range(x):
        for yi in range(y):
            for zi in range(z):
                try:
                    img_matrix[xi][yi][zi] = byte_difference(img_matrix[xi][yi][zi], byte_chunks[i])
                    i += 1
                except IndexError:
                    img_matrix[xi][yi][zi] = byte_difference(img_matrix[xi][yi][zi], 0)
    return img_matrix


def get_phile_matrices(byte_chunks):
    skeleton_imgs = []

    total_chunk_len = len(byte_chunks)
    total_embed_len = 0
    while total_embed_len < total_chunk_len:
        new_img = download_random_img()
        skeleton_imgs.append(new_img)
        total_embed_len += new_img.size

    philes = []
    start = 0
    for skeleton in skeleton_imgs:
        end = start + skeleton.size
        philes.append(overwrite_bytes(skeleton, byte_chunks[start: end]))
        start = end

    return philes


def download_random_img():
    img_num = random.randint(1, NUM_SKELETONS)
    img_name = f"{str(img_num)}.png"
    if img_num < 10:
        img_name = "0" + img_name

    return get_image_matrix(f"{SKELETON_IMAGES_PATH}{img_name}")


def write_philes(phile_matrices, original_file_name):
    philenames = []
    i = 0
    for phile in phile_matrices:
        name = f"{original_file_name}_{i}.png"
        write_image_matrix(phile, name)
        i += 1
        philenames.append(name)
    return philenames


def file_to_phile(filename):
    file_byte_chunks = get_split_bytes(get_bytes(filename))
    phile_matrices = get_phile_matrices(file_byte_chunks)
    philenames = write_philes(phile_matrices, filename)
    return philenames


# File download
def extract_byte_chunk(byte):
    return byte & 3


def extract_chunks_from_phile(img_matrix):
    byte_chunks = []
    x, y, z = img_matrix.shape
    for xi in range(x):
        for yi in range(y):
            for zi in range(z):
                byte = img_matrix[xi][yi][zi]
                byte_chunks.append(extract_byte_chunk(byte))
    return byte_chunks


def rechunk(byte_chunk_arr):
    final_chunk_arr = []
    for i in range(int(np.floor(len(byte_chunk_arr) / 4))):
        quad1 = byte_chunk_arr[(4 * i)]
        quad2 = byte_chunk_arr[(4 * i) + 1]
        quad3 = byte_chunk_arr[(4 * i) + 2]
        quad4 = byte_chunk_arr[(4 * i) + 3]

        full_byte = (quad1 << 6) | (quad2 << 4) | (quad3 << 2) | (quad4)
        final_chunk_arr.append(full_byte)

    return final_chunk_arr


def write_to_file(byte_arr, filename):
    with open(filename, "w+b") as f:
        f.write(bytearray(byte_arr))
    return True


def phile_to_file(phile_arr, filename=None):
    if not filename:
        filename = "_".join(phile_arr[0].split("_")[0: -1])

    full_byte_arr = []

    for phile in phile_arr:
        img_matrix = get_image_matrix(phile)
        file_chunks = extract_chunks_from_phile(img_matrix)
        full_byte_arr.extend(file_chunks)

    final_byte_arr = rechunk(full_byte_arr)
    write_to_file(final_byte_arr, filename)
    return True


def get_index(album):
    # TODO: Google API call. Should return the index number
    pass


def get_dictionary(album):
    # TODO: Google API call. Should return a dictionary mapping of the filesystem
    pass


# def upload_to_gp(philename, album, api_key):
#     # TODO: Use Photos API to upload the phile to the album
#     pass
#
#
# def download_from_gp(philename, album, api_key):
#     pass

# TODO: Use Photos API to download the phile from the album


def dict_to_json(dictionary):
    with open('dict.json', 'w') as f:
        json.dump(dictionary, f)
    return True


def json_to_dict(json_name):
    with open(json_name) as f:
        data = json.load(f)
    return data


def upload_philes(request):
    request = request.get_json()
    filenames = request["filenames"]
    file_data = request["data"]
    album_name = request["album"]
    api_key = request["key"]

    filesystem = {}

    for filename in filenames:
        write_to_file(file_data, filename)
        philelist = file_to_phile(filename)
        filesystem[filename] = philelist

        for phile in philelist:
            upload_to_gp(phile, album_name, api_key)

    dict_to_json(filesystem, "dict.json")
    dict_philes = file_to_phile("dict.json")

    # for phile in dict_philes:
    #     upload_to_gp(phile, album_name, api_key)

    with open("index.txt", "w+") as f:
        f.write(str(len(dict_philes)))

    index = file_to_phile("index.txt")

    # upload_to_gp(index, album_name, api_key)


def download_phile(request):
    request = request.get_json()
    filename = request["filename"]
    album_name = request["album"]
    api_key = request["key"]

    download_from_gp("index.txt_0.png", album_name, api_key)
    phile_to_file(["index.txt_0.png"], "index.txt")

    with open("index.txt") as f:
        dict_num = int(f.read())

    dict_philes = [f"dict.json_{i}.png" for i in range(dict_num)]
    for phile in dict_philes:
        download_from_gp(phile, album_name, api_key)

    phile_to_file(dict_philes)

    filesystem = json_to_dict("dict.json")

    if filename not in filesystem:
        return "Error! File not found :("

    philenames = filesystem[filename]

    for phile in philenames:
        download_from_gp(phile, album_name, api_key)

    phile_to_file(philenames)

    return filename

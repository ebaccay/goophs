MAX_FILE_SIZE = 0  # TODO: Fix this number
CLOUD_BUCKET = "/"  # TODO: Get this cloud bucket


def create_byte_arr(filename):
    """

    Extracts the relevant byte array from the file

    Parameters
    ----------
    filename : string
        The name of the file that information will be extracted from

    Returns
    -------
    byte[]
        The array of bytes extracted from the file

    """

    # TODO: Implement this
    with open(filename, "rb") as file:
        f = file.read()
        byte_arr = bytearray(f)
    return byte_arr


def write_to_png(byte_arr, png_file, new_png_file_name):
    """

    Append the contents of the byte array onto the png_file

    Parameters
    ----------
    byte_arr : byte[]
        The array of bytes to be appended to the png file
    png_file : string
        The name of the png file that the byte array will be appended to
    new_png_file_name : string
        The name of the new png file

    Returns
    -------
    string
        The name of the png file that now contains the appended byte array

    """
    with open(png_file, "rb") as image:
        f = image.read()
        b = bytearray(f)
    og_size = len(b)
    b += byte_arr
    file = open(new_png_file_name, 'wb')
    file.write(b)
    file.close()
    return new_png_file_name


def extract_from_png(png_name, og_size):
    """

    Extracts the byte array stored in the png file given by `png_name`

    Parameters
    ----------
    png_name : string
        The name of the PNG file on the current file system that holds the stored bytes
    og_size : int
        The length of the original non-appended file in bytes

    Returns
    -------
    byte[]
        The byte array stored on the PNG file that is now extracted

    """
    with open(png_name, "rb") as image:
        f = image.read()
        b = bytearray(f)[og_size:]
    image.close()
    return b


def upload_phile(png_file):
    """

    Uploads the specified png file (or any file really) into Google Photos using the Photos REST API

    Parameters
    ----------
    png_file : string
        The name of the png file that will be uplaoded to Google Photos

    Returns
    -------
    boolean
        True or false as to whether or not the operation failed (true if success)

    """
    # TODO: Implement this
    pass


def download_phile(png_file):
    """

    Downloads the specified png file (or any file really) from Google Photos using the Photos REST API

    Parameters
    ----------
    png_file : string
        The name of the png file that will be downloaded from Google Photos

    Returns
    -------
    string
        The name of the file just downloaded on the local file system

    """
    # TODO: Implement this
    pass


def get_random_img(bucket_name):
    """

    Gets a random image (but any file really) from the bucket named `bucket_name`

    Parameters
    ----------
    bucket_name : string
        The name of the bucket that random images will be downloaded from

    Returns
    -------
    ???
        The image that was downloaded from the bucket
    """
    #  TODO: Implement this
    pass


def split_file(filename):
    """

    Splits a singular file's bytes into multiple files to fit into the Google Photos size limit

    Parameters
    ----------
    filename : string
        The name of the file to split

    Returns
    -------
    array[bytes[]]
        Array of byte arrays in which the file was split into
    (string, size)[]
        Array of PNG filenames and og size which, when appened to by the bytes of the raw files, will yield perfectly sized philes


    """
    split_file_byte_arr = []
    split_image_names = []
    file_byte_arr = create_byte_arr(filename)
    file_size = len(file_byte_arr)
    curr_index = 0
    while curr_index < file_size:
        image_file_name = get_random_img(CLOUD_BUCKET)
        image_byte_arr = create_byte_arr(image_file_name)
        image_size = len(image_byte_arr)
        space = MAX_FILE_SIZE - image_size
        split_file_byte_arr.append(file_byte_arr[curr_index:curr_index + space])
        curr_index += space
        split_image_names.append((image_file_name, image_size))
    return split_file_byte_arr, split_image_names


def merge_bytes(filenames):
    """

    Merges multiple bytes arrays together into a singular byte array

    Parameters
    ----------
    filenames : byte[][]
        An array of strings which correspond to the names of which files to merge

    Returns
    -------
    byte[]
        The merged byte array

    """
    # TODO: Implement this
    merged_bytes = bytearray()
    for file in filenames:
        merged_bytes += file
    return merged_bytes


def phile_upload(filename, key):
    """

    Takes a raw file and goes through the motions of converting said file into several PNGs, encrypting the data,
    creating redundancies of the encrypted data, then finally uploading to Google Photos

    Parameters
    ----------
    filename : string
        The name of the file that will go through the phile uploading process
    key : ???
        The key used to encrypt the file into the version that it is

    Returns
    -------
    (string, int)[]
        Array of filename and filesize tuples in which the file was split into

    """
    philes_byte_arr, png_templates = split_file(filename)
    philes = []
    png_templates_so_far = {}
    for i in range(len(philes_byte_arr)):
        phile_byte_arr, png_template = philes_byte_arr[i], png_templates[i]
        png_filename = png_template[0]
        if png_filename in png_templates_so_far.keys():
            new_png_filename = png_filename[:len(png_filename) - 1] + str(png_templates_so_far[png_filename])
            png_templates_so_far[png_filename] += 1
        else:
            new_png_filename = png_filename[:len(png_filename) - 1] + "0"
            png_templates_so_far[png_filename] = 1
        final_phile = write_to_png(phile_byte_arr, png_filename, new_png_filename)
        philes.append((final_phile, png_template[1]))
        upload_phile(final_phile)

    return philes

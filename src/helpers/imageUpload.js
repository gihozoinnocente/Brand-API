import cloudinary from 'cloudinary'


export const uploadFile = async (req) => {
    let imageUrl = ''
    console.log(req.file)
    await cloudinary.v2.uploader.upload(req.file.path, async function (err, image) {
        if (err) { console.warn(err); }
        imageUrl = image.url
        req.body.image = image.url
    });
    return imageUrl
}




// cloudinary.config({
//     cloud_name:process.env.CLOUDINARY_USER_NAME,
//     api_key:process.env.CLOUDINARY_API_KEY,
//     api_secret:process.env.CLOUDINARY_USER_NAME
// })

var cloudinary = require('cloudinary');

cloudinary.config({ 
    cloud_name: 'dmlnmekpj', 
    api_key: '584252897641337', 
    api_secret: '5eWEFop4zvFTNzmVfv18z0uxp6Y',
    secure: true
});

const uploadImage = async (imagePath) => {
    
  // Use the uploaded file's name as the asset's public ID and 
  // allow overwriting the asset with new versions
const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
};

  try {
    // Upload the image
    const result = await cloudinary.uploader.upload(imagePath, options);
    //console.log(result);
    return result.url;
  } catch (error) {
    console.error(error);
  }
};

module.exports = uploadImage;
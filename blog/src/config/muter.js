const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('./cloudinary');

// Cấu hình CloudinaryStorage cho Multer
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'uploads', // Tên folder trên Cloudinary
        allowed_formats: ['jpg', 'png', 'jpeg'], // Định dạng được phép
    },
});

const upload = multer({ storage });

module.exports = upload;

const path = require ("path");
const multer = require("multer");




const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../public/images');
    },
    filename: function (req, file, cb) {
      const fileExtension = path.extname(file.originalname);
      const randomName = Date.now() + '.' + fileExtension;
      cb(null, randomName);
    }
  });
  
  const uploadFile = multer({ storage: storage });

  module.exports = uploadFile;
const fs=require('fs');
const multer = require('multer');

let diskStorage = multer.diskStorage({ // Noncompliant: no destination specified
  filename: (req, file, cb) => {
    const buf = crypto.randomBytes(20);
    cb(null, buf.toString('hex'))
  }
});

// This upload is not safe as no destination specified, /var/tmp or /tmp will be used
let diskupload = multer({
  storage: diskStorage,
});
fs.mkdir('nex',(err)=>{
    if(err) console.log(err)
    else console.log('sucess');

})

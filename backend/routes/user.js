// const express = require('express');
// const router = express.Router();
// // const {createUser,listUser,listUserById} = require('../controller/user');
// // const {userValidation,tokenDecode,typeCheck} = require('../middleware/validation');
// const User=require("../models/user");
// router.get('/',(req,res)=>{
   
//     console.log(req.body);
//     const user=User(req.body);
//     user.save();
//     res.send(req.body);

// })


// // routes.post('/',userValidation,createUser);
// // // routes.get('/',tokenDecode,typeCheck,listUser);
// // // routes.get('/:id',tokenDecode,typeCheck,listUserById);

// module.exports = router;

const express = require('express');
const router = express.Router();
const {createUser,listUser,listUserById} = require('../controller/user');
const {userValidation} = require('../middleware/validation');


router.post('/',userValidation,createUser);
router.get('/',listUser);
router.get('/:id',listUserById);

module.exports = router;
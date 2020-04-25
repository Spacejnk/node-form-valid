const express = require('express');
const path = require('path');

//const bodyParser = require('body-parser');
const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')));
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());


app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, 'static','/index.html'));
});

// app.get('/', (req,res) => res.send
//   ('Testing'));











 app.post('/',(req,  res) => {
//   //const obj = JSON.parse(JSON.stringify(req.body));
//   //console.log(req.body);
//   // data base work here
//   //res.json({success : true});

//   const schema = Joi.object().keys({
//     email: Joi.string().trim().email().required(),
//     password: Joi.string().min(5).max(10).required()
//   });


//   // //const obj = JSON.parse(JSON.stringify(req.body));
//   // // console.log(req.body);
//   // // res.send('successfullydd posted data');
//   // //console.log(obj);
  
  
//    Joi.validate(req.body,schema,(err,result)=>{
//     if(err){
//       console.log(err);
//       res.send('an error has occurred');
//     }
//     console.log(result);
//     res.send('successfully posted data');
//   });


// });

// // ...rest of the initial code omitted for simplicity.
// const { check, validationResult } = require('express-validator');

// app.post('/', [
 
//   check('email','Err occured in email').trim().isEmail().normalizeEmail(),
  
//   check('password','Err occured in pswrd').trim().isLength({ min: 5 })
// ],(req, res) => {
  
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     console.log(errors.mapped())
//     return res.render('/',{title: "Create New User", errors: errors.mapped()})
//     //return res.status(422).json({ errors: errors.array() });
//   } else {

//   const user = matchedData(req);
//   res.render({user:user})
//   }

//   User.create({
//     email: req.body.email,
//     password: req.body.password
//   }).then(user => res.json(user));

});


app.listen('3005');
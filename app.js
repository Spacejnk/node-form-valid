const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const {check, validationResult } = require('express-validator');
const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({extended: false}));
//let urlencoded = bodyParser.urlencoded({extended: false});
//app.use(urlencoded);
app.use(bodyParser.json());


app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, 'static','/index.html'));
});

// app.post('/formData', (req,res) => {
//   console.log(req.body.name);
// });

app.post('/formData', [
//  check('name').not().isEmpty().withMessage('Name field cannot be empty')
//  .isLength({
//    min: 3
//  }).withMessage('Name has to be at least 3 characters.')
//  .isAlpha().withMessage('Name cannot contain numbers or special characters.'),

 check('email', 'Email is not valid')
 .isEmail()

],(req, res) => {
  
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
    
   } 

  res.status(202).json({
    success: 'ok'
  })

});


app.listen('3005');
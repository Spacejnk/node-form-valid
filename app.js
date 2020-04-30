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



app.post('/formData', [
 check('name').not().isEmpty().withMessage('Name field cannot be empty')
 .isLength({
   min: 3
 }).withMessage('Name has to be at least 3 characters.')
 .isAlpha().withMessage('Name cannot contain numbers or special characters.'),

 check('email', 'Email is not valid')
 .isEmail(),

check('phone1')
.not().isEmpty().withMessage('Phone number cannot be empty')
.isInt().withMessage('Phone number must contain numbers only')
.isLength({
  min: 3,
  max: 4
}).withMessage('The are code must be 3 numbers'),

check('zipCode')
.not().isEmpty().withMessage('Zip Code field cannot be empty')
.isInt().withMessage('Zip Code number must contain numbers only')
.isLength({
  min: 5,
  max: 5
}).withMessage('The zip code must be 5 numbers')
.isPostalCode('US').withMessage('Not a valid US zip code'),

check('age').custom(function(age) {
  if (age !== 'Yes' && age !== 'No') {
    throw new Error ('Invalid Age Data')
  } else {
    console.log('success');
  }
})


],(req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
    
   } 
   console.log(req.body.phone1)

  res.status(202).json({
    success: 'ok'
  })

});


app.listen('3005');
const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/submit', (req, res) => {
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  res.send(`Server received: First Name - ${firstName}, Last Name - ${lastName}`);
});

app.post('/emailSubmit', (req, res) => {
  let emailAd = req.body.emailAddress;
  res.send(`Server recieved: Email Address - ${emailAd}`)
});

app.get('/test', (req, res) => {
  res.send('hi there');
});

app.listen(3000);

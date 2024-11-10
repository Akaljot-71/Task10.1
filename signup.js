// Signup.js
const express = require('express');
const bodyParser = require('body-parser');
const formData = require('form-data');
const Mailgun = require('mailgun.js');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/', async function(req, res) {
  const email = req.body.email;

  try {
    await sendWelcomeEmail(email);
    res.send(`Welcome! Your email is ${email}`);
  } catch (error) {
    console.error("Error sending email:", error);
    res.send("There was an error signing up. Please try again.");
  }
});

async function sendWelcomeEmail(email) {
  const mailgun = new Mailgun(formData);
  const mg = mailgun.client({username: 'api', key: '9ccb038633f657318fce1915a48b6e25-5dcb5e36-535f6f97'});

  const data = {
    from: 'Akaljot4756.be23@chitkara.edu.in',
    to: email,
    subject: 'Welcome to Deakin Newsletter',
    text: `Hi,\n\nThank you for signing up for the Deakin Newsletter! We're excited to have you with us.\n\nBest regards,\nDeakin Team`,
  };

  await mg.messages.create('mailgun.com', data);
}

app.listen(8080, function() {
  console.log("The server is listening on port 8080");
});

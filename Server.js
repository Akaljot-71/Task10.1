//server.js
const express = require('express');
const bodyParser = require('body-parser');
const formData = require('form-data');
const Mailgun = require('mailgun.js');
const cors = require('cors'); 
const app = express();


app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
    username: 'api',
    key:  '8afff10fd35182dbc952fbfdc50a24df-79295dd0-868f4dc7'
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html', (err) => {
        if (err) {
            console.error('Error sending index.html:', err);
            res.status(500).send('Error loading the homepage');
        }
    });
});

app.post('/', (req, res) => {
    const { Email } = req.body;

    if (!Email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    const domain = 'sandbox7474172587b743a3a718d827af45baf6.mailgun.org';

    if (!domain) {
        return res.status(500).json({ error: 'Mailgun domain is not configured' });
    }

    mg.messages
        .create(domain, {
          from: 'Akaljot4756.be23@chitkara.edu.in',
          to: Email,
          subject: 'Welcome to Deakin Newsletter',
          text: `Hi ,\n\nThank you for signing up for the Deakin Newsletter! We're excited to have you with us.\n\nBest regards,\nDeakin Team`,  
        })
        .then((msg) => {
            console.log('Email sent successfully:', msg);
            res.status(200).json({ message: 'Subscription successful, email sent!' });
        })
        .catch((err) => {
            console.error('Error sending email:', err);
            res.status(500).json({ error: 'Failed to send email' });
        });
});


app.listen(3000, () => {
    console.log('Server running on port 3000');
});

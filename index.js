const express = require('express');
const path = require('path');


const app = express();

// Static Middleware
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'public/scripts')))
app.use(express.static(path.join(__dirname, 'public/css')))

app.get('*', (req, res) => {
    console.log("Resume triggered...");
    res.sendFile(path.join(__dirname, './public', 'index.html'));
});

const PORT = process.env.PORT || 8080;

console.log('Server listening on:', PORT);
app.listen(PORT);


//Its a node program that creates an HTTP server to send the resume file on all requests
//Git contains my resume file I have on my PC so I may directly update the file from VS code and the update flows through all versions of it on Git and anything that is connected to the Git file
//Heroku takes the resume file I have created and added to my github library so I may create a domain link that says something like icvalderas.com


//to update, put these commands into the terminal:
//git add .
//git commit -m "message to relay the notes of the update"
//git push
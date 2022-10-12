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
// server.js
const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory (optional but useful for CSS, images, etc.)
app.use(express.static('public'));

// Serve index.html as the homepage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Change from binding to localhost to 0.0.0.0 to allow external access
app.listen(port, '0.0.0.0', () => {
    console.log(`Server is listening at http://0.0.0.0:${port}`);
});

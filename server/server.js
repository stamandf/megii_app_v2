const path = require('path');
const express = require('express');
const cors = require('cors');
const app = express();
const publicPath = path.join(__dirname, 'build');
const listings = require('../src/db/propListings');

const PORT = process.env.PORT || 3001;


console.log('In server!');
console.log('listings = ', listings);
console.log('process.env = ', process.env);
console.log('__dirname = ', __dirname);
console.log('publicPath = ',publicPath);

app.use(cors(), express.static(publicPath));

app.get('/api/listings', (request, response) => {
    console.log('request = ', request);
    response.json(listings);
});
app.get('*', (req,res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});
app.listen(PORT, () => {
    console.log('Server running on port', PORT);
})

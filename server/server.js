const path = require('path');
const express = require('express');
const cors = require('cors');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');

const PORT = process.env.PORT || 3001;


const listings = [
    {
        "id": 1,
        "size": "2911 Sq Ft.",
        "beds": "2",
        "baths": "2",
        "price": "$570,000",
        "address": "156/10 Sapling Street, Harrison, ACT 2914",
        "photo_main": "/assets/images/properties/img_1.jpg"
    },
    {
        "id": 2,
        "size": "2911 Sq Ft.",
        "beds": "2",
        "baths": "2",
        "price": "$980,000",
        "address": "156/10 Sapling Street, Harrison, ACT 2914",
        "photo_main": "/assets/images/properties/img_2.jpg"
    },
    {
        "id": 3,
        "size": "2911 Sq Ft.",
        "beds": "2",
        "baths": "2",
        "price": "$570,000",
        "address": "156/10 Sapling Street, Harrison, ACT 2914",
        "photo_main": "/assets/images/properties/img_1.jpg"
    },
    {
        "id": 4,
        "size": "2911 Sq Ft.",
        "beds": "2",
        "baths": "2",
        "price": "$570,000",
        "address": "156/10 Sapling Street, Harrison, ACT 2914",
        "photo_main": "/assets/images/properties/img_1.jpg"
    },
    {
        "id": 5,
        "size": "2911 Sq Ft.",
        "beds": "5",
        "baths": "3",
        "price": "$1,570,000",
        "address": "156/10 Sapling Street, Harrison, ACT 2914",
        "photo_main": "/assets/images/properties/img_1.jpg"
    },
    {
        "id": 6,
        "size": "2911 Sq Ft.",
        "beds": "3",
        "baths": "3",
        "price": "$450,000",
        "address": "156/10 Sapling Street, Harrison, ACT 2914",
        "photo_main": "/assets/images/properties/img_1.jpg"
    }
]



console.log('In server!');
console.log('listings = ', listings);
console.log('process.env = ', process.env);
console.log('__dirname = ', __dirname);
console.log('publicPath = ',publicPath);

app.use(cors(), express.static(publicPath));

app.get('/api/listings', (request, response) => {
    response.json(listings);
});
app.get('*', (req,res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});
app.listen(PORT, () => {
    console.log('Server running on port', PORT);
})

// const mongoose = require('mongoose');

// async function connectToMongoDb(url) {
//     return mongoose.connect(url);
// }
// module.exports = {connectToMongoDb};



const mongoose = require('mongoose');

async function connectToMongoDb(url) {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
}

module.exports = { connectToMongoDb };

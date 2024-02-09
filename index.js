const mongoose = require('mongoose');
const app = require('./app');
const config = require('./utils/config');

mongoose.connect(config.MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB...');

        // start the server
        app.listen(config.PORT, ()=> {
            console.log(`Server running on port ${config.PORT}`);
        });
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB:', error.message);
    });
    


const mongoose = require('mongoose');

const username = new mongoose.Schema(
    {
        username: {
            type: 'string',
            required: true,
        },
    }
);


module.exports = mongoose.model("username", username);
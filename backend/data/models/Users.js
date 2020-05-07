const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ['admin', 'user', 'tehnic']
    },
    confirmed: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

const UserModel = mongoose.model('Users', UserSchema);
module.exports = UserModel;

const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
    url: { type: String },
    type: String,
    name: String,
    password: String,
    cart: [{ type: Schema.Types.ObjectId, ref: 'products' }]
});

module.exports = mongoose.model('users', userSchema);
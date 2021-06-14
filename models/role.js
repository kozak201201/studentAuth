const {Schema, model} = require('mongoose');

const roleSchema = new Schema({
    value: {
        type: String,
        unique: true,
        default: 'Student'
    }
});

const Role = model('ROle', roleSchema);

module.exports = Role;
const {Schema, model} = require('mongoose');

const roleSchema = new Schema({
    value: {
        type: String,
        unique: true,
        default: 'STUDENT'
    }
});

const Role = model('ROLE', roleSchema);

module.exports = Role;
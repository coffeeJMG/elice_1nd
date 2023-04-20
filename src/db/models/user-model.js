const { model } = require('mongoose');
const { UserSchema, UserAddressSchema } = require('../schemas/user-schema');

const User = model('users', UserSchema);
const UserAddress = model('user_addresses', UserAddressSchema);

module.exports(User, UserAddress);
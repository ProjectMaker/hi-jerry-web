const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: true
  },
  firstname: {
    type: String
  },
  hash_password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

userSchema.methods.comparePassword = function(password) {
  console.log('comparePassword', password, this.email);
  return bcrypt.compareSync(password, this.hash_password);
};

module.exports = mongoose.model("User", userSchema);
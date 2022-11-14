import { Schema } from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcrypt';
import { setLastUpdated, isPasswordMatch } from './user.methods';
import { isEmailTaken } from './user.statics';
import { toJSON, paginate } from '../plugins';

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: 7,
    trim: true,
    validate(value: string) {
      if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
        throw new Error(
          'Password must contain at least one letter and one number'
        );
      }
    },
    private: true,
  },
  dateOfEntry: {
    type: Date,
    default: new Date(),
  },
  lastUpdated: {
    type: Date,
    default: new Date(),
  },
});

// add plugin that converts mongoose to json
UserSchema.plugin(toJSON);
UserSchema.plugin(paginate);
UserSchema.methods.setLastUpdated = setLastUpdated;
UserSchema.methods.isPasswordMatch = isPasswordMatch;
UserSchema.statics.isEmailTaken = isEmailTaken;
UserSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

export default UserSchema;

import { Schema } from 'mongoose';
import { toJSON } from '../plugins';
import { tokenTypes } from '../../config/constants';

const TokenSchema = new Schema({
  token: {
    type: String,
    required: true,
    index: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  type: {
    type: String,
    enum: [
      tokenTypes.REFRESH,
      tokenTypes.RESET_PASSWORD,
      tokenTypes.VERIFY_EMAIL,
    ],
    required: true,
  },
  expires: {
    type: Date,
    required: true,
  },
  blacklisted: {
    type: Boolean,
    default: false,
  },
});
TokenSchema.plugin(toJSON);
export default TokenSchema;

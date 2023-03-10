import { Schema, model, models } from 'mongoose';

const testSchema = new Schema({
  name: String,
  explanation: {
    type: String,
    required: true,
    unique: true,
  },
  date: String
});

const Post = models.Posts || model('Posts', testSchema);

export default Post;

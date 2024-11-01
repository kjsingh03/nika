import mongoose, { Schema, model } from 'mongoose';

// const contentBlockSchema = new Schema({
//   type: {
//     type: String,
//     enum: ['heading', 'highlightedText', 'text', 'image'],
//     required: [true,"Please specify type of content"],
//   },
//   content: { type: String, required: [true,"Please enter content"] }
// });

// const sectionSchema = new Schema({
//   content: [contentBlockSchema]
// })

const blogSchema = new Schema({
  thumbnail: { type: String,required:[true,"Please Enter blog Thumbnail"] },
  title: { type: String, required: [true,"Please enter blog Title"], },
  category: { type: String },
  createdAt: { type: Date, default: Date.now, },
  readLength: { type: String },
  author: { type: String, required: [true,"Please enter Author name"], },
  updatedAt: { type: Date, default: Date.now, },
  content: { type: String, required: [true, "Please enter blog content"] },
});

export const Blog = model('Blog', blogSchema);

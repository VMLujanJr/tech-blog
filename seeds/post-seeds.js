const { Post } = require("../models");

const postData = [
  {
    id: 1,
    title: "Topic about Godzilla King of Beasts",
    content: "Godzilla can shoot beams of light!",
    user_id: 1,
  },
  {
    id: 2,
    title: "King Kong The Ape of the Century",
    content: "An ape was spotted in an unknown island. But he is as tall as a skyscraper!",
    user_id: 2,
  },
  {
    id: 3,
    title: "Stranger Things is strange?",
    content: "When are we getting a season 5?",
    user_id: 3,
  }
];

const seedPosts = () => Post.bulkCreate(postData, { individualHooks: true });

module.exports = seedPosts;
const { Comment } = require("../models");

const commentData = [
  {
    id: 1,
    comment_text: "I like King Kong, not Godzilla.",
    user_id: 2,
    post_id: 1,
  },
  {
    id: 2,
    comment_text: "I saw him squatting an airplane straight out of the sky!",
    user_id: 3,
    post_id: 2,
  },
  {
    id: 3,
    comment_text: "I don't think we'll ever get another season. Sadly.",
    user_id: 1,
    post_id: 3,
  }
];

const seedComments = () => Comment.bulkCreate(commentData, { individualHooks: true });

module.exports = seedComments;
const router = require('express').Router();
const { User } = require('../../models');

// GET ALL /api/users
router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
    })
    .then(dbUserData => res.json(dbUserData));
});

module.exports = router;
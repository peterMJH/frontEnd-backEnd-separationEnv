const express = require('express');
const router = express.Router();
const users = require('../users.json')

//findAll
router.get('/', (req, res, next) => {
  res.send(users)
});

//findOne/id
router.get('/:id', (req, res, next) => {
  const result = users.filter((user) => {
    return user.id === parseInt(req.params.id, 10)
  })
  console.log(result)
  res.send(result)
})

module.exports = router;

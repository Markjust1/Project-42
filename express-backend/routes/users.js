const express = require('express');
const router = express.Router();

// Get all users
router.get('/', (req, res) => {
  res.send('all users')
}) 
// Get one user
router.get('/:id', (req, res) => {
  res.send(req.params.id)
})
// Create user
router.post('/', (req, res) => {

})
// Update/modify user
router.patch('/', (req, res) => {

})
// Delete user
router.delete('/:id', (req, res) => {

}) 
module.exports = router;
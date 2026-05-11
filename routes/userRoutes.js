const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/', userController.createUser); // POST: http://localhost:5000/api/users
router.get('/', userController.getAllUsers); // GET: http://localhost:5000/api/users
router.get('/:id', userController.getUserById); // GET: http://localhost:5000/api/users/id_here
router.put('/:id', userController.updateUser); // PUT: http://localhost:5000/api/users/id_here
router.delete('/:id', userController.deleteUser); // DELETE: http://localhost:5000/api/users/id_here

module.exports = router; // Export the router to be used in server.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/', userController.createUser);
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById); 
router.put('/:id', userController.updateUser); // PUT: http://localhost:3000/api/users/12345
router.delete('/:id', userController.deleteUser);

module.exports = router;
const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

router.post('/', projectController.createProject); // POST: http://localhost:5000/api/projects
router.get('/', projectController.getAllProjects); // GET: http://localhost:5000/api/projects
router.get('/:id', projectController.getProjectById); // GET: http://localhost:5000/api/projects/id_here
router.put('/:id', projectController.updateProject); // PUT: http://localhost:5000/api/projects/id_here
router.delete('/:id', projectController.deleteProject); // DELETE: http://localhost:5000/api/projects/id_here

module.exports = router; // Export the router to be used in server.js
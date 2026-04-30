const project = require('../models/project');


// Create a new project
exports.createProject = async (req, res) => {
  try {
    const newProject = new project(req.body);
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all projects
exports.getAllProjects = async (req, res) => {
  try {
    const projects = await project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a project by ID
exports.getProjectById = async (req, res) => {
  try {
    const project = await project.findById(req.params.id);
    if (!project) {
        return res.status(404).json({ message: 'Project not found' });
    }
    res.json(project);
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
};

// Update a project by ID
exports.updateProject = async (req, res) => {
  try {
    const updatedProject = await project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedProject) {
        return res.status(404).json({ message: 'Project not found' });
    }
    res.json(updatedProject);
  } catch (error) {
    res.status(400).json({ error: error.message });
    }
};

// Delete a project by ID
exports.deleteProject = async (req, res) => {
  try {    const deletedProject = await project.findByIdAndDelete(req.params.id);
    if (!deletedProject) {
        return res.status(404).json({ message: 'Project not found' });
    }   
        res.json({ message: 'Project deleted successfully', project: deletedProject });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

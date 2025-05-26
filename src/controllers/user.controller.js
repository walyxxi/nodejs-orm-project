const { User } = require('../models');

module.exports = {
  // Get all users
  async getAll(req, res) {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch users' });
    }
  },

  // Get user by ID
  async getById(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) return res.status(404).json({ error: 'User not found' });
      res.json(user);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch user' });
    }
  },

  // Create new user
  async create(req, res) {
    try {
      const user = await User.create(req.body);
      res.status(201).json(user);
    } catch (err) {
      res.status(400).json({ error: 'Failed to create user' });
    }
  },

  // Update user
  async update(req, res) {
    try {
      const [updated] = await User.update(req.body, {
        where: { id: req.params.id },
      });
      if (!updated) return res.status(404).json({ error: 'User not found' });
      const updatedUser = await User.findByPk(req.params.id);
      res.json(updatedUser);
    } catch (err) {
      res.status(400).json({ error: 'Failed to update user' });
    }
  },

  // Delete user
  async delete(req, res) {
    try {
      const deleted = await User.destroy({
        where: { id: req.params.id },
      });
      if (!deleted) return res.status(404).json({ error: 'User not found' });
      res.status(204).send();
    } catch (err) {
      res.status(500).json({ error: 'Failed to delete user' });
    }
  },
};
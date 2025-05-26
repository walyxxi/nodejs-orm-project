const { Post } = require('../models');

module.exports = {
  // Get all posts
  async getAll(req, res) {
    try {
      const posts = await Post.findAll({ include: [{ model: User, as: 'user' }] });
      res.json(posts);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch posts' });
    }
  },

  // Get post by ID
  async getById(req, res) {
    try {
      const post = await Post.findByPk(req.params.id, { include: [{ model: User, as: 'user' }] });
      if (!post) return res.status(404).json({ error: 'Post not found' });
      res.json(post);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch post' });
    }
  },

  // Create new post
  async create(req, res) {
    try {
      const post = await Post.create(req.body);
      res.status(201).json(post);
    } catch (err) {
      res.status(400).json({ error: 'Failed to create post' });
    }
  },

  // Update post
  async update(req, res) {
    try {
      const [updated] = await Post.update(req.body, {
        where: { id: req.params.id },
      });
      if (!updated) return res.status(404).json({ error: 'Post not found' });
      const updatedPost = await Post.findByPk(req.params.id);
      res.json(updatedPost);
    } catch (err) {
      res.status(400).json({ error: 'Failed to update post' });
    }
  },

  // Delete post
  async delete(req, res) {
    try {
      const deleted = await Post.destroy({
        where: { id: req.params.id },
      });
      if (!deleted) return res.status(404).json({ error: 'Post not found' });
      res.status(204).send();
    } catch (err) {
      res.status(500).json({ error: 'Failed to delete post' });
    }
  },
};
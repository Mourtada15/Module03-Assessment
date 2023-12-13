import Article from '../models/articleModel.js';

export const getArticles = async (req, res) => {
    try {
      const articles = await Article.findAll();
      res.status(200).json({ articles });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error retrieving articles' });
    }
  };

export const getArticle = async (req, res) => {
    const { id } = req.params;
    try {
      const article = await Article.findByPk(id);
      if (!article) {
        return res.status(404).json({ message: 'Article not found' });
      }
      res.status(200).json({ article });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error retrieving article' });
    }
  };

export const createArticle = async (req, res) => {
    const { category, title, body, author, image } = req.body;
    try {
      const newArticle = await Article.create({ category, title, body, author, image });
      res.status(201).json({ article: newArticle });
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: 'Error creating Article' });
    }
  };

  export const updateArticle = async (req, res) => {
    const { id } = req.params;
    const { category, title, body, author, image } = req.body;
    try {
      const updatedArticle = await Teacher.update({ category, title, body, author, image }, { where: { id } });
      if (!updatedArticle[0]) {
        return res.status(404).json({ message: 'Article not found' });
      }
      res.status(200).json({ message: 'Article updated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error updating article' });
    }
  };

  export const deleteArticle = async (req, res) => {
    const { id } = req.params;
    try {
      const deletedCount = await Article.destroy({ where: { id } });
      if (!deletedCount) {
        return res.status(404).json({ message: 'Article not found' });
      }
      res.status(204).json();
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error deleting Article' });
    }
  };
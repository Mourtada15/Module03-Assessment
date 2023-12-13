import Admin from '../models/adminModel.js';

export const getAdmins = async (req, res) => {
    try {
      const admins = await Admin.findAll();
      res.status(200).json({ admins });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error retrieving admins' });
    }
  };

export const getAdmin = async (req, res) => {
    const { id } = req.params;
    try {
      const admin = await Admin.findByPk(id);
      if (!admin) {
        return res.status(404).json({ message: 'Admin not found' });
      }
      res.status(200).json({ admin });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error retrieving admin' });
    }
  };

export const createAdmin = async (req, res) => {
    const { username, email, password } = req.body;
    try {
      const newAdmin = await Admin.create({ username, email, password });
      res.status(201).json({ admin: newAdmin });
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: 'Error creating admin' });
    }
  };

  export const updateAdmin = async (req, res) => {
    const { id } = req.params;
    const { username, email, password } = req.body;
    try {
      const updatedAdmin = await Teacher.update({ username, email, password }, { where: { id } });
      if (!updatedAdmin[0]) {
        return res.status(404).json({ message: 'Admin not found' });
      }
      res.status(200).json({ message: 'Admin updated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error updating admin' });
    }
  };

  export const deleteAdmin = async (req, res) => {
    const { id } = req.params;
    try {
      const deletedCount = await Admin.destroy({ where: { id } });
      if (!deletedCount) {
        return res.status(404).json({ message: 'Admin not found' });
      }
      res.status(204).json();
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error deleting admin' });
    }
  };
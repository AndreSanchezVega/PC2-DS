import express from 'express';
import Report from '../models/Report.js';
import { verifyToken } from '../middleware/auth.js';
import ReportBuilder from '../builders/ReportBuilder.js';

const router = express.Router();

// Crear un nuevo reporte
router.post('/', verifyToken, async (req, res) => {
  const { title, description, location, latitude, longitude, category, priority, images } = req.body;

  try {
    const reportData = new ReportBuilder(req.user.userId, req.body.userName, req.body.userEmail)
      .setTitle(title)
      .setDescription(description)
      .setLocation(location, latitude, longitude)
      .setCategory(category)
      .setPriority(priority)
      .setImages(images)
      .build();

    const report = await Report.create(reportData);

    res.status(201).json({ message: 'Reporte creado exitosamente', report });
  } catch (error) {
    if (error.message.includes('obligatorios')) {
      return res.status(400).json({ message: error.message });
    }
    console.error(error);
    res.status(500).json({ message: 'Error al crear el reporte' });
  }
});

// Obtener todos los reportes del usuario actual
router.get('/user', verifyToken, async (req, res) => {
  try {
    const reports = await Report.find({ userId: req.user.userId }).sort({ createdAt: -1 });
    res.json(reports);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener reportes' });
  }
});

// Obtener todos los reportes (para municipal)
router.get('/', verifyToken, async (req, res) => {
  try {
    const { status, category, priority } = req.query;
    const filter = {};

    if (status) filter.status = status;
    if (category) filter.category = category;
    if (priority) filter.priority = priority;

    const reports = await Report.find(filter).sort({ createdAt: -1 });
    res.json(reports);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener reportes' });
  }
});

// Obtener un reporte específico
router.get('/:id', verifyToken, async (req, res) => {
  try {
    const report = await Report.findById(req.params.id);
    if (!report) {
      return res.status(404).json({ message: 'Reporte no encontrado' });
    }
    res.json(report);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener el reporte' });
  }
});

// Actualizar estado del reporte
router.put('/:id', verifyToken, async (req, res) => {
  const { status, priority } = req.body;

  try {
    const report = await Report.findByIdAndUpdate(
      req.params.id,
      { status, priority },
      { new: true }
    );

    if (!report) {
      return res.status(404).json({ message: 'Reporte no encontrado' });
    }

    res.json({ message: 'Reporte actualizado', report });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar el reporte' });
  }
});

// Eliminar reporte
router.delete('/:id', verifyToken, async (req, res) => {
  try {
    const report = await Report.findByIdAndDelete(req.params.id);

    if (!report) {
      return res.status(404).json({ message: 'Reporte no encontrado' });
    }

    res.json({ message: 'Reporte eliminado' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar el reporte' });
  }
});

export default router;

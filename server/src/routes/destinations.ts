import express from 'express';
import { DestinationController } from '../controllers/destinationController';

const router = express.Router();

// GET /api/destinations - Get all destinations with optional pagination and sorting
router.get('/', DestinationController.getAllDestinations);

// POST /api/destinations/search - Search destinations with filters
router.post('/search', DestinationController.searchDestinations);

// GET /api/destinations/attractions - Get available attraction types
router.get('/attractions', DestinationController.getAttractionTypes);

// GET /api/destinations/stats - Get destination statistics
router.get('/stats', DestinationController.getDestinationStats);

// GET /api/destinations/:id - Get specific destination by ID
router.get('/:id', DestinationController.getDestinationById);

export default router;
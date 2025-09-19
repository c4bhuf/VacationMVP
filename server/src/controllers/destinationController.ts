import { Request, Response } from 'express';
import { destinations } from '../data/destinations';
import { DestinationFilter } from '../utils/filterUtils';
import { SearchRequest, SearchResponse, Destination } from '../../../shared/src/types';

export class DestinationController {
  static getAllDestinations = (req: Request, res: Response): void => {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const sortBy = req.query.sortBy as 'rating' | 'popularity' | 'budget' | 'name' || 'rating';
      const sortOrder = req.query.sortOrder as 'asc' | 'desc' || 'desc';

      const sortedDestinations = DestinationFilter.sortDestinations(destinations, sortBy, sortOrder);
      const paginatedResult = DestinationFilter.paginateResults(sortedDestinations, page, limit);

      const response: SearchResponse = {
        destinations: paginatedResult.items,
        total: paginatedResult.total,
        page: paginatedResult.page,
        limit: paginatedResult.limit
      };

      res.json(response);
    } catch (error) {
      res.status(500).json({
        message: 'Internal server error',
        code: 'INTERNAL_ERROR'
      });
    }
  };

  static searchDestinations = (req: Request, res: Response): void => {
    try {
      const searchRequest = req.body as SearchRequest;
      const { filters, page = 1, limit = 10, sortBy = 'rating', sortOrder = 'desc' } = searchRequest;

      // Filter destinations based on search criteria
      const filteredDestinations = DestinationFilter.filterDestinations(destinations, filters);

      // Sort results
      const sortedDestinations = DestinationFilter.sortDestinations(filteredDestinations, sortBy, sortOrder);

      // Paginate results
      const paginatedResult = DestinationFilter.paginateResults(sortedDestinations, page, limit);

      const response: SearchResponse = {
        destinations: paginatedResult.items,
        total: paginatedResult.total,
        page: paginatedResult.page,
        limit: paginatedResult.limit
      };

      res.json(response);
    } catch (error) {
      console.error('Search error:', error);
      res.status(500).json({
        message: 'Internal server error',
        code: 'SEARCH_ERROR'
      });
    }
  };

  static getDestinationById = (req: Request, res: Response): void => {
    try {
      const { id } = req.params;
      const destination = destinations.find(dest => dest.id === id);

      if (!destination) {
        res.status(404).json({
          message: 'Destination not found',
          code: 'NOT_FOUND'
        });
        return;
      }

      res.json(destination);
    } catch (error) {
      res.status(500).json({
        message: 'Internal server error',
        code: 'INTERNAL_ERROR'
      });
    }
  };

  static getAttractionTypes = (req: Request, res: Response): void => {
    try {
      const attractionTypes = [
        'beach',
        'historical',
        'hiking',
        'nightlife',
        'culture',
        'adventure',
        'relaxation',
        'food',
        'shopping',
        'nature',
        'museums',
        'architecture'
      ];

      res.json(attractionTypes);
    } catch (error) {
      res.status(500).json({
        message: 'Internal server error',
        code: 'INTERNAL_ERROR'
      });
    }
  };

  static getDestinationStats = (req: Request, res: Response): void => {
    try {
      const stats = {
        totalDestinations: destinations.length,
        continents: [...new Set(destinations.map(d => d.continent))],
        averageRating: destinations.reduce((sum, d) => sum + d.rating, 0) / destinations.length,
        budgetRanges: {
          budget: {
            min: Math.min(...destinations.map(d => d.budget.daily.budget)),
            max: Math.max(...destinations.map(d => d.budget.daily.budget))
          },
          midRange: {
            min: Math.min(...destinations.map(d => d.budget.daily.midRange)),
            max: Math.max(...destinations.map(d => d.budget.daily.midRange))
          },
          luxury: {
            min: Math.min(...destinations.map(d => d.budget.daily.luxury)),
            max: Math.max(...destinations.map(d => d.budget.daily.luxury))
          }
        }
      };

      res.json(stats);
    } catch (error) {
      res.status(500).json({
        message: 'Internal server error',
        code: 'INTERNAL_ERROR'
      });
    }
  };
}
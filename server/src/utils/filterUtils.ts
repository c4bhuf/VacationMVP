import { Destination, SearchFilters, BudgetType } from '../../../shared/src/types';

export class DestinationFilter {
  static filterDestinations(destinations: Destination[], filters: SearchFilters): Destination[] {
    return destinations.filter(destination => {
      // Filter by attractions
      if (filters.attractions.length > 0) {
        const hasMatchingAttraction = filters.attractions.some(attraction =>
          destination.attractions.includes(attraction)
        );
        if (!hasMatchingAttraction) return false;
      }

      // Filter by budget
      if (filters.budget) {
        const budgetRange = this.getBudgetRange(destination, filters.budget.type);
        if (budgetRange < filters.budget.min || budgetRange > filters.budget.max) {
          return false;
        }
      }

      // Filter by weather preference
      if (filters.weather && filters.weather !== 'any') {
        if (!this.matchesWeatherPreference(destination, filters.weather)) {
          return false;
        }
      }

      // Filter by region (continent)
      if (filters.region && destination.continent.toLowerCase() !== filters.region.toLowerCase()) {
        return false;
      }

      return true;
    });
  }

  static sortDestinations(
    destinations: Destination[],
    sortBy: 'rating' | 'popularity' | 'budget' | 'name' = 'rating',
    sortOrder: 'asc' | 'desc' = 'desc'
  ): Destination[] {
    return destinations.sort((a, b) => {
      let comparison = 0;

      switch (sortBy) {
        case 'rating':
          comparison = a.rating - b.rating;
          break;
        case 'popularity':
          comparison = a.popularityScore - b.popularityScore;
          break;
        case 'budget':
          comparison = a.budget.daily.midRange - b.budget.daily.midRange;
          break;
        case 'name':
          comparison = a.name.localeCompare(b.name);
          break;
      }

      return sortOrder === 'desc' ? -comparison : comparison;
    });
  }

  private static getBudgetRange(destination: Destination, budgetType: BudgetType): number {
    switch (budgetType) {
      case 'budget':
        return destination.budget.daily.budget;
      case 'midRange':
        return destination.budget.daily.midRange;
      case 'luxury':
        return destination.budget.daily.luxury;
      default:
        return destination.budget.daily.midRange;
    }
  }

  private static matchesWeatherPreference(destination: Destination, preference: string): boolean {
    const avgTemp = (destination.weather.averageTemperature.min + destination.weather.averageTemperature.max) / 2;

    switch (preference) {
      case 'sunny':
        return destination.weather.sunnyDays > 250;
      case 'mild':
        return avgTemp >= 15 && avgTemp <= 25;
      case 'cool':
        return avgTemp < 15;
      default:
        return true;
    }
  }

  static paginateResults<T>(items: T[], page: number = 1, limit: number = 10): {
    items: T[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  } {
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedItems = items.slice(startIndex, endIndex);

    return {
      items: paginatedItems,
      total: items.length,
      page,
      limit,
      totalPages: Math.ceil(items.length / limit)
    };
  }
}
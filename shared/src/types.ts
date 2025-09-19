// Core destination interface
export interface Destination {
  id: string;
  name: string;
  country: string;
  continent: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  images: string[];
  description: string;
  attractions: AttractionType[];
  weather: WeatherInfo;
  budget: BudgetRange;
  bestTimeToVisit: string[];
  rating: number;
  popularityScore: number;
}

// Weather information
export interface WeatherInfo {
  averageTemperature: {
    min: number;
    max: number;
  };
  climate: ClimateType;
  rainyMonths: string[];
  sunnyDays: number; // days per year
}

// Budget information
export interface BudgetRange {
  daily: {
    budget: number;      // < 50 USD
    midRange: number;    // 50-150 USD
    luxury: number;      // > 150 USD
  };
  currency: string;
}

// Search filter types
export interface SearchFilters {
  duration?: {
    min: number;
    max: number;
  };
  budget?: {
    min: number;
    max: number;
    type: BudgetType;
  };
  attractions: AttractionType[];
  weather?: WeatherPreference;
  region?: string;
}

// Enums and union types
export type AttractionType =
  | 'beach'
  | 'historical'
  | 'hiking'
  | 'nightlife'
  | 'culture'
  | 'adventure'
  | 'relaxation'
  | 'food'
  | 'shopping'
  | 'nature'
  | 'museums'
  | 'architecture';

export type ClimateType =
  | 'tropical'
  | 'temperate'
  | 'desert'
  | 'mediterranean'
  | 'continental'
  | 'polar';

export type BudgetType = 'budget' | 'midRange' | 'luxury';

export type WeatherPreference =
  | 'sunny'
  | 'mild'
  | 'cool'
  | 'any';

// API response types
export interface SearchResponse {
  destinations: Destination[];
  total: number;
  page: number;
  limit: number;
}

export interface ApiError {
  message: string;
  code: string;
  details?: any;
}

// Search request type
export interface SearchRequest {
  filters: SearchFilters;
  page?: number;
  limit?: number;
  sortBy?: 'rating' | 'popularity' | 'budget' | 'name';
  sortOrder?: 'asc' | 'desc';
}
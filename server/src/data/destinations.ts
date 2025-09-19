import { Destination } from '../../../shared/src/types';

export const destinations: Destination[] = [
  {
    id: '1',
    name: 'Bali',
    country: 'Indonesia',
    continent: 'Asia',
    coordinates: {
      latitude: -8.3405,
      longitude: 115.0920
    },
    images: [
      'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1',
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2'
    ],
    description: 'A tropical paradise known for its stunning beaches, lush rice terraces, and vibrant Hindu culture.',
    attractions: ['beach', 'culture', 'relaxation', 'nature', 'food'],
    weather: {
      averageTemperature: { min: 24, max: 30 },
      climate: 'tropical',
      rainyMonths: ['November', 'December', 'January', 'February', 'March'],
      sunnyDays: 250
    },
    budget: {
      daily: {
        budget: 25,
        midRange: 75,
        luxury: 200
      },
      currency: 'USD'
    },
    bestTimeToVisit: ['April', 'May', 'June', 'July', 'August', 'September'],
    rating: 4.6,
    popularityScore: 95
  },
  {
    id: '2',
    name: 'Paris',
    country: 'France',
    continent: 'Europe',
    coordinates: {
      latitude: 48.8566,
      longitude: 2.3522
    },
    images: [
      'https://images.unsplash.com/photo-1502602898536-47ad22581b52',
      'https://images.unsplash.com/photo-1499856871958-5b9627545d1a'
    ],
    description: 'The City of Light, famous for its art, fashion, gastronomy, and iconic landmarks like the Eiffel Tower.',
    attractions: ['historical', 'culture', 'museums', 'architecture', 'food', 'shopping'],
    weather: {
      averageTemperature: { min: 3, max: 25 },
      climate: 'temperate',
      rainyMonths: ['October', 'November', 'December', 'January'],
      sunnyDays: 180
    },
    budget: {
      daily: {
        budget: 60,
        midRange: 150,
        luxury: 400
      },
      currency: 'USD'
    },
    bestTimeToVisit: ['April', 'May', 'June', 'September', 'October'],
    rating: 4.7,
    popularityScore: 98
  },
  {
    id: '3',
    name: 'Tokyo',
    country: 'Japan',
    continent: 'Asia',
    coordinates: {
      latitude: 35.6762,
      longitude: 139.6503
    },
    images: [
      'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf',
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26'
    ],
    description: 'A vibrant metropolis blending ultra-modern technology with traditional culture and cuisine.',
    attractions: ['culture', 'food', 'shopping', 'nightlife', 'museums', 'architecture'],
    weather: {
      averageTemperature: { min: 5, max: 30 },
      climate: 'temperate',
      rainyMonths: ['June', 'July', 'September', 'October'],
      sunnyDays: 200
    },
    budget: {
      daily: {
        budget: 70,
        midRange: 180,
        luxury: 500
      },
      currency: 'USD'
    },
    bestTimeToVisit: ['March', 'April', 'May', 'September', 'October', 'November'],
    rating: 4.5,
    popularityScore: 92
  },
  {
    id: '4',
    name: 'Santorini',
    country: 'Greece',
    continent: 'Europe',
    coordinates: {
      latitude: 36.3932,
      longitude: 25.4615
    },
    images: [
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff',
      'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e'
    ],
    description: 'A stunning Greek island with white-washed buildings, blue domes, and breathtaking sunsets.',
    attractions: ['beach', 'relaxation', 'historical', 'architecture', 'food'],
    weather: {
      averageTemperature: { min: 10, max: 28 },
      climate: 'mediterranean',
      rainyMonths: ['November', 'December', 'January', 'February'],
      sunnyDays: 280
    },
    budget: {
      daily: {
        budget: 50,
        midRange: 120,
        luxury: 300
      },
      currency: 'USD'
    },
    bestTimeToVisit: ['April', 'May', 'June', 'September', 'October'],
    rating: 4.8,
    popularityScore: 88
  },
  {
    id: '5',
    name: 'Costa Rica',
    country: 'Costa Rica',
    continent: 'North America',
    coordinates: {
      latitude: 9.7489,
      longitude: -83.7534
    },
    images: [
      'https://images.unsplash.com/photo-1582538885592-e70a5d7ab3d3',
      'https://images.unsplash.com/photo-1544731612-de7f96afe55f'
    ],
    description: 'A biodiversity hotspot with lush rainforests, stunning beaches, and incredible wildlife.',
    attractions: ['nature', 'adventure', 'hiking', 'beach', 'relaxation'],
    weather: {
      averageTemperature: { min: 20, max: 30 },
      climate: 'tropical',
      rainyMonths: ['May', 'June', 'July', 'August', 'September', 'October'],
      sunnyDays: 200
    },
    budget: {
      daily: {
        budget: 40,
        midRange: 100,
        luxury: 250
      },
      currency: 'USD'
    },
    bestTimeToVisit: ['December', 'January', 'February', 'March', 'April'],
    rating: 4.4,
    popularityScore: 82
  },
  {
    id: '6',
    name: 'New York City',
    country: 'United States',
    continent: 'North America',
    coordinates: {
      latitude: 40.7128,
      longitude: -74.0060
    },
    images: [
      'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9',
      'https://images.unsplash.com/photo-1518391846015-55a9cc003b25'
    ],
    description: 'The city that never sleeps, offering world-class museums, Broadway shows, and iconic landmarks.',
    attractions: ['culture', 'museums', 'nightlife', 'shopping', 'architecture', 'food'],
    weather: {
      averageTemperature: { min: -3, max: 29 },
      climate: 'continental',
      rainyMonths: ['April', 'May', 'June', 'July', 'August'],
      sunnyDays: 224
    },
    budget: {
      daily: {
        budget: 80,
        midRange: 200,
        luxury: 600
      },
      currency: 'USD'
    },
    bestTimeToVisit: ['April', 'May', 'June', 'September', 'October', 'November'],
    rating: 4.3,
    popularityScore: 96
  },
  {
    id: '7',
    name: 'Dubai',
    country: 'United Arab Emirates',
    continent: 'Asia',
    coordinates: {
      latitude: 25.2048,
      longitude: 55.2708
    },
    images: [
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c',
      'https://images.unsplash.com/photo-1518684079-3c830dcef090'
    ],
    description: 'A futuristic city in the desert with luxury shopping, ultramodern architecture, and vibrant nightlife.',
    attractions: ['shopping', 'architecture', 'nightlife', 'relaxation', 'food', 'beach'],
    weather: {
      averageTemperature: { min: 14, max: 41 },
      climate: 'desert',
      rainyMonths: ['December', 'January', 'February'],
      sunnyDays: 340
    },
    budget: {
      daily: {
        budget: 60,
        midRange: 180,
        luxury: 500
      },
      currency: 'USD'
    },
    bestTimeToVisit: ['November', 'December', 'January', 'February', 'March'],
    rating: 4.2,
    popularityScore: 90
  },
  {
    id: '8',
    name: 'Iceland',
    country: 'Iceland',
    continent: 'Europe',
    coordinates: {
      latitude: 64.9631,
      longitude: -19.0208
    },
    images: [
      'https://images.unsplash.com/photo-1539066484058-de4e1e5c1f50',
      'https://images.unsplash.com/photo-1531366936337-7c912a4589a7'
    ],
    description: 'A Nordic island nation with stunning natural phenomena like glaciers, geysers, and the Northern Lights.',
    attractions: ['nature', 'adventure', 'hiking', 'relaxation'],
    weather: {
      averageTemperature: { min: -1, max: 13 },
      climate: 'polar',
      rainyMonths: ['September', 'October', 'November', 'December', 'January'],
      sunnyDays: 150
    },
    budget: {
      daily: {
        budget: 90,
        midRange: 200,
        luxury: 400
      },
      currency: 'USD'
    },
    bestTimeToVisit: ['June', 'July', 'August', 'September'],
    rating: 4.7,
    popularityScore: 85
  }
];
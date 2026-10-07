export interface MonthProfile {
  month: string;
  name: string;
  season: 'Spring' | 'Summer' | 'Autumn' | 'Winter';
  avgTemp: string; // e.g. "18°C - 24°C"
  crowdLevel: 'Low' | 'Moderate' | 'Peak';
  weatherDesc: string;
  spectacle: string;
  bestRegions: string[];
  recommendedItineraryId: string;
  tips: string;
}

export const SEASONALITY_DATA: MonthProfile[] = [
  {
    month: '01',
    name: 'January',
    season: 'Winter',
    avgTemp: '15°C - 20°C',
    crowdLevel: 'Moderate',
    weatherDesc: 'Crisp northern air, pleasant mild sun in the south.',
    spectacle: 'Beitou & Wulai Thermal Springs Peak Soaking',
    bestRegions: ['Beitou', 'Tainan', 'Kenting'],
    recommendedItineraryId: 'itinerary-6',
    tips: 'Ideal for thermal bath wellness and southern heritage tours.'
  },
  {
    month: '02',
    name: 'February',
    season: 'Winter',
    avgTemp: '16°C - 21°C',
    crowdLevel: 'Peak',
    weatherDesc: 'Cool temperatures with festive energy during Lunar New Year.',
    spectacle: 'Pingxi Sky Lantern Festival & Wuling Farm Cherry Blossoms',
    bestRegions: ['Taipei', 'Pingxi', 'Taichung'],
    recommendedItineraryId: 'itinerary-1',
    tips: 'Book far in advance; Lunar New Year is the busiest transit period.'
  },
  {
    month: '03',
    name: 'March',
    season: 'Spring',
    avgTemp: '18°C - 24°C',
    crowdLevel: 'Moderate',
    weatherDesc: 'Perfect golden spring weather across the entire island.',
    spectacle: 'Alishan Cloud Forest Cherry Blossom Grand Bloom',
    bestRegions: ['Alishan', 'Chiayi', 'Sun Moon Lake'],
    recommendedItineraryId: 'itinerary-3',
    tips: 'The most spectacular time to ride the Alishan Forest Railway.'
  },
  {
    month: '04',
    name: 'April',
    season: 'Spring',
    avgTemp: '21°C - 27°C',
    crowdLevel: 'Low',
    weatherDesc: 'Warm, breezy, and comfortable before the plum rains.',
    spectacle: 'Enchanted Firefly Season in Nantou Highlands',
    bestRegions: ['Nantou', 'Miaoli', 'Hualien'],
    recommendedItineraryId: 'itinerary-4',
    tips: 'Excellent for luxury camping and eco-tours in the central mountains.'
  },
  {
    month: '05',
    name: 'May',
    season: 'Spring',
    avgTemp: '24°C - 30°C',
    crowdLevel: 'Low',
    weatherDesc: 'Warmer days with occasional brief afternoon showers.',
    spectacle: 'Penghu International Ocean Fireworks Festival',
    bestRegions: ['Penghu', 'Kinmen', 'Tainan'],
    recommendedItineraryId: 'itinerary-10',
    tips: 'Fly private to the offshore islands for uncrowded luxury.'
  },
  {
    month: '06',
    name: 'June',
    season: 'Summer',
    avgTemp: '27°C - 33°C',
    crowdLevel: 'Moderate',
    weatherDesc: 'The start of tropical summer; high humidity and heat.',
    spectacle: 'Dragon Boat Festivals & Golden Aiwen Mango Harvest',
    bestRegions: ['Tainan', 'Pingtung', 'Kenting'],
    recommendedItineraryId: 'itinerary-5',
    tips: 'A culinary paradise for tropical fruits; pace outdoor activities.'
  },
  {
    month: '07',
    name: 'July',
    season: 'Summer',
    avgTemp: '29°C - 35°C',
    crowdLevel: 'Peak',
    weatherDesc: 'Peak summer heat; perfect for alpine escapes and water sports.',
    spectacle: 'Taitung Hot Air Balloon Fiesta & Pacific Surfing',
    bestRegions: ['Taitung', 'Kenting', 'Yushan'],
    recommendedItineraryId: 'itinerary-9',
    tips: 'Retreat to high-altitude luxury resorts to escape the city heat.'
  },
  {
    month: '08',
    name: 'August',
    season: 'Summer',
    avgTemp: '28°C - 34°C',
    crowdLevel: 'Peak',
    weatherDesc: 'Hot and humid, with a chance of Pacific typhoons.',
    spectacle: 'Golden Daylily Blossom Carpets on Liushidan Mountain',
    bestRegions: ['Hualien', 'Taitung', 'Green Island'],
    recommendedItineraryId: 'itinerary-8',
    tips: 'Unrivaled photography across boundless yellow daylily fields.'
  },
  {
    month: '09',
    name: 'Autumn',
    season: 'Autumn',
    avgTemp: '25°C - 31°C',
    crowdLevel: 'Moderate',
    weatherDesc: 'Cooling slightly as the island transitions into autumn.',
    spectacle: 'Sun Moon Lake Swimming Carnival & Moon Festivals',
    bestRegions: ['Sun Moon Lake', 'Taichung', 'Taipei'],
    recommendedItineraryId: 'itinerary-7',
    tips: 'Reserve lakeside suites early for the Mid-Autumn Festival.'
  },
  {
    month: '10',
    name: 'October',
    season: 'Autumn',
    avgTemp: '22°C - 28°C',
    crowdLevel: 'Peak',
    weatherDesc: 'Optimal travel weather of the year; dry, sunny, and temperate.',
    spectacle: 'Taroko Gorge Marathon & Autumn High Mountain Oolong Harvest',
    bestRegions: ['Taroko', 'Taipei', 'Kaohsiung'],
    recommendedItineraryId: 'itinerary-4',
    tips: 'Book private helicopter and luxury suites 6 months in advance.'
  },
  {
    month: '11',
    name: 'November',
    season: 'Autumn',
    avgTemp: '19°C - 25°C',
    crowdLevel: 'Peak',
    weatherDesc: 'Crisp, clear, and immensely comfortable island-wide.',
    spectacle: 'Taiwan Open of Surfing & Golden Maple Leaves',
    bestRegions: ['Taitung', 'Aowanda', 'Tainan'],
    recommendedItineraryId: 'itinerary-8',
    tips: 'Exceptional for Pacific coastal road trips and heritage walks.'
  },
  {
    month: '12',
    name: 'December',
    season: 'Winter',
    avgTemp: '16°C - 22°C',
    crowdLevel: 'Moderate',
    weatherDesc: 'Cooling down, excellent for hot springs and urban exploring.',
    spectacle: 'Taipei 101 New Year Revelry & Winter Solstice Tangyuan',
    bestRegions: ['Taipei', 'Beitou', 'Taichung'],
    recommendedItineraryId: 'itinerary-2',
    tips: 'Secure VIP tables for Taipei 101 fireworks a year in advance.'
  }
];

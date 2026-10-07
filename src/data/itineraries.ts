export interface DayPlan {
  day: number;
  title: string;
  location: string;
  stay: string;
  desc: string;
  image?: string;
}

export interface Itinerary {
  id: string;
  slug: string;
  rank: number;
  title: string;
  subtitle: string;
  duration: number; // in days
  category: 'Luxe Rail' | 'Culinary' | 'Nature & Peaks' | 'Heritage' | 'Coastal & Sea';
  tier: 'Ultra-Luxe Bespoke' | 'Private Signature' | 'Connoisseur Edition';
  priceEstimate: string;
  heroImage: string;
  badge: string;
  summary: string;
  routeStops: string[];
  svgRoutePath: string; // SVG path d for animated drawing
  highlights: string[];
  days: DayPlan[];
}

export const TOP_10_ITINERARIES: Itinerary[] = [
  {
    id: 'itinerary-1',
    slug: 'grand-formosa-luxury-traverse',
    rank: 1,
    title: 'The Grand Formosa Grand Tour',
    subtitle: 'The Definitive Island Circuit via High-Speed Rail & Private Mercedes Maybach',
    duration: 12,
    category: 'Luxe Rail',
    tier: 'Ultra-Luxe Bespoke',
    priceEstimate: '$8,400',
    heroImage: 'https://plus.unsplash.com/premium_photo-1661951189203-12decb9d7f8e?q=80&w=600&q=75&auto=format&fit=crop',
    badge: 'Flagship 2026',
    summary: 'A seamless luxury circumnavigation connecting Taipei’s Mandarin Oriental, Taroko Gorge’s Silks Place, Sun Moon Lake’s The Lalu, and Tainan’s Silk Place with private helicopter and HSR Business Class transfers.',
    routeStops: ['Taipei', 'Taroko Gorge', 'Sun Moon Lake', 'Alishan', 'Tainan', 'Kaohsiung'],
    svgRoutePath: 'M 195 90 L 225 150 L 160 210 L 140 240 L 115 285 L 125 330',
    highlights: [
      'Private after-hours tour of the National Palace Museum with senior curator',
      'Presidential Suite at The Lalu overlooking misty Sun Moon Lake dawn',
      'Helicopter transfer over the Taroko marble gorge canyons',
      'Exclusive tea tasting with an award-winning Alishan high-mountain tea master'
    ],
    days: [
      {
        day: 1,
        title: 'Arrival in Taipei & VIP Airside Welcome',
        location: 'Taipei',
        stay: 'Mandarin Oriental Taipei',
        desc: 'Fast-track immigration clearance, private luxury chauffeur, and evening tasting menu at 3-Michelin starred Le Palais.',
        image: 'https://plus.unsplash.com/premium_photo-1661951189203-12decb9d7f8e?q=80&w=600&q=75&auto=format&fit=crop'
      },
      {
        day: 2,
        title: 'The Ancient Imperial Vaults',
        location: 'Taipei',
        stay: 'Mandarin Oriental Taipei',
        desc: 'Private curator access to Song Dynasty ceramics and rare imperial jade artifacts before opening hours.',
        image: 'https://plus.unsplash.com/premium_photo-1661962818476-adac14ed5d46?q=80&w=600&q=75&auto=format&fit=crop'
      },
      {
        day: 3,
        title: 'Taroko Gorge Marble Sanctuary',
        location: 'Hualien',
        stay: 'Silks Place Taroko',
        desc: 'Scenic business rail to Hualien followed by private escorted canyon walks through Swallow Grotto and Eternal Spring Shrine.',
        image: 'https://images.unsplash.com/photo-1723389078089-b6705d29b6d8?q=80&w=600&q=75&auto=format&fit=crop'
      },
      {
        day: 4,
        title: 'Pacific Coastal Serenity',
        location: 'East Coast',
        stay: 'Silks Place Taroko',
        desc: 'Private sunrise meditation on Qixingtan beach followed by indigenous Amis farm-to-table cuisine.',
        image: 'https://images.unsplash.com/photo-1768473365585-9936ae9b105c?q=80&w=600&q=75&auto=format&fit=crop'
      },
      {
        day: 5,
        title: 'Sun Moon Lake Zen Retreat',
        location: 'Nantou',
        stay: 'The Lalu Sun Moon Lake',
        desc: 'Cross-island scenic pass into the central mountain lakes; sunset cruise on a chartered mahogany electric yacht.',
        image: '/images/the-lalu-sanctuary.webp'
      },
      {
        day: 6,
        title: 'Sacred High Mountain Tea Terraces',
        location: 'Alishan',
        stay: 'Alishan Indigo / Heritage Manor',
        desc: 'Centenary forest train ascent through cypress groves, private Oolong roast evaluation.',
        image: 'https://plus.unsplash.com/premium_photo-1710119487743-48959c984d45?q=80&w=600&q=75&auto=format&fit=crop'
      },
      {
        day: 7,
        title: 'The Imperial Southern Capital',
        location: 'Tainan',
        stay: 'Silks Place Tainan',
        desc: 'Private exploration of 17th-century Dutch Forts, ancestral tea houses, and private food historian escort.',
        image: 'https://plus.unsplash.com/premium_photo-1734085778642-1a11db67d307?q=80&w=600&q=75&auto=format&fit=crop'
      },
      {
        day: 8,
        title: 'Kaohsiung Harbor & Modern Arts',
        location: 'Kaohsiung',
        stay: 'InterContinental Kaohsiung',
        desc: 'Private harbor yacht charter and evening access to the National Kaohsiung Center for the Arts.',
        image: 'https://plus.unsplash.com/premium_photo-1724314652701-2e9de1099eba?q=80&w=600&q=75&auto=format&fit=crop'
      },
      {
        day: 9,
        title: 'Bullet Train Return & Beitou Thermal Villa',
        location: 'Beitou',
        stay: 'Villa 32 Beitou',
        desc: 'High Speed Rail Business class to Taipei, private mineral hot spring sanctuary soak.',
        image: 'https://plus.unsplash.com/premium_photo-1688417352550-ce845b2c47cc?q=80&w=600&q=75&auto=format&fit=crop'
      },
      {
        day: 10,
        title: 'Jiufen Gold Mountain & Twilight Lanterns',
        location: 'New Taipei',
        stay: 'Villa 32 Beitou',
        desc: 'Bypassing crowds via private mountain villa access for sunset tea overlooking the East China Sea.',
        image: 'https://images.unsplash.com/photo-1540187334920-54e87c2771c0?q=80&w=600&q=75&auto=format&fit=crop'
      },
      {
        day: 11,
        title: 'Culinary Masterclass & Haute Living',
        location: 'Taipei',
        stay: 'Mandarin Oriental Taipei',
        desc: 'Private market walk with celebrated Taiwanese chefs and celebratory farewell banquet.',
        image: 'https://images.unsplash.com/photo-1583560266880-bdd37ea65fe0?q=80&w=600&q=75&auto=format&fit=crop'
      },
      {
        day: 12,
        title: 'VIP Departures',
        location: 'Taoyuan',
        stay: 'Departure',
        desc: 'Private tarmac lounge escort and luxury transfer to international flights.',
        image: 'https://plus.unsplash.com/premium_photo-1661951189203-12decb9d7f8e?q=80&w=600&q=75&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 'itinerary-2',
    slug: 'michelin-stars-night-market-odyssey',
    rank: 2,
    title: 'Michelin Stars & Night Market Mysteries',
    subtitle: 'Taiwan’s Gastronomic Soul from Street Hawker Stalls to Three-Star Banquets',
    duration: 6,
    category: 'Culinary',
    tier: 'Private Signature',
    priceEstimate: '$4,600',
    heroImage: 'https://plus.unsplash.com/premium_photo-1661333506045-aa5cfdb0d8c6?q=80&w=600&q=75&auto=format&fit=crop',
    badge: 'Epicurean Favorite',
    summary: 'A curated sensory deep-dive pairing reservations at Le Palais, RAW, and JL Studio with VIP night market tours guided by local food historians.',
    routeStops: ['Taipei', 'Taichung', 'Tainan'],
    svgRoutePath: 'M 195 90 L 145 160 L 115 285',
    highlights: [
      'Guaranteed private dining room at 3-Star Michelin Le Palais',
      'VIP front-of-line tastings at Ningxia and Fengjia Night Markets',
      'Behind-the-scenes sesame oil and century-old soy sauce artisanal workshops in Tainan',
      'Exclusive modern Taiwanese tasting menu at JL Studio (Taichung)'
    ],
    days: [
      {
        day: 1,
        title: 'The Capital of Flavor',
        location: 'Taipei',
        stay: 'Regent Taipei',
        desc: 'Chef-led welcome dinner exploring reimagined Taiwanese comfort classics.',
        image: 'https://plus.unsplash.com/premium_photo-1661951189203-12decb9d7f8e?q=80&w=600&q=75&auto=format&fit=crop'
      },
      {
        day: 2,
        title: 'Street Food Alchemy & Secret Alleys',
        location: 'Taipei',
        stay: 'Regent Taipei',
        desc: 'Private food historian walk through historic Dadaocheng and Raohe Street.',
        image: 'https://plus.unsplash.com/premium_photo-1661333506045-aa5cfdb0d8c6?q=80&w=600&q=75&auto=format&fit=crop'
      },
      {
        day: 3,
        title: 'Taichung Avant-Garde Gastronomy',
        location: 'Taichung',
        stay: 'The Lin Hotel',
        desc: 'HSR transfer to Taichung. Dinner at 3-Star JL Studio blending Southeast Asian spice with Taiwanese terroir.',
        image: 'https://plus.unsplash.com/premium_photo-1676467962567-3d80fc5b5a64?q=80&w=600&q=75&auto=format&fit=crop'
      },
      {
        day: 4,
        title: 'The Ancient Pantry of Tainan',
        location: 'Tainan',
        stay: 'Silks Place Tainan',
        desc: 'Exploring early morning beef soup culture, eel noodles, and ancestral shrimp rolls.',
        image: 'https://plus.unsplash.com/premium_photo-1734085778642-1a11db67d307?q=80&w=600&q=75&auto=format&fit=crop'
      },
      {
        day: 5,
        title: 'Heritage Fermentation Masters',
        location: 'Tainan',
        stay: 'Silks Place Tainan',
        desc: 'Hands-on black bean soy brewing and private rooftop dinner overlooking Anping port.',
        image: 'https://plus.unsplash.com/premium_photo-1734085778642-1a11db67d307?q=80&w=600&q=75&auto=format&fit=crop'
      },
      {
        day: 6,
        title: 'The Sweet Farewell',
        location: 'Taipei',
        stay: 'Regent Taipei',
        desc: 'Artisanal pineapple cake masterclass and farewell fine-dining pairing.',
        image: 'https://plus.unsplash.com/premium_photo-1661951189203-12decb9d7f8e?q=80&w=600&q=75&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 'itinerary-3',
    slug: 'high-mountain-oolong-mist-peaks',
    rank: 3,
    title: 'High Mountain Oolong & Mist Shrouded Peaks',
    subtitle: 'Alishan Cloud Forests, Century Cypress, & Championship Tea Estates',
    duration: 5,
    category: 'Nature & Peaks',
    tier: 'Ultra-Luxe Bespoke',
    priceEstimate: '$4,200',
    heroImage: 'https://plus.unsplash.com/premium_photo-1661952578770-79010299a9f9?q=80&w=600&q=75&auto=format&fit=crop',
    badge: 'Sensory Escape',
    summary: 'Retreat 2,500 meters into Taiwan’s spine. Ride the restored Alishan Forest Railway, wake to the sea of clouds at dawn, and pick tea leaves alongside championship roasters.',
    routeStops: ['Chiayi', 'Alishan', 'Yushan Foothills'],
    svgRoutePath: 'M 130 220 L 155 240 L 165 260',
    highlights: [
      'Private chartered carriage on the historic Alishan Hinoki steam train',
      'Exclusive dawn sunrise viewing over the sea of clouds from a private peak lookout',
      'Private cupping session tasting Grand Champion Dong Ding and Dayuling teas',
      'Stay at Taiwan’s highest luxury alpine retreat'
    ],
    days: [
      {
        day: 1,
        title: 'Ascending into the Mist',
        location: 'Chiayi / Alishan',
        stay: 'Hotel Indigo Alishan',
        desc: 'Private Mercedes transfer up the emerald ridges of Chiayi into ancient cedar canopies.',
        image: 'https://plus.unsplash.com/premium_photo-1710119487743-48959c984d45?q=80&w=600&q=75&auto=format&fit=crop'
      },
      {
        day: 2,
        title: 'The Sacred Trees of Formosa',
        location: 'Alishan',
        stay: 'Hotel Indigo Alishan',
        desc: 'Early sunrise walk among 2,000-year-old red cypresses followed by forest bathing meditation.',
        image: 'https://plus.unsplash.com/premium_photo-1710119487743-48959c984d45?q=80&w=600&q=75&auto=format&fit=crop'
      },
      {
        day: 3,
        title: 'Mastery of the Tea Leaf',
        location: 'Meishan',
        stay: 'Boutique Tea Lodge',
        desc: 'Hands-on picking and charcoal roasting workshop at an award-winning micro-plantation.',
        image: 'https://plus.unsplash.com/premium_photo-1661952578770-79010299a9f9?q=80&w=600&q=75&auto=format&fit=crop'
      },
      {
        day: 4,
        title: 'Yushan High Altitude Trails',
        location: 'Yushan Range',
        stay: 'Hotel Indigo Alishan',
        desc: 'Private botanist guided trek through alpine bamboo groves and rhododendron valleys.',
        image: 'https://plus.unsplash.com/premium_photo-1661951189203-12decb9d7f8e?q=80&w=600&q=75&auto=format&fit=crop'
      },
      {
        day: 5,
        title: 'Descent to Modernity',
        location: 'Chiayi / Taipei',
        stay: 'Mandarin Oriental Taipei',
        desc: 'Scenic mountain descent, high-speed rail transfer back to the capital.',
        image: 'https://plus.unsplash.com/premium_photo-1661951189203-12decb9d7f8e?q=80&w=600&q=75&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 'itinerary-4',
    slug: 'marble-canyons-pacific-solitude',
    rank: 4,
    title: 'Marble Canyons & Pacific Solitude',
    subtitle: 'Taroko National Park and the Rugged East Coast Highway',
    duration: 5,
    category: 'Nature & Peaks',
    tier: 'Ultra-Luxe Bespoke',
    priceEstimate: '$3,900',
    heroImage: 'https://plus.unsplash.com/premium_photo-1694475574231-5bb05dcbbbbd?q=80&w=600&q=75&auto=format&fit=crop',
    badge: 'Dramatic Coastline',
    summary: 'Carved over millions of years by tectonic collisions, Taroko Gorge features sheer 1,000-meter vertical marble cliffs dropping straight into the deep cobalt Pacific Ocean.',
    routeStops: ['Taipei', 'Hualien', 'Taroko Gorge', 'Qingshui Cliff'],
    svgRoutePath: 'M 195 90 L 225 140 L 230 180',
    highlights: [
      'Rooftop heated infinity pool overlooking the Liwu River Gorge at Silks Place',
      'Private yacht cruise along the vertical 800m Qingshui Cliffs',
      'Helicopter flight over Zhuilu Old Trail and marble riverbeds',
      'Traditional Truku weaving and archery masterclass'
    ],
    days: [
      {
        day: 1,
        title: 'The Pacific Gateway',
        location: 'Hualien',
        stay: 'Silks Place Taroko',
        desc: 'Private luxury express rail from Taipei; check-in to canyon-view executive suite.',
        image: 'https://images.unsplash.com/photo-1768473365585-9936ae9b105c?q=80&w=600&q=75&auto=format&fit=crop'
      },
      {
        day: 2,
        title: 'Zhuilu Old Trail Clifftop Walk',
        location: 'Taroko',
        stay: 'Silks Place Taroko',
        desc: 'Special permit private guided walk along the 500m sheer drop cliff edge.',
        image: 'https://images.unsplash.com/photo-1723389078089-b6705d29b6d8?q=80&w=600&q=75&auto=format&fit=crop'
      },
      {
        day: 3,
        title: 'Marble River Tracing & Natural Springs',
        location: 'Taroko',
        stay: 'Silks Place Taroko',
        desc: 'Private crystal-clear river dip and gourmet clifftop champagne picnic.',
        image: 'https://images.unsplash.com/photo-1723389078089-b6705d29b6d8?q=80&w=600&q=75&auto=format&fit=crop'
      },
      {
        day: 4,
        title: 'Qingshui Cliffs from the Sea',
        location: 'Pacific Ocean',
        stay: 'Gaeavilla Resort Hualien',
        desc: 'Private luxury catamaran cruise sailing past ocean cliffs with dolphin sightings.',
        image: 'https://images.unsplash.com/photo-1583736209710-ce157f48e350?q=80&w=600&q=75&auto=format&fit=crop'
      },
      {
        day: 5,
        title: 'Hualien Stone Crafts & Return',
        location: 'Hualien / Taipei',
        stay: 'Return Transfer',
        desc: 'Private visit to contemporary Taiwanese jade studios before rail return.',
        image: 'https://plus.unsplash.com/premium_photo-1661951189203-12decb9d7f8e?q=80&w=600&q=75&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 'itinerary-5',
    slug: 'imperial-heritage-southern-dynasty',
    rank: 5,
    title: 'Imperial Heritage & Southern Dynasty',
    subtitle: 'Tainan: 400 Years of Dutch Fortresses, Ming Loyalty, & Ancestral Craft',
    duration: 4,
    category: 'Heritage',
    tier: 'Connoisseur Edition',
    priceEstimate: '$2,800',
    heroImage: 'https://plus.unsplash.com/premium_photo-1734085778642-1a11db67d307?q=80&w=600&q=75&auto=format&fit=crop',
    badge: 'Cultural Core',
    summary: 'Celebrate Tainan’s 400th anniversary with exclusive access to private temple collections, restored Japanese colonial mansions, and imperial courtyard dinners.',
    routeStops: ['Tainan', 'Anping', 'Chikan'],
    svgRoutePath: 'M 115 285 L 105 295 L 115 305',
    highlights: [
      'Private evening entry to the Grand Mazu Temple with heritage conservators',
      'Private dinner served in a restored 1920s Japanese tatami courtyard residence',
      'Bespoke antique pottery identification with Southern Taiwan collectors'
    ],
    days: [
      {
        day: 1,
        title: 'The 17th Century Capital',
        location: 'Tainan',
        stay: 'Silks Place Tainan',
        desc: 'Fort Zeelandia historic briefing and sunset canal cocktail tour.',
        image: 'https://plus.unsplash.com/premium_photo-1734085778642-1a11db67d307?q=80&w=600&q=75&auto=format&fit=crop'
      },
      {
        day: 2,
        title: 'The Guilds of Shenshe',
        location: 'Tainan',
        stay: 'Silks Place Tainan',
        desc: 'Walking through century-old herbal pharmacies, wood-carving guilds, and copper smiths.',
        image: 'https://images.unsplash.com/photo-1713106853722-00847d9ce1be?q=80&w=600&q=75&auto=format&fit=crop'
      },
      {
        day: 3,
        title: 'Salt Terraces & Wetland Sanctuaries',
        location: 'Qigu',
        stay: 'Silks Place Tainan',
        desc: 'Private drive to Jingzaijiao tile-paved salt fields and black-faced spoonbill lagoon.',
        image: 'https://plus.unsplash.com/premium_photo-1661951189203-12decb9d7f8e?q=80&w=600&q=75&auto=format&fit=crop'
      },
      {
        day: 4,
        title: 'Artisanal Keepsakes & Farewell',
        location: 'Tainan',
        stay: 'Return Transfer',
        desc: 'Custom leather and bamboo crafting workshop; express HSR back to Taipei.',
        image: 'https://plus.unsplash.com/premium_photo-1734085778642-1a11db67d307?q=80&w=600&q=75&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 'itinerary-6',
    slug: 'hot-spring-sanctuaries-volcanic-highlands',
    rank: 6,
    title: 'Hot Spring Sanctuaries & Volcanic Highlands',
    subtitle: 'Thermal Mineral Baths of Beitou & the Smoldering Fumaroles of Yangmingshan',
    duration: 4,
    category: 'Nature & Peaks',
    tier: 'Ultra-Luxe Bespoke',
    priceEstimate: '$3,200',
    heroImage: 'https://images.unsplash.com/flagged/photo-1556947890-0e997b0c9ef2?q=80&w=600&q=75&auto=format&fit=crop',
    badge: 'Wellness Sanctuary',
    summary: 'Submerge into volcanic healing springs just 30 minutes outside Taipei. Stay at intimate onsen villas where natural white and green sulfur waters flow straight from geothermal springs.',
    routeStops: ['Beitou', 'Yangmingshan National Park', 'Jinshan'],
    svgRoutePath: 'M 195 90 L 195 75 L 205 70',
    highlights: [
      'Private private suite with dual white-sulfur and cold spring pools at Villa 32',
      'Sunrise private hike through Xiaoyoukeng steaming volcanic vents',
      'Michelin-recommended kaiseki feasts paired with Taiwanese sake and tea'
    ],
    days: [
      {
        day: 1,
        title: 'The Heritage Springs of Beitou',
        location: 'Beitou',
        stay: 'Villa 32',
        desc: 'Check into private thermal villa; historic walk through the 1905 Japanese public baths.',
        image: 'https://plus.unsplash.com/premium_photo-1688417352550-ce845b2c47cc?q=80&w=600&q=75&auto=format&fit=crop'
      },
      {
        day: 2,
        title: 'Smoldering Craters & Wild Calla Lilies',
        location: 'Yangmingshan',
        stay: 'Villa 32',
        desc: 'Guided trek through volcanic vents, wild geothermal creeks, and tea pastures.',
        image: 'https://plus.unsplash.com/premium_photo-1664804190504-805fb3666dce?q=80&w=600&q=75&auto=format&fit=crop'
      },
      {
        day: 3,
        title: 'Coast of Jinshan & Forest Spa',
        location: 'North Coast',
        stay: 'Grand View Resort Beitou',
        desc: 'Oceanfront thermal bath and sculpture park stroll at Juming Museum.',
        image: 'https://plus.unsplash.com/premium_photo-1661951189203-12decb9d7f8e?q=80&w=600&q=75&auto=format&fit=crop'
      },
      {
        day: 4,
        title: 'Holistic Regeneration',
        location: 'Beitou / Taipei',
        stay: 'Return Transfer',
        desc: 'Signature hot stone aromatherapy treatment and luxury departure transfer.',
        image: 'https://plus.unsplash.com/premium_photo-1688417352550-ce845b2c47cc?q=80&w=600&q=75&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 'itinerary-7',
    slug: 'sun-moon-lake-waterway-aboriginal-artisans',
    rank: 7,
    title: 'Sun Moon Lake Waterway & Aboriginal Artisans',
    subtitle: 'Alpine Waters, Thao Heritage, & Architectural Marvels by Kerry Hill',
    duration: 3,
    category: 'Nature & Peaks',
    tier: 'Ultra-Luxe Bespoke',
    priceEstimate: '$2,700',
    heroImage: '/images/sun-moon-lake.webp',
    badge: 'Zen Retreat',
    summary: 'Experience Taiwan’s most iconic alpine lake through the minimalist architectural lens of The Lalu. Private boat charters and authentic encounters with the indigenous Thao people.',
    routeStops: ['Sun Moon Lake', 'Xiangshan', 'Ita Thao'],
    svgRoutePath: 'M 160 210 L 155 205 L 165 215',
    highlights: [
      'Private chartered electric mahogany yacht with champagne breakfast on the water',
      'Cycling the CNN-awarded Xiangshan lakeside overwater boardwalk on Pinarello e-bikes',
      'Exclusive private craft workshop with Thao tribe elder weavers'
    ],
    days: [
      {
        day: 1,
        title: 'The Lalu Minimalist Sanctuary',
        location: 'Sun Moon Lake',
        stay: 'The Lalu',
        desc: 'Arrival at Kerry Hill’s architectural triumph; 60m mirror pool sunset cocktail.',
        image: '/images/the-lalu-sanctuary.webp'
      },
      {
        day: 2,
        title: 'Dawn on Mist Waters',
        location: 'Sun Moon Lake',
        stay: 'The Lalu',
        desc: 'Silent dawn rowing boat excursion, temple bell meditation at Xuanzang Pagoda.',
        image: 'https://plus.unsplash.com/premium_photo-1722206861426-9f8eb27b7b3c?q=80&w=600&q=75&auto=format&fit=crop'
      },
      {
        day: 3,
        title: 'Forest Single Origin Coffee & Return',
        location: 'Nantou',
        stay: 'Return Transfer',
        desc: 'Tasting award-winning Geisha coffee grown on misty mountain slopes before private transfer.',
        image: '/images/songyue-coffee-manor.webp'
      }
    ]
  },
  {
    id: 'itinerary-8',
    slug: 'wild-east-coast-indigenous-music',
    rank: 8,
    title: 'Wild East Coast & Indigenous Music',
    subtitle: 'Hualien to Taitung: Pacific Ocean Highway 11 & Amis Coastal Rhythms',
    duration: 7,
    category: 'Coastal & Sea',
    tier: 'Private Signature',
    priceEstimate: '$4,900',
    heroImage: 'https://images.unsplash.com/photo-1576332946878-20324ed6e6c8?q=80&w=600&q=75&auto=format&fit=crop',
    badge: 'Untamed Pacific',
    summary: 'Travel Taiwan’s wild eastern edge where the Pacific surf crashes against towering mountains. Live music in coastal caves, driftwood sculpture, and farm-to-table seafood.',
    routeStops: ['Hualien', 'Shitiping', 'Dulan', 'Taitung'],
    svgRoutePath: 'M 225 150 L 235 210 L 230 270 L 220 310',
    highlights: [
      'Intimate private concert and dinner with Golden Melody Award-winning Amis musicians',
      'Sleep in an exclusive private oceanfront villa overlooking Shitiping sea terraces',
      'Stargazing on the East Rift Valley floor without light pollution'
    ],
    days: [
      {
        day: 1,
        title: 'Where Mountains Meet the Sea',
        location: 'Hualien',
        stay: 'Hualien Ocean Villa',
        desc: 'Scenic rail to the east; sunset drive along dramatic Highway 11.',
        image: 'https://plus.unsplash.com/premium_photo-1661951189203-12decb9d7f8e?q=80&w=600&q=75&auto=format&fit=crop'
      },
      {
        day: 2,
        title: 'Volcanic Tide Pools of Shitiping',
        location: 'Fengbin',
        stay: 'Adagio Shitiping',
        desc: 'Exploring marine life in step-like rock formations; spearfish dining under stars.',
        image: 'https://images.unsplash.com/photo-1768473365585-9936ae9b105c?q=80&w=600&q=75&auto=format&fit=crop'
      },
      {
        day: 3,
        title: 'Dulan Sugar Factory Arts Colony',
        location: 'Dulan',
        stay: 'Dulan Clifftop Lodge',
        desc: 'Private studio tours with indigenous woodcarvers and painters.',
        image: 'https://images.unsplash.com/photo-1576332946878-20324ed6e6c8?q=80&w=600&q=75&auto=format&fit=crop'
      },
      {
        day: 4,
        title: 'The Golden Rice Waves of Chishang',
        location: 'East Rift Valley',
        stay: 'Papago International Resort',
        desc: 'Cycling the scenic Mr. Brown Avenue through boundless emerald and golden paddies.',
        image: 'https://images.unsplash.com/photo-1535898331935-2d274aff0fbc?q=80&w=600&q=75&auto=format&fit=crop'
      },
      {
        day: 5,
        title: 'Aboriginal Fermentations & Foraging',
        location: 'Taitung',
        stay: 'Hotel Royal Chihpen',
        desc: 'Wild edible greens foraging with tribal elders along mountain streams.',
        image: 'https://images.unsplash.com/photo-1576332946878-20324ed6e6c8?q=80&w=600&q=75&auto=format&fit=crop'
      },
      {
        day: 6,
        title: 'Chihpen Valley Hot Springs',
        location: 'Taitung',
        stay: 'Hotel Royal Chihpen',
        desc: 'Deep canyon mineral soaking and evening outdoor orchestral performance.',
        image: 'https://plus.unsplash.com/premium_photo-1688417352550-ce845b2c47cc?q=80&w=600&q=75&auto=format&fit=crop'
      },
      {
        day: 7,
        title: 'Return via Southern Circuit',
        location: 'Taitung / Kaohsiung',
        stay: 'Return Transfer',
        desc: 'Scenic southern railway journey into Kaohsiung and HSR connection to Taipei.',
        image: 'https://plus.unsplash.com/premium_photo-1724314652701-2e9de1099eba?q=80&w=600&q=75&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 'itinerary-9',
    slug: 'island-southern-tip-coral-coast',
    rank: 9,
    title: 'The Island’s Southern Tip & Coral Coast',
    subtitle: 'Kenting National Park: Tropical Coral Atolls, White Sand, & Luxury Yachts',
    duration: 4,
    category: 'Coastal & Sea',
    tier: 'Private Signature',
    priceEstimate: '$3,100',
    heroImage: 'https://images.unsplash.com/photo-1707968900308-5a5f30dbb552?q=80&w=600&q=75&auto=format&fit=crop',
    badge: 'Tropical Lux',
    summary: 'The sun-drenched tropical escape of southern Taiwan. Turquoise waters, pristine reefs, Eluanbi lighthouse, and private yacht charters across the Bashi Channel.',
    routeStops: ['Kaohsiung', 'Kenting', 'Eluanbi'],
    svgRoutePath: 'M 125 330 L 140 370 L 150 395',
    highlights: [
      'Private 50ft catamaran charter sailing around Taiwan’s southernmost cape',
      'VIP private diving expedition at protected South Bay coral sanctuaries',
      'Stargazing night tour across the Longpan windswept limestone cliffs'
    ],
    days: [
      {
        day: 1,
        title: 'Southbound to the Tropics',
        location: 'Kenting',
        stay: 'Gloria Manor Kenting',
        desc: 'Chauffeur transfer from Kaohsiung; check into former presidential summer residence.',
        image: 'https://images.unsplash.com/photo-1678197434806-a275ec32ff40?q=80&w=600&q=75&auto=format&fit=crop'
      },
      {
        day: 2,
        title: 'Coral Reef Expedition',
        location: 'South Bay',
        stay: 'Gloria Manor Kenting',
        desc: 'Private PADI-certified dive master guided tour among sea turtles and clownfish.',
        image: 'https://plus.unsplash.com/premium_photo-1669075651662-d275612673db?q=80&w=600&q=75&auto=format&fit=crop'
      },
      {
        day: 3,
        title: 'The Longpan Tableland & Cape',
        location: 'Eluanbi',
        stay: 'Gloria Manor Kenting',
        desc: 'Limestone caves, coastal cliffs, and sunset cocktails at Eluanbi lighthouse.',
        image: 'https://images.unsplash.com/photo-1678197434806-a275ec32ff40?q=80&w=600&q=75&auto=format&fit=crop'
      },
      {
        day: 4,
        title: 'Coastal Return',
        location: 'Kaohsiung',
        stay: 'Return Transfer',
        desc: 'Fresh seafood brunch at Houbihu port; transfer to Kaohsiung HSR.',
        image: 'https://plus.unsplash.com/premium_photo-1724314652701-2e9de1099eba?q=80&w=600&q=75&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 'itinerary-10',
    slug: 'offshore-wind-granite-bastions',
    rank: 10,
    title: 'Offshore Wind & Granite Bastions',
    subtitle: 'Kinmen & Penghu Archipelago: Ancient Clans, Sea Tunnels, & Basalt Columns',
    duration: 4,
    category: 'Heritage',
    tier: 'Connoisseur Edition',
    priceEstimate: '$2,900',
    heroImage: 'https://images.unsplash.com/photo-1782112592357-71dd904cc1d8?q=80&w=600&q=75&auto=format&fit=crop',
    badge: 'Island Odyssey',
    summary: 'Fly to Taiwan’s outer frontier islands. Explore subterranean submarine tunnels blasted into granite, swallow-tailed Minnan brick mansions, and ancient basalt sea cliffs.',
    routeStops: ['Kinmen', 'Penghu', 'Zhaishan'],
    svgRoutePath: 'M 60 180 L 70 230',
    highlights: [
      'Private classical music performance inside the acoustic cathedral of Zhaishan Submarine Tunnel',
      'Stay in an immaculately restored 200-year-old Qing Dynasty courtyard manor',
      'Private helicopter or speedboat hop to Penghu’s columnar basalt formations'
    ],
    days: [
      {
        day: 1,
        title: 'Flight to the Granite Fortress',
        location: 'Kinmen',
        stay: 'Heritage Courtyard Villa',
        desc: 'Short scenic flight from Taipei; walk through red-brick Shuitou clan settlement.',
        image: 'https://plus.unsplash.com/premium_photo-1664047696173-b47af42abd63?q=80&w=600&q=75&auto=format&fit=crop'
      },
      {
        day: 2,
        title: 'The Underground Waterways',
        location: 'Kinmen',
        stay: 'Heritage Courtyard Villa',
        desc: 'Private exploration of underground military bunkers and vintage Kaoliang liquor cellars.',
        image: 'https://plus.unsplash.com/premium_photo-1722206861426-9f8eb27b7b3c?q=80&w=600&q=75&auto=format&fit=crop'
      },
      {
        day: 3,
        title: 'Penghu Basalt Formations',
        location: 'Penghu',
        stay: 'Four Points by Sheraton Penghu',
        desc: 'Island hop to towering basalt sea pillars and historical stone fish weirs.',
        image: 'https://plus.unsplash.com/premium_photo-1661962797396-eb892ff249ca?q=80&w=600&q=75&auto=format&fit=crop'
      },
      {
        day: 4,
        title: 'Outer Rim Return',
        location: 'Taipei',
        stay: 'Return Transfer',
        desc: 'Artisanal brown sugar cake and sea peanut confectionary tasting; return flight.',
        image: 'https://plus.unsplash.com/premium_photo-1661951189203-12decb9d7f8e?q=80&w=600&q=75&auto=format&fit=crop'
      }
    ]
  }
];

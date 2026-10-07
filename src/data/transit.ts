export interface TransitHub {
  id: string;
  name: string;
  chinese: string;
  category: 'HSR Bullet Train' | 'Scenic Mountain Railway' | 'Pacific Coastal Rail';
  speedKmH: number;
  timeFromTaipei: string;
  minutes: number;
  description: string;
  connections: string[];
}

export const TRANSIT_HUBS: TransitHub[] = [
  {
    id: 'taipei',
    name: 'Taipei Main Central',
    chinese: '台北車站',
    category: 'HSR Bullet Train',
    speedKmH: 300,
    timeFromTaipei: 'Origin Point',
    minutes: 0,
    description: 'The island\'s subterranean transportation epicenter linking bullet trains, metro lines, and private airport expresses.',
    connections: ['Taoyuan Airport Express', 'Beitou MRT Hot Springs', 'Pingxi Heritage Line']
  },
  {
    id: 'taichung',
    name: 'Taichung Metropolitan',
    chinese: '台中高鐵站',
    category: 'HSR Bullet Train',
    speedKmH: 300,
    timeFromTaipei: '47 mins',
    minutes: 47,
    description: 'Taiwan\'s creative culinary capital and primary departure nexus for luxury coaches into Sun Moon Lake.',
    connections: ['Sun Moon Lake Highway Pass', 'National Taichung Theater', 'Miyahara Ice Parlor']
  },
  {
    id: 'chiayi',
    name: 'Chiayi Alishan Junction',
    chinese: '嘉義高鐵站',
    category: 'HSR Bullet Train',
    speedKmH: 300,
    timeFromTaipei: '68 mins',
    minutes: 68,
    description: 'Gateway to the sacred cypress mountains and junction for the historic narrow-gauge Alishan Forest Railway.',
    connections: ['Alishan Hinoki Steam Train', 'Meishan Tea Highlands', 'Southern Branch Palace Museum']
  },
  {
    id: 'tainan',
    name: 'Tainan Ancient Capital',
    chinese: '台南高鐵站',
    category: 'HSR Bullet Train',
    speedKmH: 300,
    timeFromTaipei: '87 mins',
    minutes: 87,
    description: 'Arrive in Taiwan\'s 400-year-old culinary birthplace in under an hour and a half from downtown Taipei.',
    connections: ['Anping Dutch Fort', 'Shennong Historic Street', 'Chimei Classical Museum']
  },
  {
    id: 'kaohsiung',
    name: 'Kaohsiung Zuoying Terminus',
    chinese: '左營高鐵站',
    category: 'HSR Bullet Train',
    speedKmH: 300,
    timeFromTaipei: '94 mins',
    minutes: 94,
    description: 'The southern maritime terminus; gateway to private yacht harbors and luxury chauffeurs to Kenting National Park.',
    connections: ['Kenting Express Highway', 'Kaohsiung Harbor Light Rail', 'Bashi Channel Yacht Marina']
  },
  {
    id: 'hualien-taroko',
    name: 'Hualien Taroko Gateway',
    chinese: '花蓮車站',
    category: 'Pacific Coastal Rail',
    speedKmH: 130,
    timeFromTaipei: '125 mins (Puyuma Express)',
    minutes: 125,
    description: 'Scenic cliffside railway skirting vertical Pacific drops straight into the entrance of Taroko Marble Gorge.',
    connections: ['Taroko Gorge Canyon Chauffeur', 'Qixingtan Pebble Bay', 'East Coast Highway 11']
  }
];

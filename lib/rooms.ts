export type Room = {
  id: string;
  name: string;
  tag: string;
  image: string;
  bedType: string;
  view: string;
  description: string;
  capacity: string;
  size: string;
  price: string;
  amenities: string[];
  features: string[];
  gallery: string[];
};

export const rooms: Room[] = [
  {
    id: 'double-room-garden-view',
    name: 'Double Room with Garden View',
    tag: 'Garden View',
    bedType: '1 Queen Bed',
    view: 'Garden View',
    image: '/20251016_153610.jpg',
    description:
      'A cozy and comfortable room offering serene garden views. The room features modern amenities while maintaining a warm, homely atmosphere perfect for couples or solo travelers seeking tranquility. Each morning, wake up to the gentle sounds of nature and enjoy your complimentary breakfast before exploring the wonders of Sigiriya.',
    capacity: '2',
    size: '17 m²',
    price: '50',
    amenities: ['Free WiFi', 'Air Conditioning', 'Garden View', 'Attached Bathroom', 'Soundproof', 'Tea/Coffee Maker'],
    features: ['Free toiletries', 'Bidet', 'Toilet', 'Bathtub or shower', 'Towels', 'Linens', 'Desk', 'Sitting area', 'Slippers', 'Hairdryer', 'Wardrobe or closet', 'Electric kettle', 'Carpeted', 'Clothes rack', 'Toilet paper', 'Hand sanitizer'],
    gallery: ['/20251016_141228.jpg', '/20251016_141102.jpg', '/20251016_141206.jpg', '/20251016_142529.jpg'],
  },
  {
    id: 'double-room-balcony',
    name: 'Double Room with Balcony',
    tag: 'Pool View',
    bedType: '1 Queen Bed',
    view: 'Pool & Mountain View',
    image: '/20251016_123549.jpg',
    description:
      'A spacious room featuring a private balcony with stunning pool and mountain views. Enjoy the perfect blend of indoor comfort and outdoor beauty with modern amenities and thoughtful design. Step onto your private balcony to witness breathtaking sunsets over the Sri Lankan landscape.',
    capacity: '2',
    size: '25 m²',
    price: '60',
    amenities: ['Free WiFi', 'Air Conditioning', 'Pool View', 'Mountain View', 'Attached Bathroom', 'Soundproof'],
    features: ['Free toiletries', 'Bidet', 'Toilet', 'Bathtub or shower', 'Towels', 'Linens', 'Desk', 'Sitting area', 'Slippers', 'Hairdryer', 'Wardrobe or closet', 'Electric kettle', 'Balcony', 'Clothes rack', 'Toilet paper', 'Hand sanitizer'],
    gallery: ['/20251016_122855.jpg', '/20251016_124246.jpg', '/20251016_124422.jpg', '/20251016_125447.jpg'],
  },
  {
    id: 'triple-room-balcony',
    name: 'Triple Room with Balcony',
    tag: 'Mountain View',
    bedType: '1 Twin Bed and 1 Futon Bed',
    view: 'Pool & Mountain View',
    image: '/20251023_135406.jpg',
    description:
      'Perfect for families or groups, this spacious room offers a private balcony with breathtaking pool and mountain views. The room comfortably accommodates up to 3 guests with flexible bedding options. Create lasting memories with your loved ones while enjoying the peaceful ambiance.',
    capacity: '3',
    size: '25 m²',
    price: '70',
    amenities: ['Free WiFi', 'Air Conditioning', 'Pool View', 'Mountain View', 'Attached Bathroom', 'Soundproof'],
    features: ['Free toiletries', 'Bidet', 'Toilet', 'Bathtub or shower', 'Towels', 'Linens', 'Desk', 'Sitting area', 'Slippers', 'Hairdryer', 'Wardrobe or closet', 'Electric kettle', 'Balcony', 'Clothes rack', 'Toilet paper', 'Hand sanitizer'],
    gallery: ['/20251023_134530.jpg', '/20251023_143021.jpg', '/20251023_143215.jpg', '/20251023_134155.jpg'],
  },
];

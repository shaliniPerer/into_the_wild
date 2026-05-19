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
    id: 'deluxe-double-room-garden-view',
    name: 'Deluxe Double Room with Garden View',
    tag: 'Garden View',
    bedType: '1 Queen Bed',
    view: 'Garden View',
    image: '/images/Deluxe double room with garden view/DSC00662-HDR.avif',
    description:
      'A beautifully appointed deluxe room offering tranquil garden views. Thoughtfully designed with modern comforts and natural materials, this room is ideal for couples or solo travellers seeking a peaceful retreat. Wake each morning to birdsong and lush greenery, and enjoy your complimentary breakfast before exploring the wonders of Sigiriya.',
    capacity: '2',
    size: '17 m²',
    price: '50',
    amenities: ['Free WiFi', 'Air Conditioning', 'Garden View', 'Attached Bathroom', 'Soundproof', 'Tea/Coffee Maker'],
    features: ['Free toiletries', 'Bidet', 'Toilet', 'Bathtub or shower', 'Towels', 'Linens', 'Desk', 'Sitting area', 'Slippers', 'Hairdryer', 'Wardrobe or closet', 'Electric kettle', 'Carpeted', 'Clothes rack', 'Toilet paper', 'Hand sanitizer'],
    gallery: [
      '/images/Deluxe double room with garden view/DSC00665-HDR.avif',
      '/images/Deluxe double room with garden view/DSC00671.avif',
      '/images/Deluxe double room with garden view/DSC00676-HDR.avif',
      '/images/Deluxe double room with garden view/DSC00682-HDR.avif',
      '/images/Deluxe double room with garden view/DSC00689-HDR.avif',
      '/images/Deluxe double room with garden view/DSC00695-HDR.avif',
    ],
  },
  {
    id: 'deluxe-family-room-nature-view',
    name: 'Deluxe Family Room with Nature View',
    tag: 'Nature View',
    bedType: '1 King Bed + 1 Single Bed',
    view: 'Nature View',
    image: '/images/Deluxe family room with nature view/DSC00433-HDR.avif',
    description:
      'A generously sized deluxe family room immersed in the sights and sounds of nature. Designed to accommodate families comfortably, the room blends warm interiors with panoramic views of the surrounding wilderness. A serene escape where every member of the family can relax and reconnect with nature.',
    capacity: '3',
    size: '30 m²',
    price: '60',
    amenities: ['Free WiFi', 'Air Conditioning', 'Garden View', 'Attached Bathroom', 'Soundproof', 'Tea/Coffee Maker'],
    features: ['Free toiletries', 'Bidet', 'Toilet', 'Bathtub or shower', 'Towels', 'Linens', 'Desk', 'Sitting area', 'Slippers', 'Hairdryer', 'Wardrobe or closet', 'Electric kettle', 'Clothes rack', 'Toilet paper', 'Hand sanitizer'],
    gallery: [
      '/images/Deluxe family room with nature view/DSC00437-HDR.avif',
      '/images/Deluxe family room with nature view/DSC00444-HDR.avif',
      '/images/Deluxe family room with nature view/DSC00450-HDR.avif',
      '/images/Deluxe family room with nature view/DSC00457-HDR.avif',
      '/images/Deluxe family room with nature view/DSC00464-HDR.avif',
      '/images/Deluxe family room with nature view/DSC00473-HDR.avif',
    ],
  },
  {
    id: 'deluxe-triple-room-balcony',
    name: 'Deluxe Triple Room with Balcony',
    tag: 'Mountain View',
    bedType: '1 Twin Bed and 1 Futon Bed',
    view: 'Pool & Mountain View',
    image: '/images/Deluxe triple room with balcony/DSC00538-HDR.avif',
    description:
      'A spacious deluxe triple room with a private balcony showcasing breathtaking pool and mountain views. Perfectly suited for families or small groups, the room offers flexible sleeping arrangements and generous space to unwind. Step onto the balcony and take in the majestic landscape of Sigiriya at any time of day.',
    capacity: '3',
    size: '25 m²',
    price: '70',
    amenities: ['Free WiFi', 'Air Conditioning', 'Pool View', 'Mountain View', 'Attached Bathroom', 'Soundproof'],
    features: ['Free toiletries', 'Bidet', 'Toilet', 'Bathtub or shower', 'Towels', 'Linens', 'Desk', 'Sitting area', 'Slippers', 'Hairdryer', 'Wardrobe or closet', 'Electric kettle', 'Balcony', 'Clothes rack', 'Toilet paper', 'Hand sanitizer'],
    gallery: [
      '/images/Deluxe triple room with balcony/DSC00530-HDR.avif',
      '/images/Deluxe triple room with balcony/DSC00538-HDR.avif',
      '/images/Deluxe triple room with balcony/DSC00546-HDR.avif',
      '/images/Deluxe triple room with balcony/DSC00552-HDR.avif',
      '/images/Deluxe triple room with balcony/DSC00560-HDR.avif',
      '/images/Deluxe triple room with balcony/DSC00571-HDR.avif',
    ],
  },
];

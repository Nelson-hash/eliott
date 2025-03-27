export interface Project {
  id: string;
  title: string;
  coverImage: string;
  images: string[];
  description: string;
}

export const projects: Project[] = [
  {
    id: 'chariot-de-course',
    title: 'CHARIOT DE COURSE',
    coverImage: '/images/chariot-de-course/cover.jpg',
    images: [
      '/images/chariot-de-course/cover.jpg',
      '/images/chariot-de-course/01.jpg',
      '/images/chariot-de-course/02.jpg'
    ],
    description: 'Street photography capturing the essence of urban life through portraiture'
  },
  {
    id: 'maison-beton',
    title: 'MAISON BETON',
    coverImage: '/images/maison-beton/cover.jpg',
    images: [
      '/images/maison-beton/cover.jpg',
      '/images/maison-beton/01.jpg',
      '/images/maison-beton/02.jpg'
    ],
    description: 'Abstract architectural details and geometric patterns'
  },
  {
    id: 'message-tissus',
    title: 'MESSAGE TISSUS',
    coverImage: '/images/message-tissus/cover.jpg',
    images: [
      '/images/message-tissus/cover.jpg',
      '/images/message-tissus/01.jpg',
      '/images/message-tissus/02.jpg'
    ],
    description: 'Exploring textile patterns and woven messages in urban spaces'
  },
  {
    id: 'puzzle-marrant',
    title: 'PUZZLE MARRANT',
    coverImage: '/images/puzzle-marrant/cover.jpg',
    images: [
      '/images/puzzle-marrant/cover.jpg',
      '/images/puzzle-marrant/01.jpg',
      '/images/puzzle-marrant/02.jpg'
    ],
    description: 'A study of natural light and dramatic shadows in vertical compositions'
  },
  {
    id: 'rideau-message',
    title: 'RIDEAU MESSAGE',
    coverImage: '/images/rideau-message/cover.jpg',
    images: [
      '/images/rideau-message/cover.jpg',
      '/images/rideau-message/01.jpg',
      '/images/rideau-message/02.jpg'
    ],
    description: 'Vertical exploration of modern architectural forms'
  },
  {
    id: 'tipi',
    title: 'TIPI',
    coverImage: '/images/tipi/cover.jpg',
    images: [
      '/images/tipi/cover.jpg',
      '/images/tipi/01.jpg',
      '/images/tipi/02.jpg'
    ],
    description: 'Exploring isolation and contemplation in urban environments'
  }
];

export interface Project {
  id: string;
  title: string;
  coverImage: string;
  images: string[];
  description: string;
  extendedDescription?: string;
}

export const projects: Project[] = [
  {
    id: 'urban-portraits',
    title: 'Urban Portraits',
    coverImage: 'https://images.unsplash.com/photo-1504703395950-b89145a5425b',
    images: [
      'https://images.unsplash.com/photo-1504703395950-b89145a5425b',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f',
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b'
    ],
    description: 'Street photography capturing the essence of urban life through portraiture',
    extendedDescription: 'A series exploring the intersection of human presence and urban architecture, documenting fleeting moments of daily life in the city.'
  },
  {
    id: 'architectural-studies',
    title: 'Architectural Studies',
    coverImage: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b',
    images: [
      'https://images.unsplash.com/photo-1493397212122-2b85dda8106b',
      'https://images.unsplash.com/photo-1486325212027-8081e485255e',
      'https://images.unsplash.com/photo-1495542779398-9fec7dc7986c'
    ],
    description: 'Vertical exploration of modern architectural forms',
    extendedDescription: 'An examination of contemporary architecture through a minimalist lens, focusing on clean lines and geometric patterns.'
  },
  {
    id: 'light-shadow',
    title: 'Light & Shadow',
    coverImage: 'https://images.unsplash.com/photo-1494236581341-7d38b2e7d824',
    images: [
      'https://images.unsplash.com/photo-1494236581341-7d38b2e7d824',
      'https://images.unsplash.com/photo-1504198322253-cfa87a0ff25f',
      'https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a'
    ],
    description: 'A study of natural light and dramatic shadows in vertical compositions'
  },
  {
    id: 'urban-solitude',
    title: 'Urban Solitude',
    coverImage: 'https://images.unsplash.com/photo-1496449903678-68ddcb189a24',
    images: [
      'https://images.unsplash.com/photo-1496449903678-68ddcb189a24',
      'https://images.unsplash.com/photo-1491234323906-4f056ca415bc',
      'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d'
    ],
    description: 'Exploring isolation and contemplation in urban environments'
  },
  {
    id: 'abstract-forms',
    title: 'Abstract Forms',
    coverImage: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b',
    images: [
      'https://images.unsplash.com/photo-1493397212122-2b85dda8106b',
      'https://images.unsplash.com/photo-1496449903678-68ddcb189a24',
      'https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a'
    ],
    description: 'Abstract architectural details and geometric patterns'
  },
  {
    id: 'city-nights',
    title: 'City Nights',
    coverImage: 'https://images.unsplash.com/photo-1514565131-fce0801e5785',
    images: [
      'https://images.unsplash.com/photo-1514565131-fce0801e5785',
      'https://images.unsplash.com/photo-1495542779398-9fec7dc7986c',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470'
    ],
    description: 'Nocturnal urban landscapes and city life after dark'
  },
  {
    id: 'geometric-city',
    title: 'Geometric City',
    coverImage: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99',
    images: [
      'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99',
      'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf',
      'https://images.unsplash.com/photo-1492321936769-b49830bc1d1e'
    ],
    description: 'Exploring geometric patterns in urban architecture'
  },
  {
    id: 'urban-minimalism',
    title: 'Urban Minimalism',
    coverImage: 'https://images.unsplash.com/photo-1504198322253-cfa87a0ff25f',
    images: [
      'https://images.unsplash.com/photo-1504198322253-cfa87a0ff25f',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4',
      'https://images.unsplash.com/photo-1486325212027-8081e485255e'
    ],
    description: 'Minimalist approach to urban photography'
  },
  {
    id: 'vertical-spaces',
    title: 'Vertical Spaces',
    coverImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
      'https://images.unsplash.com/photo-1494236581341-7d38b2e7d824',
      'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99'
    ],
    description: 'Exploring vertical architectural elements and perspectives'
  }
];

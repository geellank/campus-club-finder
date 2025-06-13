// src/data/clubs.js
export const clubs = [
  {
    id: 'robotics',
    name: 'Robotics Club',
    image: '/images/robotics.jpg', // Pastikan kamu menempatkan gambar di public/images
    shortDescription: 'Build and code robots with fellow enthusiasts.',
    description: 'Learn about robotics, compete in competitions, and join hands-on workshops every month! We focus on practical skills and competitive events.',
    events: [
      { name: 'Intro to Arduino', date: '2025-06-20' },
      { name: 'Robotics Expo', date: '2025-07-12' },
      { name: 'AI in Robotics Workshop', date: '2025-08-05' }
    ]
  },
  {
    id: 'art-and-design',
    name: 'Art & Design Collective',
    image: '/images/art-design.jpg',
    shortDescription: 'Unleash your creativity and explore various art forms.',
    description: 'A vibrant community for artists of all levels. We host workshops, gallery visits, and collaborative projects, covering everything from painting to digital art.',
    events: [
      { name: 'Portrait Drawing Session', date: '2025-06-25' },
      { name: 'Digital Art Fundamentals', date: '2025-07-08' },
      { name: 'Sculpture Workshop', date: '2025-08-15' }
    ]
  },
  {
    id: 'eco-action',
    name: 'Eco Action Network',
    image: '/images/eco-action.jpg',
    shortDescription: 'Promoting sustainability and environmental awareness on campus.',
    description: 'Join us in making a difference! We organize clean-up drives, educational campaigns, and advocate for sustainable practices across the university.',
    events: [
      { name: 'Campus Clean-up Day', date: '2025-06-18' },
      { name: 'Recycling Workshop', date: '2025-07-01' },
      { name: 'Sustainable Living Talk', date: '2025-07-28' }
    ]
  },
  {
    id: 'coding-ninjas',
    name: 'Coding Ninjas',
    image: '/images/coding-ninjas.jpg',
    shortDescription: 'Master coding skills and build innovative projects.',
    description: 'From beginners to advanced programmers, we offer coding challenges, hackathons, and peer-to-peer learning sessions in various programming languages and technologies.',
    events: [
      { name: 'Intro to Python', date: '2025-06-22' },
      { name: 'Web Dev Basics Workshop', date: '2025-07-10' },
      { name: 'Hackathon Prep Session', date: '2025-08-01' }
    ]
  },
  {
    id: 'drama-guild',
    name: 'Drama Guild',
    image: '/images/drama-guild.jpg',
    shortDescription: 'Explore the world of theatre and perform on stage.',
    description: 'Unleash your inner actor! We stage plays, host acting workshops, and encourage improvisation and creative expression in a supportive environment.',
    events: [
      { name: 'Audition Prep Workshop', date: '2025-06-28' },
      { name: 'Improvisation Night', date: '2025-07-15' },
      { name: 'Fall Play Readings', date: '2025-08-20' }
    ]
  }
];

import { Post } from '../types/post';

export const posts: Post[] = [
  {
    id: '1',
    author: {
      name: 'Sarah Chen',
      title: 'Product Designer at TechFlow',
      avatar: 'https://ui-avatars.com/api/?name=Sarah+Chen&background=random',
    },
    content: 'Just launched our new design system! 🚀 It’s been a long journey but the results are worth it. Standardization is key to scaling effectively. #DesignSystems #UX #ProductDesign',
    timestamp: '2h • Edited',
    likesCount: 1240,
    commentsCount: 45,
  },
  {
    id: '2',
    author: {
      name: 'David Miller',
      title: 'Full Stack Developer',
      avatar: 'https://ui-avatars.com/api/?name=David+Miller&background=random',
    },
    content: 'TypeScript 5.4 is out! The new NoInfer utility type looks extremely useful for libraries. What are your thoughts on the new features? 👇',
    timestamp: '4h',
    likesCount: 856,
    commentsCount: 128,
  },
  {
    id: '3',
    author: {
      name: 'Emily Zhang',
      title: 'Engineering Manager | Hiring',
      avatar: 'https://ui-avatars.com/api/?name=Emily+Zhang&background=random',
    },
    content: 'We are hiring Senior Frontend Engineers! If you love React, performance optimization, and building great user experiences, let’s chat. Remote friendly. 🌍 #Hiring #Frontend #ReactJS',
    timestamp: '5h',
    likesCount: 3402,
    commentsCount: 210,
  },
  {
    id: '4',
    author: {
      name: 'James Wilson',
      title: 'AI Researcher',
      avatar: 'https://ui-avatars.com/api/?name=James+Wilson&background=random',
    },
    content: 'The rapid advancement in LLMs is mind-blowing. Just tested the latest open source model and it outperforms GPT-3.5 on reasoning tasks. The gap is closing.',
    timestamp: '8h',
    likesCount: 5600,
    commentsCount: 890,
  },
  {
    id: '5',
    author: {
      name: 'Lisa Wong',
      title: 'Marketing Director',
      avatar: 'https://ui-avatars.com/api/?name=Lisa+Wong&background=random',
    },
    content: 'Content is king, but consistency is queen. You can’t expect growth if you post once a month. Build a habit, engage with your audience, and provide value.',
    timestamp: '1d',
    likesCount: 940,
    commentsCount: 67,
  },
  {
    id: '6',
    author: {
      name: 'Robert Brown',
      title: 'Cloud Architect',
      avatar: 'https://ui-avatars.com/api/?name=Robert+Brown&background=random',
    },
    content: 'Migrating legacy monoliths to microservices is not just a technical challenge, it’s a cultural one. If your organization structure doesn’t support it, you will fail. Conway’s Law in action.',
    timestamp: '1d',
    likesCount: 2100,
    commentsCount: 156,
  },
  {
    id: '7',
    author: {
      name: 'Jessica Taylor',
      title: 'Startup Founder',
      avatar: 'https://ui-avatars.com/api/?name=Jessica+Taylor&background=random',
    },
    content: 'Failed fast today. Learned faster. That’s the startup life. Don’t be afraid to pivot when the data tells you to.',
    timestamp: '2d',
    likesCount: 4300,
    commentsCount: 320,
  },
  {
    id: '8',
    author: {
      name: 'Michael Scott',
      title: 'Regional Manager',
      avatar: 'https://ui-avatars.com/api/?name=Michael+Scott&background=random',
    },
    content: 'Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.',
    timestamp: '3d',
    likesCount: 15000,
    commentsCount: 5000,
  },
  {
    id: '9',
    author: {
      name: 'Priya Patel',
      title: 'Data Scientist',
      avatar: 'https://ui-avatars.com/api/?name=Priya+Patel&background=random',
    },
    content: 'Visualizing high-dimensional data is an art. t-SNE vs UMAP? Which one do you prefer for clustering analysis?',
    timestamp: '3d',
    likesCount: 670,
    commentsCount: 89,
  },
  {
    id: '10',
    author: {
      name: 'Alex Johnson',
      title: 'DevOps Engineer',
      avatar: 'https://ui-avatars.com/api/?name=Alex+Johnson&background=random',
    },
    content: 'Automate everything. If you have to do it twice, write a script. If you have to do it three times, write a pipeline. #DevOps #Automation',
    timestamp: '4d',
    likesCount: 1890,
    commentsCount: 112,
  },
];

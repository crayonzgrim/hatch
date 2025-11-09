export interface Post {
  id: number;
  communityName: string;
  username: string;
  postedTime: string;
  title: string;
  content: string;
  votes: number;
  commentsCount: number;
  flair?: string;
  isSpoiler?: boolean;
}

export const posts: Post[] = [
  {
    id: 1,
    communityName: 'r/KoreaLife',
    username: 'expat_in_seoul',
    postedTime: '2 hours ago',
    title: 'Best neighborhoods to live in Seoul for expats',
    content:
      'I just moved to Seoul and looking for recommendations on which neighborhoods are best for expats. I work in Gangnam but would prefer a quieter area with good international food options.',
    votes: 245,
    commentsCount: 87,
    flair: 'Discussion',
    isSpoiler: true,
  },
  {
    id: 2,
    communityName: 'r/KoreaTravel',
    username: 'wanderlust_korea',
    postedTime: '4 hours ago',
    title: 'Hidden gems in Busan you should not miss',
    content:
      'After living in Busan for 3 years, here are my favorite spots that most tourists never visit. These places offer authentic Korean experiences away from the crowds.',
    votes: 412,
    commentsCount: 56,
    flair: 'Guide',
  },
  {
    id: 3,
    communityName: 'r/KoreanFood',
    username: 'foodie_kim',
    postedTime: '6 hours ago',
    title: 'Made my first homemade kimchi! Tips appreciated',
    content:
      "Finally attempted to make kimchi from scratch following my Korean mother-in-law's recipe. It turned out pretty good but I'd love some tips from the experts here!",
    votes: 892,
    commentsCount: 134,
    flair: 'Help',
  },
  {
    id: 4,
    communityName: 'r/KoreaJobs',
    username: 'career_seeker',
    postedTime: '8 hours ago',
    title: 'Software engineer job market in Korea - 2025 update',
    content:
      "For those interested in working as a software engineer in Korea, here's what I've learned from my recent job search. The market has changed quite a bit from previous years.",
    votes: 567,
    commentsCount: 92,
    flair: 'Discussion',
    isSpoiler: true,
  },
  {
    id: 5,
    communityName: 'r/KoreanLanguage',
    username: 'korean_learner',
    postedTime: '12 hours ago',
    title: 'Finally passed TOPIK level 4! My study journey',
    content:
      "After 2 years of consistent study, I finally passed TOPIK level 4! Here's what worked for me and what I wish I had known when I started learning Korean.",
    votes: 1024,
    commentsCount: 203,
    flair: 'Achievement',
  },
];

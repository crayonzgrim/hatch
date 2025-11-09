import type { CommentData } from '@/components/post/Comment';

export const mockComments: CommentData[] = [
  {
    id: 1,
    username: 'seoul_local',
    postedTime: '1 hour ago',
    content:
      'I highly recommend Yeonnam-dong or Mangwon-dong. Both are close to Hongdae but much quieter, with lots of great cafes and international restaurants. The rent is also more reasonable than Gangnam.',
    votes: 42,
    replies: [
      {
        id: 4,
        username: 'expat_in_seoul',
        postedTime: '45 minutes ago',
        content:
          'Thanks for the recommendation! I will check out Yeonnam-dong this weekend. Any specific cafes or restaurants you recommend?',
        votes: 12,
        replies: [
          {
            id: 5,
            username: 'seoul_local',
            postedTime: '30 minutes ago',
            content:
              'Definitely check out Fritz Coffee Company and Anthracite for coffee. For food, try the pasta at Osteria Eataly!',
            votes: 8,
          },
        ],
      },
      {
        id: 6,
        username: 'foodie_explorer',
        postedTime: '40 minutes ago',
        content:
          'Mangwon-dong also has an amazing traditional market. Great for groceries and street food!',
        votes: 6,
      },
    ],
  },
  {
    id: 2,
    username: 'korea_veteran',
    postedTime: '45 minutes ago',
    content:
      'Hannam-dong is also a great option if budget is not a major concern. Very expat-friendly, close to Itaewon, and has amazing views of the Han River.',
    votes: 28,
    replies: [
      {
        id: 7,
        username: 'budget_conscious',
        postedTime: '35 minutes ago',
        content:
          "What's the rent range in Hannam-dong? I'm curious about the price difference from Gangnam.",
        votes: 4,
      },
    ],
  },
  {
    id: 3,
    username: 'gangnam_worker',
    postedTime: '30 minutes ago',
    content:
      "I work in Gangnam too and I live in Seongsu-dong. It's becoming really trendy with lots of new cafes and shops, and the commute is pretty easy via Line 2.",
    votes: 15,
  },
];

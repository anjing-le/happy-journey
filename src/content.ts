/** 方向和记录都从这里进入页面。没有真实内容前，保持空数组。 */
export type Entry = {
  title: string;
  description: string;
  date: string;
  href: string;
};

export type Direction = {
  id: string;
  name: string;
  english: string;
  description: string;
  color: string;
  entries: Entry[];
};

export const directions: Direction[] = [
  {
    id: 'knowledge',
    name: '知识',
    english: 'KNOWLEDGE',
    description: '把学过、想过、弄明白的事，留在这里。',
    color: 'var(--accent)',
    entries: [],
  },
  {
    id: 'experiences',
    name: '经历',
    english: 'EXPERIENCES',
    description: '收藏走过的地方、做过的事与遇见的人。',
    color: 'var(--green)',
    entries: [],
  },
];

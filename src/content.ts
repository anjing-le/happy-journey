/** 名称和描述对应 anjing-anjing/src/config/modules.ts 的 12 条赛道。 */
export type Track = { id: string; name: string; description: string; accent: string; href?: string };

export const tracks: Track[] = [
  { id: 'computer', name: '计算机', description: '代码是思维的延伸', accent: '#7eb8dc', href: 'computer/' },
  { id: 'finance', name: '金融', description: '建立自己的交易哲学', accent: '#e8b07a', href: 'finance/' },
  { id: 'music', name: '音乐', description: '旋律是另一种表达', accent: '#e0a0b8', href: 'music/' },
  { id: 'english', name: '英语', description: '通往更大世界的钥匙', accent: '#b8a0d8' },
  { id: 'fitness', name: '健身/形体', description: '身体是一切的基础', accent: '#dc8080' },
  { id: 'style', name: '形象/穿搭', description: '外在是内在的第一印象', accent: '#7eb8dc' },
  { id: 'calligraphy', name: '书法/写字', description: '一笔一画，心手相应', accent: '#b8afa8' },
  { id: 'brain', name: '智力训练', description: '保持锐利，持续一生', accent: '#e8d08a' },
  { id: 'photography', name: '摄影/审美', description: '学会观察，才能看见', accent: '#7ec8a0' },
  { id: 'editing', name: '剪辑/制作', description: '把故事讲给世界听', accent: '#e8a4a4' },
  { id: 'food', name: '美食/料理', description: '认真吃饭，好好生活', accent: '#e8b07a' },
  { id: 'dance', name: '跳舞', description: '身体会说话', accent: '#b8a0d8' },
];

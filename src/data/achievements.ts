export const achievementCategoryLabel = {
  technical: '技術型',
  artistic: '藝術型',
} as const;

export const achievementTypeLabel = {
  project: '作品／專案',
  competition: '競賽',
  certificate: '證照',
  experience: '學習經歷',
  other: '其他',
} as const;

export const achievementDomains = [
  { key: 'all', label: '全部' },
  ...Object.entries(achievementCategoryLabel).map(([key, label]) => ({ key, label })),
];

export const achievementTypes = [
  { key: 'all', label: '全部' },
  ...Object.entries(achievementTypeLabel).map(([key, label]) => ({ key, label })),
];

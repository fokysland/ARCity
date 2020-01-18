const categories = [
  {text: 'Скамья', type: 'bench'},
  {text: 'Фонарь', type: 'lamp'},
  {text: 'Урна', type: 'urn'},
  {text: 'Клумба', type: 'flowerbed'},
  {text: 'Пандус', type: 'ramp'},
  {text: 'Другое', type: 'other'},
];

export const getCategoriesWithText = () => categories;
export const getCategoriesWithoutText = () => [
  'bench',
  'lamp',
  'urn',
  'flowerbed',
  'ramp',
  'other',
];

export const getReadableType = type => {
  return categories.find(({type: itemType}) => itemType === type).text;
};

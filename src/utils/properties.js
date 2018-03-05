const ruleWithDirections = string => {
  return [
    string,
    `${string}-top`,
    `${string}-right`,
    `${string}-bottom`,
    `${string}-left`,
  ];
};

export const POSITIONING = [
  'position',
  'z-index',
  'top',
  'right',
  'left',
  'bottom',
];

export const BOX_MODEL = [
  'display',
  'overflow',
  'box-sizing',
  'width',
  'max-width',
  'height',
  'max-height',
  'box-shadow',
  ...ruleWithDirections('border'),
  ...ruleWithDirections('padding'),
  ...ruleWithDirections('margin'),
];

export const FLEX = [
  'flex',
  'flex-grow',
  'flex-shrink',
  'flex-basis',
  'flex-direction',
  'justify-content',
  'align-items',
  'align-content',
  'align-self',
  'order',
];

export const COLOR = ['background', 'background-color', 'color'];

export const FONT = [
  'font-family',
  'font-size',
  'line-height',
  'text-align',
  'text-shadow',
  'text-decoration',
  'letter-spacing',
];

const ruleWithDirections = string => {
  return [
    string,
    `${string}-top`,
    `${string}-right`,
    `${string}-bottom`,
    `${string}-left`,
  ];
};

export const positioning = [
  'position',
  'z-index',
  'top',
  'right',
  'left',
  'bottom',
  'float',
];

export const boxModel = [
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

export const flex = [
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

export const color = [
  'background',
  'background-color',
  'background-image',
  'background-repeat',
  'background-attachment',
  'background-position',
  'color',
];

export const font = [
  'font-family',
  'font-size',
  'font-weight',
  'line-height',
  'text-align',
  'text-shadow',
  'text-decoration',
  'letter-spacing',
];

export const transitions = [
  'transition',
  'transition-delay',
  'transition-duration',
  'transition-property',
  'transition-timing-function',
];

export const grid = [
  'grid',
  'grid-area',
  'grid-auto-columns',
  'grid-auto-flow',
  'grid-auto-rows',
  'grid-column',
  'grid-column-end',
  'grid-column-gap',
  'grid-column-start',
  'grid-gap',
  'grid-row',
  'grid-row-end',
  'grid-row-gap',
  'grid-row-start',
  'grid-template',
  'grid-template-areas',
  'grid-template-columns',
  'grid-template-rows',
];

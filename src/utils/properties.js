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
  ...ruleWithDirections('border-color'),
  ...ruleWithDirections('border-style'),
  'border-width',
  'border-radius',
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
  'font',
  'font-family',
  'font-size',
  'font-weight',
  'font-variant',
  'font-kerning',
  'font-language-override',
  'font-size-adjust',
  'font-stretch',
  'font-style',
  'font-synthesis',
  'font-variant-alternates',
  'font-variant-caps',
  'font-variant-east-asian',
  'font-variant-ligatures',
  'font-variant-numeric',
  'font-variant-position',
  'line-height',
  'text-align',
  'text-shadow',
  'text-decoration',
  'text-indent',
  'text-transform',
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

export const list = [
  'list-style',
  'list-style-image',
  'list-style-position',
  'list-style-type',
];

export const animation = [
  'animation',
  'animation-delay',
  'animation-direction',
  'animation-duration',
  'animation-fill-mode',
  'animation-iteration-count',
  'animation-name',
  'animation-play-state',
  'animation-timing-function',
];

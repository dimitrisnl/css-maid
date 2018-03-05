const ruleWithDirections = string => {
  return [
    string,
    `${string}-top`,
    `${string}-right`,
    `${string}-bottom`,
    `${string}-left`,
  ];
};

const POSITIONING = ['position', 'z-index', 'top', 'right', 'left', 'bottom'];

const BOX_MODEL = [
  'display',
  'overflow',
  'box-sizing',
  'width',
  'height',
  ...ruleWithDirections('padding'),
  ...ruleWithDirections('border'),
  ...ruleWithDirections('margin'),
  'box-shadow',
];

const COLOR = ['background', 'color'];

const FONT = [
  'font-family',
  'font-size',
  'line-height',
  'text-align',
  'text-shadow',
  'letter-spacing',
];

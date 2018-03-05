# CSS Maid

In progress.

The purpose of this repo is to make a Web App that will sort out css properties base on type.

### ToDO

* [ ] Extract base html elements as components
* [ ] Use some consistent color palette & import it from `utils/color.js`
* [ ] Parse styles and do some alpha sorting
* [ ] Validate input
* [ ] Deploy to Netlify
* [ ] Optimize for SASS
* [ ] Optimize for SCSS
* [ ] Optimize for Emotion-based components

### Sneak peak

```
const POSITIONING = ['position', 'z-index', 'top', 'right', 'left', 'bottom'];

const BOX_MODEL = [
  'display',
  'overflow',
  'box-sizing',
  'width',
  'max-width',
  'height',
  'max-height',
  ...ruleWithDirections('border'),
  ...ruleWithDirections('padding'),
  ...ruleWithDirections('margin'),
  'box-shadow',
];

const FLEX = [
  'flex',
  'flex-grow',
  'flex-shrink',
  'flex-basis',
  'justify-content',
  'align-items',
  'align-content',
  'align-self',
  'order',
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
```

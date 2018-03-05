import { POSITIONING, BOX_MODEL, FLEX, COLOR, FONT } from './properties';

export const format = (string = '') => {
  try {
    const properties = {
      positioning: [],
      boxModel: [],
      flex: [],
      color: [],
      font: [],
      rest: [],
    };

    // Replace unnecessary newlines
    while (string.includes('\n\n')) {
      string = string.replace('\n\n', '\n');
    }

    // Split each rule
    const arr = string.trim().split('\n');

    arr.forEach(rule => {
      // Split by semicolons
      // TODO: consider media queries
      let [declaration, value] = rule.split(':');

      declaration = declaration.trim();
      value = value.trim();

      // add trailing semicolor
      if (value[value.length - 1] !== ';') {
        value += ';';
      }

      const formattedRule = `${declaration}: ${value}\n`;

      // TODO: Revisit the whole block
      if (POSITIONING.includes(declaration)) {
        properties.positioning.push(formattedRule);
      } else if (BOX_MODEL.includes(declaration)) {
        properties.boxModel.push(formattedRule);
      } else if (FLEX.includes(declaration)) {
        properties.flex.push(formattedRule);
      } else if (COLOR.includes(declaration)) {
        properties.color.push(formattedRule);
      } else if (FONT.includes(declaration)) {
        properties.font.push(formattedRule);
      } else {
        properties.rest.push(formattedRule);
      }
    });

    const output = Object.values(properties)
      .filter(value => value.length > 0)
      .map(value => value.join(''))
      .reduce((output, value) => output + value + '\n', '');

    return output;
  } catch (e) {
    console.log(e);
    return 'Something Went Wrong';
  }
};

import {
  POSITIONING,
  BOX_MODEL,
  FLEX,
  COLOR,
  FONT,
  GRID,
  TRANSITIONS,
} from './properties';

export const format = (string = '') => {
  try {
    const properties = {
      positioning: [],
      boxModel: [],
      flex: [],
      color: [],
      font: [],
      grid: [],
      transitions: [],
      rest: [],
    };

    // Replace unnecessary newlines
    while (string.includes('\n\n')) {
      string = string.replace('\n\n', '\n');
    }

    // Get everything between curly braces
    let content = string.match(/\{([^}]+)\}/g).map(str => str.slice(1, -1))[0];
    // Split each rule
    const arr = content.trim().split('\n');

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

      const formattedRule = `  ${declaration}: ${value}\n`;

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
      } else if (GRID.includes(declaration)) {
        properties.grid.push(formattedRule);
      } else if (TRANSITIONS.includes(declaration)) {
        properties.transitions.push(formattedRule);
      } else {
        properties.rest.push(formattedRule);
      }
    });

    content = Object.values(properties)
      .filter(value => value.length > 0)
      .map(value => value.sort())
      .map(value => value.join(''))
      .reduce((output, value) => output + value + '\n', '');

    content = `{\n\n${content}}`;
    return string.replace(/\{([^}]+)\}/g, content);
  } catch (e) {
    console.log(e);
    return 'Something Went Wrong';
  }
};

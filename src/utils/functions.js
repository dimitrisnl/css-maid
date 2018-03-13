import gonzales from 'gonzales-pe';

import Formatter from './formatter';
import * as GROUPS from './properties';

export const format = (css = '') => {
  try {
    const ast = gonzales.parse(css);
    const formatter = new Formatter(GROUPS);

    ast.traverseByType('declaration', (node, index, parent, parentIndex) => {
      formatter.addNode(node, parentIndex);
    });

    const arr = formatter.finalize();

    console.log(arr);

    arr.forEach(x => {
      console.log(x);
      console.log(x.parent, x.node);
    });

    return 'emoji';
  } catch (e) {
    console.log(e);
    return 'Something Went Wrong';
  }
};

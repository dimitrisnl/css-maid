import gonzales from 'gonzales-pe';

import Formatter from './formatter';
import * as CATEGORIES from './properties';

export const parseCSS = (css = '') => {
  try {
    const ast = gonzales.parse(css);
    const formatter = new Formatter(CATEGORIES);

    // Traverse the tree, and group each declaration by type
    ast.traverseByType('declaration', (node, index, parent, parentIndex) => {
      const nodeName = formatter.getNodeName(node);
      formatter.addNode(node, nodeName, parentIndex);
    });

    // Get the result
    const arr = formatter.getNodes();

    // Put it back in proper order, under the appropriate parent selector
    arr.forEach(group => {
      group.forEach(declaration => {
        // get the parent
        // push the node
        console.log(declaration.node, declaration.parent);
      });
      // add a space in between
      // unless it's the final one
    });

    return 'emoji';
  } catch (e) {
    console.log(e);
    return 'Something Went Wrong';
  }
};

export default class Formatter {
  constructor(groups) {
    this.groups = { ...groups };
    this.obj = this.initializeObj(groups);
  }

  initializeObj = groups => {
    return Object.keys(groups).reduce((obj, key) => {
      obj[key] = [];
      return obj;
    }, {});
  };

  getNodeName = node => {
    const declaration = node.content.find(x => x.type === 'property');
    return declaration.content[0].content;
  };

  addNode = (node, nodeName, parent) => {
    Object.keys(this.groups).forEach(key => {
      if (this.groups[key].includes(nodeName)) {
        this.obj[key].push({ parent, node });
      }
    });
  };
  getNodes = () => {
    return Object.values(this.obj)
      .filter(decl => decl.length > 0)
      .reduce((sum, curr) => [...sum, curr], []);
  };
}

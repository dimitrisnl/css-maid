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

  addNode = (node, nodeName, parentIdentifier) => {
    Object.keys(this.groups).forEach(type => {
      if (this.groups[type].includes(nodeName)) {
        this.obj[type].push({ node, parentIdentifier, type });
      }
    });
  };
  getNodes = () => {
    return Object.values(this.obj)
      .filter(decl => decl.length > 0)
      .reduce((sum, curr) => [...sum, ...curr], []);
  };
}

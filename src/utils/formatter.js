export default class Formatter {
  constructor(groups) {
    this.groups = { ...groups };
    this.obj = { ...this.initializeObj(groups), rest: [] };
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
    let found = false;
    Object.keys(this.groups).forEach(type => {
      if (!found && this.groups[type].includes(nodeName)) {
        found = true;
        this.obj[type].push({ node, nodeName, parentIdentifier, type });
      }
    });
    if (!found) {
      this.obj.rest.push({ node, parentIdentifier, type: 'rest' });
    }
  };
  getNodes = () => {
    return Object.values(this.obj)
      .filter(decl => decl.length > 0)
      .map(decl => decl.sort((x, y) => x.nodeName > y.nodeName))
      .reduce((sum, curr) => [...sum, ...curr], []);
  };
}

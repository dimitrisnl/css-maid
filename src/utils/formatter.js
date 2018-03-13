export default class Formatter {
  constructor(groups) {
    this.groups = { ...groups };
    this.obj = this.initializeObj(groups);
  }

  initializeObj = groups => {
    const obj = {};
    Object.keys(groups).forEach(key => (obj[key] = []));
    return obj;
  };

  extractPropertyName = node => {
    const declaration = node.content.find(x => x.type === 'property');
    return declaration.content[0].content;
  };

  addNode = (node, parent) => {
    const propertyName = this.extractPropertyName(node);

    Object.keys(this.groups).forEach(key => {
      if (this.groups[key].includes(propertyName)) {
        this.obj[key].push({ parent, node });
      }
    });
  };
  finalize = () => {
    return Object.values(this.obj)
      .filter(decl => decl.length > 0)
      .reduce((sum, curr) => [...sum, curr], []);
  };
}

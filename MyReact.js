function createElement(type, props, ...children) {
  const element = document.createElement(type);

  let { style, className, children: propsChildren, ...attributes } = props;
  if (children.length) propsChildren = children;

  if (style) {
    Object.entries(style).forEach(([name, value]) => {
      element.style[name] = value;
    });
  }

  Object.entries(attributes).forEach(([name, value]) => {
    element.setAttribute(name, value);
  });

  if (className) {
    element.className = className;
  }

  propsChildren.forEach((node) => {
    element.append(node);
  });

  return element;
}

const MyReact = {
  createElement,
};

window.MyReact = MyReact;

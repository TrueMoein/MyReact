function render(element, rootNode) {
  rootNode.appendChild(element);
}

function hydrate(element, rootNode) {
  console.log(element, rootNode);
}

const MyReactDOM = {
  render,
  hydrate,
};

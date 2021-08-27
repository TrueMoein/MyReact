const h1 = MyReact.createElement("h1", {}, "Hello World!");
const p = MyReact.createElement(
  "p",
  { style: { color: "red" } },
  "From MapsaHR..."
);

const div = MyReact.createElement("div", {
  children: [h1, p],
  style: { fontSize: "30px", color: "blue" },
  className: "Test",
  id: "Mapsa",
});

MyReactDOM.render(div, document.getElementById("app"));

const h1 = document.createElement("h1");

const reactH1 = React.createElement("h1", {
  children: ["salam", " test"],
  className: "btn",
  style: { color: "blue", backgroundColor: "pink" },
  students: ["ali", "siavash"],
});

ReactDOM.render(reactH1, document.getElementById("app"));

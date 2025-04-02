import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
// import First from "./MyFirstComponent.jsx";
// import SecondComponent from "./SecondComponent.jsx";
// import Lists from "./Lists.jsx";
import Counter from "./Counter.jsx";

createRoot(document.getElementById("root")).render(
  //   <SecondComponent name="Rohit Jain" age={34} skillset={["React", "Node", "Laravel"]} />
  //   <SecondComponent name={"Rohit Jain"} />
  //   <SecondComponent age="34" />
  //   <Lists />
  <Counter />
);

//PROPS: arguments to functions(components)

// Second(fn, ln)

// <Second fn="Rohit" ln="Jain" />

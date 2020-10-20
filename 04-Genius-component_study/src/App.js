import "./styles/main.scss";

import Jogo from "./Jogo";

const App = () => {
  const App = document.createElement("div");

  App.setAttribute("class", "App");
  App.append(Jogo());
  return App;
};

export default App;

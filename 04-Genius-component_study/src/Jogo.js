import Pad from "./Pad";

export default () => {
    const Jogo = document.createElement("div");

    Jogo.classList.add("jogo");
    Jogo.append(Pad(1));
    Jogo.append(Pad(2));
    Jogo.append(Pad(3));
    Jogo.append(Pad(4));

    return Jogo;
};

export default (valor) => {
    const Pad = document.createElement("button");

    Pad.classList.add("pad", `pad-${valor}`);

    return Pad;
};

const list = [
    "--bg--type2",
    "--bg--tpye3",
    "--bg--tpye1",
]
const t = 5000;
const grad = () => {
    var g = Math.floor(Math.random() * 2);
    document.body.classList.toggle(list[g]);
    setTimeout("grad()", t);
}
window.onload = grad;
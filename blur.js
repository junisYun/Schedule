const main = document.querySelector(".main");
const img = document.querySelector("img");
console.dir(main);
console.log(img);
main.addEventListener("mouseenter", () => {
  img.classList.add("blur");
});
main.addEventListener("mouseleave", () => {
  img.classList.remove("blur");
});

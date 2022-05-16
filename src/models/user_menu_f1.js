export const user_menu_f1 = function () {
const btn = document.getElementById("user-menu_f1");
const div = document.getElementById("galka_f1");
var marker = 0;

btn.addEventListener("submit", function () {
    alert('galka1');
    if (marker % 2 === 0) {
      div.innerHTML = `<img id="vector1" src="/src/img/galka.png" alt="menu1">`;
    }
    else {
      div.innerHTML = `<img id="vector1" src="/src/img/galka1.png" alt="menu1">`;
    };
    marker++;
  });
}
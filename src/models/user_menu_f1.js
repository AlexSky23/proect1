export const user_menu_f1 = function () {
  const btn = document.getElementById("user-menu_f1");
  const div = document.getElementById("galka_f1");
  const u_m = document.getElementById("menu_user");
 
  let marker = 1;
  btn.addEventListener("click", function () {
    if (marker % 2 === 0) {
      div.innerHTML = `<img id="vector1" src="/src/img/galka.png" alt="menu1">`;
      u_m.innerHTML = "";
    }
    else {
      div.innerHTML = `<img id="vector2" src="/src/img/galka1.png" alt="menu1">`;
      u_m.innerHTML = `
      <img id="Rectangle" src="/src/img/Rectangle 27.png" alt="romb">
      <div id="u-m_blok-txt">
      <p id="text_m-u">Profile</p>
      <p id="text_m-u">Log Out</p>
      `;
    };
    marker++;
  });
}
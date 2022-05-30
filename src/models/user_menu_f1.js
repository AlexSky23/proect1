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
      u_m.innerHTML = `<img id="Rectangle" src="/src/img/Rectangle 27.png" alt="romb">
                      <div id="u-m_blok-txt">
                      <p id="text_m-u">Profile</p>
                      <p id="text_m-u">Log Out</p></div>`;
    };
    marker++;
  });
};

export const content_in_block = function () {
  const b1 = document.getElementById("block_text1");
  const b2 = document.getElementById("block_text2");
  const b3 = document.getElementById("block_text3");
  const b4 = document.getElementById("block_text4");
  const ac1 = document.getElementById("add_c1");
  const ac2 = document.getElementById("add_c2");
  const ac3 = document.getElementById("add_c3");
  const ac4 = document.getElementById("add_c4");


}
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css";
//import taskFieldTemplate from "./templates/taskField.html";
import noAccessTemplate from "./templates/noAccess.html";
import { User } from "./models/User";
import { generateTestUser } from "./utils";
import { State } from "./state";
import { authUser } from "./services/auth";
import { btn_LogOff } from "./services/btn_logOff"; 
import { user_menu_f1 } from "./models/user_menu_f1";
//добавление доски
//import laptop1_con from "./templates/laptop1.html";
import laptop1_con from "./templates/frame1.html";
export const appState = new State();

const loginForm = document.querySelector("#app-login-form");
const btnLogOn = document.querySelector("#app-login-btn");
const btnLogOff = document.querySelector("#app-logout-btn");
const logoff = btn_LogOff();
const btn_user_menu_f1 = user_menu_f1();

generateTestUser(User);

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(loginForm);
  const login = formData.get("login");
  const password = formData.get("password");

  let fieldHTMLContent = authUser(login, password);

  if(fieldHTMLContent){
   // fieldHTMLContent = taskFieldTemplate;
   fieldHTMLContent = laptop1_con;
   btn_user_menu_f1;

    btnLogOn.style.display = "none";
    btnLogOff.style.display = "inline";
    logoff; //перезагрузка страницы для сброса авторизации
  }
  else{
    fieldHTMLContent = noAccessTemplate;
    alert("Не правильно введен логин или пароль!")
  };

  document.querySelector("#content").innerHTML = fieldHTMLContent;
});
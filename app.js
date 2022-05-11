// classes
class User {
  constructor(name, username, password, email, dateOfBirth) {
    this.name = name;
    this.username = username;
    this.password = password;
    this.email = email;
    this.dateOfBirth = dateOfBirth;
  }
}

// anchors nav bar
const anchor_welcome = document.getElementById("welcome_a");
const anchor_settings = document.getElementById("settings_a");
const anchor_top10 = document.getElementById("top10_a");
const anchor_game = document.getElementById("game_a");
const anchor_about = document.getElementById("about_a");

// divs
const div_welcome = document.getElementById("welcome_div");
const div_welcome_login = document.getElementById("welcome_div-logged-in");
const div_signUp = document.getElementById("signup_div");
const div_login = document.getElementById("login_div");
const div_settings = document.getElementById("settings_div");
const div_settings_login = document.getElementById("settings_div-logged-in");
const div_about = document.getElementById("about_div");
const div_top10 = document.getElementById("top10_div");
const div_game = document.getElementById("game_div");
const div_game_login = document.getElementById("game_div-logged-in");

// btn
const btn_signUp = document.getElementById("signup-btn");
const btn_login = document.getElementById("login-btn");
const btn_checkLogin = document.getElementById("checkLogin-btn");
const btn_logout = document.getElementById("logout-btn");

/* Page Variables */
var currPage = "welcome";
var currUser = null;

// DB
var users = {};
users["k"] = new User("Default-User", "k", "k", null, null);

/* Game Variables */
var context;
var shape = new Object();
var board;
var score;
var pac_color;
var start_time;
var time_elapsed;
var interval;

// added by dor
var numOfBalls;
var numOfBalls_5;
var numOfBalls_15;
var numOfBalls_25;
var balls_color_5;
var balls_color_15;
var balls_color_25;
var gameTime;
var monstersNum;

/* ////////////////////////////////  NAV PAGES ////////////////////////////////// */

function changePage(
  from_page,
  to_page,
  have_anchor_from,
  have_anchor_to,
  caseName
) {
  from_page.classList.toggle("hide");
  to_page.classList.toggle("hide");

  if (have_anchor_from) {
    have_anchor_from.classList.toggle("active");
  }
  if (have_anchor_to) {
    have_anchor_to.classList.toggle("active");
  }

  currPage = caseName;

  if(caseName == "game-login"){
    Start();
  }
}

anchor_welcome.addEventListener("click", function () {
  switch (currPage) {
    case "welcome":
      console.log("in welcome!");
      break;
    case "settings":
      changePage(
        div_settings,
        div_welcome,
        anchor_settings,
        anchor_welcome,
        "welcome"
      );
      console.log("in welcome!");
      break;

    case "settings-login":
      changePage(
        div_settings_login,
        div_welcome_login,
        anchor_settings,
        anchor_welcome,
        "welcome-login"
      );
      console.log("in welcome login!");
      break;

    case "game":
      changePage(div_game, div_welcome, anchor_game, anchor_welcome, "welcome");
      console.log("in welcome!");
      break;

    case "game-login":
      changePage(
        div_game_login,
        div_welcome_login,
        anchor_game,
        anchor_welcome,
        "welcome-login"
      );
      console.log("in welcome!");
      break;

    case "about":
      console.log("in welcome!");
      changePage(
        div_about,
        currUser ? div_welcome_login : div_welcome,
        anchor_about,
        anchor_welcome,
        currUser ? "welcome-login" : "welcome"
      );
      break;
    case "signUp":
      console.log("in welcome!");
      changePage(div_signUp, div_welcome, false, false, "welcome");

      break;
    case "login":
      console.log("in welcome!");
      changePage(div_login, div_welcome, false, false, "welcome");
      break;

    case "top10":
      console.log("in welcome!");
      changePage(
        div_top10,
        currUser ? div_welcome_login : div_welcome,
        anchor_top10,
        anchor_welcome,
        currUser ? "welcome-login" : "welcome"
      );
      break;

    case "welcome-login":
      console.log(`hello ${currUser}`);
      break;
  }
});
anchor_settings.addEventListener("click", function () {
  switch (currPage) {
    case "welcome-login":
      console.log("in settings!");
      changePage(
        div_welcome_login,
        div_settings_login,
        anchor_welcome,
        anchor_settings,
        "settings-login"
      );
      break;

    case "welcome":
      console.log("in settings!");
      changePage(
        div_welcome,
        div_settings,
        anchor_welcome,
        anchor_settings,
        "settings"
      );
      break;
    case "settings":
      console.log("still in settings!");
      break;
    case "game":
      changePage(
        div_game,
        div_settings,
        anchor_game,
        anchor_settings,
        "settings"
      );
      break;

    case "game-login":
      changePage(
        div_game_login,
        div_settings_login,
        anchor_game,
        anchor_settings,
        "settings-login"
      );
      break;

    case "about":
      console.log("in settings!");
      changePage(
        div_about,
        currUser ? div_settings_login : div_settings,
        anchor_about,
        anchor_settings,
        currUser ? "settings-login" : "settings"
      );
      break;
    case "signUp":
      console.log("in settings!");
      changePage(
        div_signUp,
        div_settings,
        anchor_welcome,
        anchor_settings,
        "settings"
      );
      break;
    case "login":
      console.log("in settings!");
      changePage(
        div_login,
        div_settings,
        anchor_welcome,
        anchor_settings,
        "settings"
      );
      break;
    case "top10":
      console.log("in settings!");
      changePage(
        div_top10,
        currUser ? div_settings_login : div_settings,
        anchor_top10,
        anchor_settings,
        currUser ? "settings-login" : "settings"
      );
      break;
  }
});
anchor_top10.addEventListener("click", function () {
  switch (currPage) {
    case "welcome-login":
      console.log("in top10!");
      changePage(
        div_welcome_login,
        div_top10,
        anchor_welcome,
        anchor_top10,
        "top10"
      );
      break;
    case "welcome":
      console.log("in top10!");
      changePage(div_welcome, div_top10, anchor_welcome, anchor_top10, "top10");
      break;
    case "settings":
      console.log("in top10!");
      changePage(
        div_settings,
        div_top10,
        anchor_settings,
        anchor_top10,
        "top10"
      );
      break;

    case "settings-login":
      console.log("in top10!");
      changePage(
        div_settings_login,
        div_top10,
        anchor_settings,
        anchor_top10,
        "top10"
      );
      break;

    case "game":
      changePage(div_game, div_top10, anchor_game, anchor_top10, "top10");
      break;

    case "game-login":
      changePage(div_game_login, div_top10, anchor_game, anchor_top10, "top10");
      break;

    case "about":
      console.log("in top10!");
      changePage(div_about, div_top10, anchor_about, anchor_top10, "top10");
      break;
    case "signUp":
      console.log("in top10!");
      changePage(div_signUp, div_top10, anchor_welcome, anchor_top10, "top10");
      break;
    case "login":
      console.log("in top10!");
      changePage(div_login, div_top10, anchor_welcome, anchor_top10, "top10");
      break;
    case "top10":
      console.log("still in top10!");
      break;
  }
});

anchor_game.addEventListener("click", function () {
  // if we were at game-login?
  switch (currPage) {
    case "welcome-login":
      console.log("in top10!");
      changePage(
        div_welcome_login,
        div_game_login,
        anchor_welcome,
        anchor_game,
        "game-login"
      );
      // Start();
      break;
    case "welcome":
      console.log("in game!");
      changePage(div_welcome, div_game, anchor_welcome, anchor_game, "game");
      break;
    case "settings":
      console.log("in game!");
      changePage(div_settings, div_game, anchor_settings, anchor_game, "game");
      break;

    case "settings-login":
      console.log("in game!");
      changePage(
        div_settings_login,
        div_game_login,
        anchor_settings,
        anchor_game,
        "game-login"
      );
      break;

    case "game":
      console.log("in game!");
      break;
    case "about":
      changePage(
        div_about,
        currUser ? div_game_login : div_game,
        anchor_about,
        anchor_game,
        currUser ? "game-login" : "game"
      );
      break;
    case "signUp":
      console.log("in game!");
      changePage(div_signUp, div_game, anchor_welcome, anchor_game, "game");
      break;
    case "login":
      console.log("in game!");
      changePage(div_login, div_game, anchor_welcome, anchor_game, "game");
      break;
    case "top10":
      console.log("in game!");
      changePage(
        div_top10,
        currUser ? div_game_login : div_game,
        anchor_top10,
        anchor_game,
        currUser ? "game-login" : "game"
      );
      break;
  }
});

anchor_about.addEventListener("click", function () {
  switch (currPage) {
    case "welcome-login":
      console.log("in about!");
      changePage(
        div_welcome_login,
        div_about,
        anchor_welcome,
        anchor_about,
        "about"
      );
      break;
    case "welcome":
      console.log("in about!");
      changePage(div_welcome, div_about, anchor_welcome, anchor_about, "about");
      break;
    case "settings":
      console.log("in about!");
      changePage(
        div_settings,
        div_about,
        anchor_settings,
        anchor_about,
        "about"
      );
      break;

    case "settings-login":
      console.log("in about!");
      changePage(
        div_settings_login,
        div_about,
        anchor_settings,
        anchor_about,
        "about"
      );
      break;
    case "game":
      console.log("in about!");
      changePage(div_game, div_about, anchor_game, anchor_about, "about");
      break;

    case "game-login":
      console.log("in about!");
      changePage(div_game_login, div_about, anchor_game, anchor_about, "about");
      break;

    case "about":
      console.log("still in about!");
      break;
    case "signUp":
      console.log("in about!");
      changePage(div_signUp, div_about, anchor_welcome, anchor_about, "about");
      break;
    case "login":
      console.log("in about!");
      changePage(div_login, div_about, anchor_welcome, anchor_about, "about");
      break;
    case "top10":
      console.log("in about!");
      changePage(div_top10, div_about, anchor_top10, anchor_about, "about");
      break;
  }
});

/* ////////////////////////////////  SIGN-UP ////////////////////////////////// */
btn_signUp.addEventListener("click", function () {
  console.log("in sign up!");
  div_welcome.classList.toggle("hide");
  div_signUp.classList.toggle("hide");
  currPage = "signUp";
});

// VALIDATION USING JQUERY
$(document).ready(function () {
  // Validate Username
  $("#usernamecheck").hide();
  let usernameError = true;
  $("#form_username").keyup(function () {
    usernameError = true;
    validateUsername();
  });

  function validateUsername() {
    let usernameValue = $("#form_username").val();
    if (usernameValue.length == "") {
      $("#usernamecheck").show();
      usernameError = false;
      return false;
    } else if (
      usernameValue.length == 0 ||
      !/\d+/.test(usernameValue) ||
      !/[a-zA-Z]+/.test(usernameValue)
    ) {
      $("#usernamecheck").show();
      $("#usernamecheck").html(
        "**username must be not empty and includes characters and numbers!"
      );
      usernameError = false;
      return false;
    } else {
      $("#usernamecheck").hide();
    }
  }

  // Validate Email
  const email = document.getElementById("form_email");
  email.addEventListener("blur", () => {
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let emailValue = email.value;
    if (regex.test(emailValue)) {
      $("#confemail").hide();
      emailError = true;
    } else {
      $("#confemail").show();
      emailError = false;
    }
  });

  // Validate Password
  $("#passcheck").hide();
  var passwordError = true;
  $("#form_pass").keyup(function () {
    passwordError = true;
    validatePassword();
  });
  function validatePassword() {
    let passwordValue = $("#form_pass").val();
    if (passwordValue.length == "") {
      $("#passcheck").show();
      passwordError = false;
      return false;
    }

    if (
      passwordValue.length < 6 ||
      !/\d+/.test(passwordValue) ||
      !/[A-Za-z]+/.test(passwordValue)
    ) {
      $("#passcheck").show();
      $("#passcheck").html(
        "**length of username must be at least 6 and must contain characters and numbers"
      );
      //   $("#passcheck").css("color", "red");
      passwordError = false;
      return false;
    } else {
      $("#passcheck").hide();
    }
  }

  // Validate Confirm Password
  $("#confpasscheck").hide();
  let confirmPasswordError = true;
  $("#form_conf_pass").keyup(function () {
    validateConfirmPassword();
  });
  function validateConfirmPassword() {
    let confirmPasswordValue = $("#form_conf_pass").val();
    let passwordValue = $("#form_pass").val();
    if (passwordValue != confirmPasswordValue) {
      $("#confpasscheck").show();
      $("#confpasscheck").html("**Password didn't Match");
      $("#confpasscheck").css("color", "red");
      confirmPasswordError = false;
      return false;
    } else {
      $("#confpasscheck").hide();
    }
  }

  // Validate Full name
  $("#namecheck").hide();
  let nameError = true;
  $("#form_name").keyup(function () {
    nameError = true;
    validateName();
  });

  function validateName() {
    let nameValue = $("#form_name").val();
    if (nameValue.length == "") {
      $("#namecheck").show();
      nameError = false;
      return false;
    } else if (nameValue.length == 0 || /\d+/.test(nameValue)) {
      $("#namecheck").show();
      $("#namecheck").html(
        "**full name cannot be empty and cannot include numbers!"
      );
      nameError = false;
      return false;
    } else {
      $("#namecheck").hide();
    }
  }

  // Submit button
  $("#btn_submit").click(function (e) {
    e.preventDefault();

    validateUsername();
    validatePassword();
    validateConfirmPassword();
    // validateEmail();
    validateName();
    if (
      usernameError == true &&
      passwordError == true &&
      confirmPasswordError == true &&
      emailError == true &&
      nameError == true
    ) {
      // get all fields
      let usernameValue = $("#form_username").val();
      let emailValue = $("#form_email").val();
      let passwordValue = $("#form_pass").val();
      let nameValue = $("#form_name").val();
      let dateValue = $("#form_birthdate").val();

      // register new user
      users[usernameValue] = new User(
        nameValue,
        usernameValue,
        passwordValue,
        emailValue,
        dateValue
      );

      // switch page to login
      changePage(div_signUp, div_login, false, false, "login");

      // clean input fields
      $("#form_username").val("");
      $("#form_email").val("");
      $("#form_pass").val("");
      $("#form_conf_pass").val("");
      $("#form_name").val("");
      $("#form_birthdate").val("1995-01-01"); //default val
      return true;
    } else {
      return false;
    }
  });
});

// /* ////////////////////////////////  LOGIN ////////////////////////////////// */
btn_login.addEventListener("click", function () {
  console.log("in sign in!");
  div_welcome.classList.toggle("hide");
  div_login.classList.toggle("hide");
  currPage = "login";
});

// VALIDATION USING JQUERY
$(document).ready(function () {
  // find Username , validate with our data
  $("#form_login_usernamecheck").hide();
  $("#form_login_error_message").hide();
  let usernameError = true;
  $("#form_login_username").keyup(function () {
    $("#form_login_error_message").hide();
    usernameError = true;
    validateUsernameLogin();
  });

  function validateUsernameLogin() {
    let usernameValue = $("#form_login_username").val();
    if (usernameValue.length == "") {
      $("#form_login_usernamecheck").show();
      $("#form_login_usernamecheck").html(
        "**username must be not empty and includes characters and numbers!"
      );
      usernameError = false;
      return false;
    } else {
      $("#form_login_usernamecheck").hide();
    }
  }

  // find Password (validate with our login data)
  $("#form_login_passcheck").hide();
  let passwordError = true;
  $("#form_login_pass").keyup(function () {
    $("#form_login_error_message").hide();
    validatePasswordLogin();
  });
  function validatePasswordLogin() {
    let passwordValue = $("#form_login_pass").val();
    if (passwordValue.length == "") {
      $("#form_login_passcheck").show();
      $("#form_login_passcheck").html("**password must be not empty!");
      passwordError = false;
      return false;
    } else {
      $("#form_login_passcheck").hide();
    }
  }

  // Submit button
  $("#checkLogin-btn").click(function (e) {
    e.preventDefault();
    validateUsernameLogin();
    validatePasswordLogin();

    if (usernameError == true && passwordError == true) {
      let usernameValue = $("#form_login_username").val();
      let passwordValue = $("#form_login_pass").val();
      let userLogin = users[usernameValue] ? users[usernameValue] : null;
      if (userLogin && userLogin.password === passwordValue) {
        currUser = userLogin;

        // set welcome message to specific user
        $("#logged_in_welcome").text(`Welcome back, ${userLogin.name}!`);

        // change window to game settings!
        changePage(
          div_login,
          div_settings_login,
          anchor_welcome,
          anchor_settings,
          "settings-login"
        );

        // clear fields
        $("#form_login_username").val("");
        $("#form_login_pass").val("");

        return true;
      }
      $("#form_login_error_message").show();
      return false;
    }
    return false;
  });
});

/* //////////////////////////////// LOGOUT ////////////////////////////////// */
btn_logout.addEventListener("click", function () {
  currUser = null;
  changePage(div_welcome_login, div_welcome, false, false, "welcome");
});

/* /////////////////////////////// SETTINGS /////////////////////// */

////////////// BALLS AMOUNT /////////////////
var ballsSlider = document.getElementById("ballsAmountRange");
var ballsAmountDisplayer = document.getElementById("display-balls-amount");
// Set first values
ballsAmountDisplayer.innerHTML = ballsSlider.value; 
numOfBalls = parseInt(ballsSlider.value);
numOfBalls_5 = Math.floor(numOfBalls*0.6);
numOfBalls_15 = Math.floor(numOfBalls*0.3);
numOfBalls_25 = numOfBalls-numOfBalls_15-numOfBalls_5;
// Update the current slider value (each time you drag the slider handle)
ballsSlider.oninput = function() {
  ballsAmountDisplayer.innerHTML = this.value;
  numOfBalls = parseInt(this.value);
  numOfBalls_5 = Math.floor(numOfBalls*0.6);
  numOfBalls_15 = Math.floor(numOfBalls*0.3);
  numOfBalls_25 = numOfBalls-numOfBalls_15-numOfBalls_5;
}

////////////// COLOR PICKER /////////////////
var colorPicker5 = document.getElementById("5colorpicker");
var colorPicker15 = document.getElementById("15colorpicker");
var colorPicker25 = document.getElementById("25colorpicker");
// default
balls_color_5 = colorPicker5.value;
balls_color_15 = colorPicker15.value;
balls_color_25 = colorPicker25.value;

colorPicker5.onchange = function(){
  balls_color_5 = colorPicker5.value;
}
colorPicker15.onchange = function(){
  balls_color_15 = colorPicker15.value;
}
colorPicker25.onchange = function(){
  balls_color_25 = colorPicker25.value;
}

////////////// TIME AMOUNT ///////////////// 
var gameTimerPicker = document.getElementById("game_timer_picker");
gameTimerPicker.onchange = function(e){
  gameTime = parseInt(gameTimerPicker.value);  // ---->>> need fix to number and string :(
}

/////////////// MONSTERS AMOUNT /////////////
var monstersSlider = document.getElementById("monstersAmountRange");
var monstersAmountDisplayer = document.getElementById("display-monsters-amount");
// Set first values
monstersAmountDisplayer.innerHTML = monstersSlider.value; 
numOfMonsters = parseInt(monstersSlider.value);
// Update the current slider value (each time you drag the slider handle)
monstersSlider.oninput = function() {
  monstersAmountDisplayer.innerHTML = this.value;
  numOfMonsters = parseInt(this.value);
}

////////////// RANDOM //////////////
var btn_random = document.getElementById("randomPicker");
btn_random.onclick = function(){

  // set num of balls
  ballsSlider.value = Math.floor(Math.random() * (90 - 50) ) + 50;
  numOfBalls = parseInt(ballsSlider.value);
  ballsAmountDisplayer.innerHTML = ballsSlider.value; 

  // set num of monsters
  monstersSlider.value = Math.floor(Math.random() * (4 - 1) ) + 1;
  numOfMonsters = parseInt(monstersSlider.value);
  monstersAmountDisplayer.innerHTML = monstersSlider.value; 

  // set time
  gameTime = Math.floor(Math.random() * (300 - 60) ) + 60;
  gameTimerPicker.value = gameTime;

  // set colors
  balls_color_5 = "#" + Math.floor(Math.random()*16777215).toString(16);
  balls_color_15 = "#" + Math.floor(Math.random()*16777215).toString(16);
  balls_color_25 = "#" + Math.floor(Math.random()*16777215).toString(16);
  colorPicker5.value = balls_color_5;
  colorPicker15.value = balls_color_15;
  colorPicker25.value = balls_color_25;

  // set arrows to default
  upKey = 38;
  downKey = 40;
  leftKey = 37;
  rightKey = 39;

  document.getElementById("choose_button_up").value = "ArrowUp";
  document.getElementById("choose_button_down").value = "ArrowDown";
  document.getElementById("choose_button_left").value = "ArrowLeft";
  document.getElementById("choose_button_right").value = "ArrowRight";

}


/* /////////////////////////////// ARROWS /////////////////////// */

// Get the button that opens the modal
var btnUp = document.getElementById("choose_button_up");
var btnDown = document.getElementById("choose_button_down");
var btnLeft = document.getElementById("choose_button_left");
var btnRight = document.getElementById("choose_button_right");
var btnApplySettings = document.getElementById("settings-btn-apply");

// settings variables
var upKey = 38;
var downKey = 40;
var leftKey = 37;
var rightKey = 39;


btnUp.onclick = function setKeyUp(){
  $(document).on('keydown',function(event){
      upKey = event.keyCode;
      document.getElementById("choose_button_up").value = event.key;
      $(document).off('keydown');
    })
}

btnDown.onclick = function setKeyDown(){
  $(document).on('keydown',function(event){
      downKey = event.keyCode;
      document.getElementById("choose_button_down").value = event.key;
      $(document).off('keydown');
    })
    
};
btnLeft.onclick = function setKeyLeft(){
  $(document).on('keydown',function(event){
      leftKey = event.keyCode;
      document.getElementById("choose_button_left").value = event.key;

      $(document).off('keydown');
    })
    
};
btnRight.onclick = function setKeyRight(){
  $(document).on('keydown',function(event){
      rightKey = event.keyCode;
      document.getElementById("choose_button_right").value = event.key;
      $(document).off('keydown');
    })
    
};

btnApplySettings.onclick = function validateSettings(){
  isValid = true
  let errMsgArrows = document.getElementById("arrows_settings_error_message");
  let errMsgBalls = document.getElementById("balls_settings_error_message");
  let errMsgTime = document.getElementById("time_settings_error_message");
  errMsgArrows.innerHTML = "";
  errMsgBalls.innerHTML = "";
  errMsgTime.innerHTML = "";
  if(gameTime < 60 || gameTime > 300 || !gameTime){
    errMsgTime.innerHTML ="*Time has to be more a number between 60 to 300 "
    isValid = false;
  }
  if(balls_color_5==balls_color_15 || balls_color_15==balls_color_25 ||  balls_color_5==balls_color_25){
    errMsgBalls.innerHTML = "*Balls must have different colors "
    isValid = false;
  }
  if(upKey == downKey || upKey == rightKey || upKey == leftKey || downKey == rightKey || downKey == leftKey || leftKey ==rightKey){
    errMsgArrows.innerHTML ="*Move buttons must be different keys " 
    isValid = false;
  }
  if(isValid){
    changePage(
      div_settings_login,
      div_game_login,
      anchor_settings,
      anchor_game,
      "game-login"
    )
  }

}

/* //////////////////////////////// GAME ////////////////////////////////// */
$(document).ready(function () {
  context = canvas.getContext("2d");
});


var monsterImg = new Image();
monsterImg.src = "./resources/monster.png";
function Start() {
  board = new Array();
  score = 0;
  pac_color = "yellow";
  
  var food_remain = numOfBalls;
  
  let ballsOptionsArr = []
  for(let i = 0; i<numOfBalls_5;i++){
    ballsOptionsArr.push(5);
  }
  for(let i = 0; i<numOfBalls_15;i++){
    ballsOptionsArr.push(15);
  }
  for(let i = 0; i<numOfBalls_25;i++){
    ballsOptionsArr.push(25);
  }
  start_time = new Date();
  for (var i = 0; i < 10; i++) {
    board[i] = new Array();
    //put obstacles in (i=3,j=3) and (i=3,j=4) and (i=3,j=5), (i=6,j=1) and (i=6,j=2)
    for (var j = 0; j < 10; j++) {
      if (
        (i == 3 && j == 3) ||
        (i == 3 && j == 4) ||
        (i == 3 && j == 5) ||
        (i == 6 && j == 1) ||
        (i == 6 && j == 2)
      ) {
        board[i][j] = 4;
      }
      else if((i==0 && j == 0 )|| (i== 9 && j == 0 ) || (i== 0 && j == 9 ) || (i== 9 && j == 9)){
        if(numOfMonsters > 0){
          board[i][j] = "M";
          numOfMonsters--;
        }
      }
      else{   
          board[i][j] = 0;
      }
      }
    }

  //}
  while (food_remain > 0) {
    var emptyCell = findRandomEmptyCell(board);
    food_remain--;
    indxBallToPut = Math.floor(Math.random() * ballsOptionsArr.length);
    if(ballsOptionsArr[indxBallToPut] == 5){
      board[emptyCell[0]][emptyCell[1]] = 5;
    }
    else if(ballsOptionsArr[indxBallToPut] == 15){
      board[emptyCell[0]][emptyCell[1]] = 15;  
    }
    else if (ballsOptionsArr[indxBallToPut] == 25){
      board[emptyCell[0]][emptyCell[1]] = 25;
    }
    ballsOptionsArr.splice(indxBallToPut,1);

  }

  emptyCell = findRandomEmptyCell(board);
  shape.i = emptyCell[0];
  shape.j = emptyCell[1];
  board[ emptyCell[0]][ emptyCell[1]] = 2;
  
  keysDown = {};
  addEventListener(
    "keydown",
    function (e) {
      keysDown[e.keyCode] = true;
    },
    false
  );
  addEventListener(
    "keyup",
    function (e) {
      keysDown[e.keyCode] = false;
    },
    false
  );
  interval = setInterval(UpdatePosition, 250);
}

function findRandomEmptyCell(board) {
  var i = Math.floor(Math.random() * 9 + 1);
  var j = Math.floor(Math.random() * 9 + 1);
  while (board[i][j] != 0) {
    i = Math.floor(Math.random() * 9 + 1);
    j = Math.floor(Math.random() * 9 + 1);
  }
  return [i, j];
}

function GetKeyPressed() {
  if (keysDown[38]) {
    return 1;
  }
  if (keysDown[40]) {
    return 2;
  }
  if (keysDown[37]) {
    return 3;
  }
  if (keysDown[39]) {
    return 4;
  }
}

function Draw() {
  canvas.width = canvas.width; //clean board
  lblScore.value = score;
  lblTime.value = time_elapsed;
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      var center = new Object();
      center.x = i * 60 + 30;
      center.y = j * 60 + 30;
      if (board[i][j] == 2) {
        context.beginPath();
        context.arc(center.x, center.y, 30, 0.15 * Math.PI, 1.85 * Math.PI); // half circle
        context.lineTo(center.x, center.y);
        context.fillStyle = pac_color; //color
        context.fill();
        context.beginPath();
        context.arc(center.x + 5, center.y - 15, 5, 0, 2 * Math.PI); // circle
        context.fillStyle = "black"; //color
        context.fill();
      }  else if (board[i][j] == 4) {
        context.beginPath();
        context.rect(center.x - 30, center.y - 30, 60, 60);
        context.fillStyle = "grey"; //color
        context.fill();
      }
      else if (board[i][j] == 5) {
        context.beginPath();
        context.arc(center.x, center.y, 15, 0, 2 * Math.PI); // circle
        context.fillStyle = balls_color_5; //color
        context.fill();
      }
      else if (board[i][j] == 15) {
        context.beginPath();
        context.arc(center.x, center.y, 15, 0, 2 * Math.PI); // circle
        context.fillStyle = balls_color_15; //color
        context.fill();
      }
      else if (board[i][j] == 25) {
        context.beginPath();
        context.arc(center.x, center.y, 15, 0, 2 * Math.PI); // circle
        context.fillStyle = balls_color_25; //color
        context.fill();
      }
      else if(board[i][j] == "M") {
        context.drawImage(monsterImg,center.x-30, center.y-30, 30, 30);
     }
    }
  } 
}

function UpdatePosition() {
  board[shape.i][shape.j] = 0;
  var x = GetKeyPressed();
  if (x == 1) {
    if (shape.j > 0 && board[shape.i][shape.j - 1] != 4) {
      shape.j--;
    }
  }
  if (x == 2) {
    if (shape.j < 9 && board[shape.i][shape.j + 1] != 4) {
      shape.j++;
    }
  }
  if (x == 3) {
    if (shape.i > 0 && board[shape.i - 1][shape.j] != 4) {
      shape.i--;
    }
  }
  if (x == 4) {
    if (shape.i < 9 && board[shape.i + 1][shape.j] != 4) {
      shape.i++;
    }
  }
  if (board[shape.i][shape.j] == 5) {
    score += 5;
  }
  if (board[shape.i][shape.j] == 15) {
    score += 15;
  }
  if (board[shape.i][shape.j] == 25) {
    score += 25;
  }
  board[shape.i][shape.j] = 2;
  var currentTime = new Date();
  time_elapsed = (currentTime - start_time) / 1000;
  if (score >= 20 && time_elapsed <= 10) {
    pac_color = "green";
  }
  if (score == 50) {
    window.clearInterval(interval);
    window.alert("Game completed");
  } else {
    Draw();
  }
}

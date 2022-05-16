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

class Result {
  constructor(username, score) {
    this.username = username;
    this.score = score;
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

// game divs
const div_looserPage = document.getElementById("gameOver");
const div_winnerPage = document.getElementById("gameWinner");
const div_lives = document.getElementById("lives_div");

// btn
const btn_signUp = document.getElementById("signup-btn");
const btn_login = document.getElementById("login-btn");
const btn_checkLogin = document.getElementById("checkLogin-btn");
const btn_logout = document.getElementById("logout-btn");

// images
// const img_monster_left = new Image();

/* Page Variables */
var currPage = "welcome";
var currUser = null;

// DB
var users = {};
users["k"] = new User("k", "k", "k", null, null);
var results = [];

/* Game Variables */
var context;
var pacman = new Object();
var board;
var score;
var pac_color;
var start_time;
var time_elapsed;
var intervalP;
var intervalM;
var monsters = [];
var boardSize = 20;
var numOfBalls;
var numOfBalls_5;
var numOfBalls_15;
var numOfBalls_25;
var balls_color_5;
var balls_color_15;
var balls_color_25;
var gameTime;
var monstersNum;
var lives = 5;
var gameStatus = "play";

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

  if (from_page === div_game_login) {
    clearAllIntervals();
  }

  currPage = caseName;
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
      setResults();
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
      setResults();
      changePage(div_welcome, div_top10, anchor_welcome, anchor_top10, "top10");
      break;
    case "settings":
      console.log("in top10!");
      setResults();
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
      setResults();
      changePage(
        div_settings_login,
        div_top10,
        anchor_settings,
        anchor_top10,
        "top10"
      );
      break;

    case "game":
      setResults();
      changePage(div_game, div_top10, anchor_game, anchor_top10, "top10");
      break;

    case "game-login":
      setResults();
      let divFrom;
      switch (gameStatus) {
        case "win":
          divFrom = div_winnerPage;
          break;
        case "lose":
          divFrom = div_looserPage;
          break;
        case "play":
          divFrom = div_game_login;
          break;
      }
      changePage(divFrom, div_top10, anchor_game, anchor_top10, "top10");
      break;

    case "about":
      console.log("in top10!");
      setResults();
      changePage(div_about, div_top10, anchor_about, anchor_top10, "top10");
      break;
    case "signUp":
      console.log("in top10!");
      setResults();
      changePage(div_signUp, div_top10, anchor_welcome, anchor_top10, "top10");
      break;
    case "login":
      console.log("in top10!");
      setResults();
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
      Start();
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
      Start();
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
      currUser == "game-login" ? Start() : null;
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
      currUser == "game-login" ? Start() : null;
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
    } else {
      usernameError = true;
      passwordError = true;
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

function setBallsAmount() {
  ballsAmountDisplayer.innerHTML = ballsSlider.value;
  numOfBalls = parseInt(ballsSlider.value);
  numOfBalls_5 = Math.floor(numOfBalls * 0.6);
  numOfBalls_15 = Math.floor(numOfBalls * 0.3);
  numOfBalls_25 = numOfBalls - numOfBalls_15 - numOfBalls_5;
}

// Set first values
setBallsAmount();

// Update the current slider value (each time you drag the slider handle)
ballsSlider.oninput = function () {
  setBallsAmount();
};

////////////// COLOR PICKER /////////////////
var colorPicker5 = document.getElementById("5colorpicker");
var colorPicker15 = document.getElementById("15colorpicker");
var colorPicker25 = document.getElementById("25colorpicker");
// default
balls_color_5 = colorPicker5.value;
balls_color_15 = colorPicker15.value;
balls_color_25 = colorPicker25.value;

colorPicker5.onchange = function () {
  balls_color_5 = colorPicker5.value;
};
colorPicker15.onchange = function () {
  balls_color_15 = colorPicker15.value;
};
colorPicker25.onchange = function () {
  balls_color_25 = colorPicker25.value;
};

////////////// TIME AMOUNT /////////////////
var gameTimerPicker = document.getElementById("game_timer_picker");
gameTime = parseInt(gameTimerPicker.value);
gameTimerPicker.oninput = function (e) {
  if (!isNaN(gameTimerPicker.value)) {
    gameTime = parseInt(gameTimerPicker.value);
  } else {
    gameTime = NaN;
  }
};

/////////////// MONSTERS AMOUNT /////////////
var monstersSlider = document.getElementById("monstersAmountRange");
var monstersAmountDisplayer = document.getElementById(
  "display-monsters-amount"
);
// Set first values
monstersAmountDisplayer.innerHTML = monstersSlider.value;
numOfMonsters = parseInt(monstersSlider.value);
// Update the current slider value (each time you drag the slider handle)
monstersSlider.oninput = function () {
  monstersAmountDisplayer.innerHTML = this.value;
  numOfMonsters = parseInt(this.value);
};

////////////// RANDOM //////////////
var btn_random = document.getElementById("randomPicker");
btn_random.onclick = function () {
  // set num of balls
  ballsSlider.value = Math.floor(Math.random() * (90 - 50)) + 50;
  setBallsAmount();

  // set num of monsters
  monstersSlider.value = Math.floor(Math.random() * (4 - 1)) + 1;
  numOfMonsters = parseInt(monstersSlider.value);
  monstersAmountDisplayer.innerHTML = monstersSlider.value;

  // set time
  gameTime = Math.floor(Math.random() * (300 - 60)) + 60;
  gameTimerPicker.value = gameTime;

  // set colors
  balls_color_5 = "#" + Math.floor(Math.random() * 16777215).toString(16);
  balls_color_15 = "#" + Math.floor(Math.random() * 16777215).toString(16);
  balls_color_25 = "#" + Math.floor(Math.random() * 16777215).toString(16);

  balls_color_5 = balls_color_5.padEnd(7, "f");
  balls_color_15 = balls_color_15.padEnd(7, "f");
  balls_color_25 = balls_color_25.padEnd(7, "f");

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
};

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

btnUp.onclick = function setKeyUp() {
  $(document).on("keydown", function (event) {
    upKey = event.keyCode;
    document.getElementById("choose_button_up").value = event.key;
    $(document).off("keydown");
  });
};

btnDown.onclick = function setKeyDown() {
  $(document).on("keydown", function (event) {
    downKey = event.keyCode;
    document.getElementById("choose_button_down").value = event.key;
    $(document).off("keydown");
  });
};
btnLeft.onclick = function setKeyLeft() {
  $(document).on("keydown", function (event) {
    leftKey = event.keyCode;
    document.getElementById("choose_button_left").value = event.key;

    $(document).off("keydown");
  });
};
btnRight.onclick = function setKeyRight() {
  $(document).on("keydown", function (event) {
    rightKey = event.keyCode;
    document.getElementById("choose_button_right").value = event.key;
    $(document).off("keydown");
  });
};

//////////////// APPLY BUTTON /////////////////

btnApplySettings.onclick = function validateSettings() {
  isValid = true;
  let errMsgArrows = document.getElementById("arrows_settings_error_message");
  let errMsgBalls = document.getElementById("balls_settings_error_message");
  let errMsgTime = document.getElementById("time_settings_error_message");
  errMsgArrows.innerHTML = "";
  errMsgBalls.innerHTML = "";
  errMsgTime.innerHTML = "";
  if (gameTime < 60 || gameTime > 300 || !gameTime) {
    errMsgTime.innerHTML = "*Time has to be more a number between 60 to 300";
    isValid = false;
  }
  if (
    balls_color_5 == balls_color_15 ||
    balls_color_15 == balls_color_25 ||
    balls_color_5 == balls_color_25
  ) {
    errMsgBalls.innerHTML = "*Balls must have different colors";
    isValid = false;
  }
  if (
    upKey == downKey ||
    upKey == rightKey ||
    upKey == leftKey ||
    downKey == rightKey ||
    downKey == leftKey ||
    leftKey == rightKey
  ) {
    errMsgArrows.innerHTML = "*Move buttons must be different keys";
    isValid = false;
  }
  if (isValid) {
    changePage(
      div_settings_login,
      div_game_login,
      anchor_settings,
      anchor_game,
      "game-login"
    );
    Start();
  }
};

/* //////////////////////////////// GAME ////////////////////////////////// */
$(document).ready(function () {
  context = canvas.getContext("2d");
});

var monsterImgs = [new Image(), new Image(), new Image(), new Image()];
for (let i = 0; i < monsterImgs.length; i++) {
  monsterImgs[i].src = "./resources/monster-left.png";
}

var specialMonsterImg = [new Image(), new Image()];
specialMonsterImg[0].src = "./resources/special-monster-left.jpg";
specialMonsterImg[1].src = "./resources/special-monster-right.jpg";
var specialMonster = new Object();
specialMonster.i = boardSize / 2;
specialMonster.j = boardSize / 2;
specialMonster.points = 50;
specialMonster.wasEaten = false;
specialMonster.direction = 0;

var pacmanImgs = [new Image(), new Image(), new Image(), new Image()]; // 0-left, 1-up, 2-right, 3-down
pacmanImgs[0].src = "./resources/PacManLeft.png";
pacmanImgs[1].src = "./resources/PacManUp.png";
pacmanImgs[2].src = "./resources/PacManRight.png";
pacmanImgs[3].src = "./resources/PacManDown.png";
pacman.direction = 0;

var clockImg = new Image();
clockImg.src = "./resources/clock.jpg";
var clock = new Object();
clock.addTime = 30;
clock.i = 0; // just to set fields first
clock.j = 0;
clock.wasEaten = false;

var extraLifeImg = new Image();
extraLifeImg.src = "./resources/heart.jpg";
var extraLife = new Object();
extraLife.i = boardSize - 1;
extraLife.j = boardSize - 1;
extraLife.wasEaten = false;

var backgroundMusic = document.createElement("audio");
backgroundMusic.src = "./resources/music.mp3";
backgroundMusic.loop = true;

function showGameSettings() {
  document.getElementById(
    "gamePlayerMsg"
  ).innerHTML = `Hey ${currUser.name}, Let's Play Pacman!`;

  // buttons
  document.getElementById("gameSettings-choose_button_up").value =
    document.getElementById("choose_button_up").value;

  document.getElementById("gameSettings-choose_button_down").value =
    document.getElementById("choose_button_down").value;

  document.getElementById("gameSettings-choose_button_left").value =
    document.getElementById("choose_button_left").value;

  document.getElementById("gameSettings-choose_button_right").value =
    document.getElementById("choose_button_right").value;

  // total balls
  document.getElementById("gameSettings-ballsAmountRange").value =
    document.getElementById("ballsAmountRange").value;

  document.getElementById("gameSettings-balls-amount").innerHTML =
    document.getElementById("display-balls-amount").innerHTML;

  // balls colors
  document.getElementById("gameSettings-5colorpicker").value =
    document.getElementById("5colorpicker").value;

  document.getElementById("gameSettings-15colorpicker").value =
    document.getElementById("15colorpicker").value;

  document.getElementById("gameSettings-25colorpicker").value =
    document.getElementById("25colorpicker").value;

  // game time
  document.getElementById("gameSettings-time").value =
    document.getElementById("game_timer_picker").value;

  // amount of monsters
  document.getElementById("gameSettings-monsters").value =
    document.getElementById("monstersAmountRange").value;

  document.getElementById("gameSettings-monsters-count").innerHTML =
    document.getElementById("display-monsters-amount").innerHTML;
}

function Start() {
  gameStatus = "play";

  backgroundMusic.play();
  score = 0;
  lives = 5;
  let htmlLive = `
      <img src="resources/heart.jpg" style="display: inline; width: 30px" />
      `;
  while (div_lives.children.length <= lives) {
    $("#lives_div").append(htmlLive);
  }
  showGameSettings();

  board = new Array();

  pac_color = "yellow";
  monsters = [];
  var num_m = numOfMonsters;
  var food_remain = numOfBalls;
  let ballsOptionsArr = [];
  for (let i = 0; i < numOfBalls_5; i++) {
    ballsOptionsArr.push(5);
  }
  for (let i = 0; i < numOfBalls_15; i++) {
    ballsOptionsArr.push(15);
  }
  for (let i = 0; i < numOfBalls_25; i++) {
    ballsOptionsArr.push(25);
  }
  start_time = new Date();
  for (var i = 0; i < boardSize; i++) {
    board[i] = new Array();
    //put obstacles in (i=3,j=3) and (i=3,j=4) and (i=3,j=5), (i=6,j=1) and (i=6,j=2)
    for (var j = 0; j < boardSize; j++) {
      if (
        (i == 4 && j == 4) ||
        (i == 4 && j == 15) ||
        (i == 15 && j == 15) ||
        (i == 15 && j == 4) ||
        (i == 7 && j == 7) ||
        (i == 7 && j == 12) ||
        (i == 12 && j == 12) ||
        (i == 12 && j == 7)
      ) {
        board[i][j] = 4;
      } else if (
        (i == 0 && j == 0) ||
        (i == boardSize - 1 && j == 0) ||
        (i == 0 && j == boardSize - 1) ||
        (i == boardSize - 1 && j == boardSize - 1)
      ) {
        board[i][j] = 0;
        if (num_m > 0) {
          num_m--;
          let newMonster = new Object();
          newMonster.i = i;
          newMonster.j = j;
          monsters.push(newMonster);
        }
      } else {
        board[i][j] = 0;
      }
    }
  }

  while (food_remain > 0) {
    var emptyCell = findRandomEmptyCell(board);
    food_remain--;
    indxBallToPut = Math.floor(Math.random() * ballsOptionsArr.length);
    if (ballsOptionsArr[indxBallToPut] == 5) {
      board[emptyCell[0]][emptyCell[1]] = 5;
    } else if (ballsOptionsArr[indxBallToPut] == 15) {
      board[emptyCell[0]][emptyCell[1]] = 15;
    } else if (ballsOptionsArr[indxBallToPut] == 25) {
      board[emptyCell[0]][emptyCell[1]] = 25;
    }
    ballsOptionsArr.splice(indxBallToPut, 1);
  }

  emptyCell = findRandomEmptyCell(board);
  pacman.i = emptyCell[0];
  pacman.j = emptyCell[1];
  board[emptyCell[0]][emptyCell[1]] = 2;

  keysDown = {};
  addEventListener(
    "keydown",
    function (e) {
      if ([leftKey, rightKey, upKey, downKey].includes(e.keyCode)) {
        e.preventDefault();
      }
      keysDown[e.keyCode] = true;
    },
    false
  );
  addEventListener(
    "keyup",
    function (e) {
      if ([leftKey, rightKey, upKey, downKey].includes(e.keyCode)) {
        e.preventDefault();
      }
      keysDown[e.keyCode] = false;
    },
    false
  );
  intervalP = setInterval(function () {
    UpdatePosition();
    if (!specialMonster.wasEaten) {
      UpdatePositionSpecialMonster();
    }
    Draw();
    checkGameOver();
  }, 150);

  intervalM = setInterval(function () {
    UpdatePositionMonster();
  }, 350);

  intervalFeatures = setInterval(function () {
    UpdatePositionFeatures();
  }, 5000);
}

function findRandomEmptyCell(board) {
  var i = Math.floor(Math.random() * boardSize - 1 + 1);
  var j = Math.floor(Math.random() * boardSize - 1 + 1);
  while (board[i][j] != 0) {
    i = Math.floor(Math.random() * boardSize - 1 + 1);
    j = Math.floor(Math.random() * boardSize - 1 + 1);
  }
  return [i, j];
}

function GetKeyPressed() {
  if (keysDown[upKey]) {
    return 1;
  }
  if (keysDown[downKey]) {
    return 2;
  }
  if (keysDown[leftKey]) {
    return 3;
  }
  if (keysDown[rightKey]) {
    return 4;
  }
}

function Draw() {
  canvas.width = canvas.width; //clean board
  lblScore.value = score;
  lblTime.value = Math.ceil(gameTime - time_elapsed);

  for (var i = 0; i < boardSize; i++) {
    for (var j = 0; j < boardSize; j++) {
      var center = new Object();
      center.x = i * (600 / boardSize) + 600 / (boardSize * 2);
      center.y = j * (600 / boardSize) + 600 / (boardSize * 2);
      if (board[i][j] == 2) {
        /////////////////////////////// check if we can put picture
        context.drawImage(
          pacmanImgs[pacman.direction],
          center.x - 600 / (boardSize * 2),
          center.y - 600 / (boardSize * 2),
          600 / boardSize,
          600 / boardSize
        );
        // context.beginPath();
        // context.arc(
        //   center.x,
        //   center.y,
        //   600 / (boardSize * 2),
        //   0.15 * Math.PI,
        //   1.85 * Math.PI
        // ); // half circle
        // context.lineTo(center.x, center.y);
        // context.fillStyle = pac_color; //color
        // context.fill();
        // context.beginPath();
        // context.arc(
        //   center.x + 2,
        //   center.y - 600 / (boardSize * 4),
        //   2,
        //   0,
        //   2 * Math.PI
        // ); // circle
        // context.fillStyle = "black"; //color
        // context.fill();
      } else if (board[i][j] == 4) {
        context.beginPath();
        context.rect(
          center.x - 600 / (boardSize * 2),
          center.y - 600 / (boardSize * 2),
          600 / boardSize,
          600 / boardSize
        );
        context.fillStyle = "grey"; //color
        context.fill();
      } else if (board[i][j] == 5) {
        context.beginPath();
        context.arc(center.x, center.y, 600 / (boardSize * 4), 0, 2 * Math.PI); // circle
        context.fillStyle = balls_color_5; //color
        context.fill();
      } else if (board[i][j] == 15) {
        context.beginPath();
        context.arc(center.x, center.y, 600 / (boardSize * 4), 0, 2 * Math.PI); // circle
        context.fillStyle = balls_color_15; //color
        context.fill();
      } else if (board[i][j] == 25) {
        context.beginPath();
        context.arc(center.x, center.y, 600 / (boardSize * 4), 0, 2 * Math.PI); // circle
        context.fillStyle = balls_color_25; //color
        context.fill();
      }
    }
  }

  for (let k = 0; k < monsters.length; k++) {
    let monsterCenter = new Object();
    monsterCenter.x = (monsters[k].i * 600) / boardSize + 600 / (boardSize * 2);
    monsterCenter.y = (monsters[k].j * 600) / boardSize + 600 / (boardSize * 2);
    context.drawImage(
      monsterImgs[k],
      monsterCenter.x - 600 / (boardSize * 2),
      monsterCenter.y - 600 / (boardSize * 2),
      600 / boardSize,
      600 / boardSize
    );
  }

  if (!specialMonster.wasEaten) {
    let specialMonsterCenter = new Object();
    specialMonsterCenter.x =
      (specialMonster.i * 600) / boardSize + 600 / (boardSize * 2);
    specialMonsterCenter.y =
      (specialMonster.j * 600) / boardSize + 600 / (boardSize * 2);

    context.drawImage(
      specialMonsterImg[specialMonster.direction],
      specialMonsterCenter.x - 600 / (boardSize * 2),
      specialMonsterCenter.y - 600 / (boardSize * 2),
      600 / boardSize,
      600 / boardSize
    );
  }

  if (!clock.wasEaten) {
    let speciaClockCenter = new Object();
    speciaClockCenter.x = (clock.i * 600) / boardSize + 600 / (boardSize * 2);
    speciaClockCenter.y = (clock.j * 600) / boardSize + 600 / (boardSize * 2);

    context.drawImage(
      clockImg,
      speciaClockCenter.x - 600 / (boardSize * 2),
      speciaClockCenter.y - 600 / (boardSize * 2),
      600 / boardSize,
      600 / boardSize
    );
  }

  if (!extraLife.wasEaten) {
    let extraLifeCenter = new Object();
    extraLifeCenter.x = (extraLife.i * 600) / boardSize + 600 / (boardSize * 2);
    extraLifeCenter.y = (extraLife.j * 600) / boardSize + 600 / (boardSize * 2);

    context.drawImage(
      extraLifeImg,
      extraLifeCenter.x - 600 / (boardSize * 2),
      extraLifeCenter.y - 600 / (boardSize * 2),
      600 / boardSize,
      600 / boardSize
    );
  }
}

function checkGameOver() {
  for (let k = 0; k < monsters.length; k++) {
    if (monsters[k].i == pacman.i && monsters[k].j == pacman.j) {
      lives--;
      div_lives.removeChild(div_lives.lastElementChild);
      score -= 10;
      if (lives > 0) {
        // need to respawn monsters and pacman
        board[pacman.i][pacman.j] = 0;
        emptyCell = findRandomEmptyCell(board);
        pacman.i = emptyCell[0];
        pacman.j = emptyCell[1];
        board[emptyCell[0]][emptyCell[1]] = 2;

        monsters[0].i = 0;
        monsters[0].j = 0;
        if (numOfMonsters > 1) {
          monsters[1].i = 0;
          monsters[1].j = boardSize - 1;
        }
        if (numOfMonsters > 2) {
          monsters[2].i = boardSize - 1;
          monsters[2].j = 0;
        }
        if (numOfMonsters > 3) {
          monsters[3].i = boardSize - 1;
          monsters[3].j = boardSize - 1;
        }
        break;
      }
    }
  }

  let p_loseGame = document.getElementById("loseMsg");
  if (
    gameTime <= time_elapsed ||
    (numOfBalls == 0 && specialMonster.wasEaten)
  ) {
    if (score >= 100) {
      gameStatus = "win";
      clearAllIntervals();
      storeResult();
      changePage(div_game_login, div_winnerPage, null, null, "game-login");
    } else {
      gameStatus = "lose";
      p_loseGame.innerHTML = "You are better than " + score + " points!";

      clearAllIntervals();
      storeResult();
      changePage(div_game_login, div_looserPage, null, null, "game-login");
    }
  } else if (lives <= 0) {
    gameStatus = "lose";
    p_loseGame.innerHTML = "Loser!";

    clearAllIntervals();
    storeResult();
    changePage(div_game_login, div_looserPage, null, null, "game-login");
  }
}

function checkIfMonsterHere(i, j) {
  for (let k = 0; k < monsters.length; k++) {
    if (monsters[k].i == i && monsters[k].j == j) {
      return true;
    }
  }
  return false;
}

function getPossibleMoves(monI, monJ) {
  let possMoves = [0, 0, 0, 0];
  if (
    monI - 1 >= 0 &&
    !checkIfMonsterHere(monI - 1, monJ) &&
    board[monI - 1][monJ] != 4
  ) {
    // Up
    possMoves[0] = [monI - 1, monJ];
  }
  if (
    monI + 1 <= boardSize - 1 &&
    !checkIfMonsterHere(monI + 1, monJ) &&
    board[monI + 1][monJ] != 4
  ) {
    // Down
    possMoves[1] = [monI + 1, monJ];
  }
  if (
    monJ - 1 >= 0 &&
    !checkIfMonsterHere(monI, monJ - 1) &&
    board[monI][monJ - 1] != 4
  ) {
    // Left
    possMoves[2] = [monI, monJ - 1];
  }
  if (
    monJ + 1 <= boardSize - 1 &&
    !checkIfMonsterHere(monI, monJ + 1) &&
    board[monI][monJ + 1] != 4
  ) {
    // Right
    possMoves[3] = [monI, monJ + 1];
  }
  return possMoves;
}

function setMonsterMove(monI, monJ, difI, difJ, monsters, k) {
  possMoves = getPossibleMoves(monI, monJ);
  if (Math.abs(difI) <= Math.abs(difJ)) {
    // move if Y axis
    if (difI > 0) {
      monsterImgs[k].src = "./resources/monster-left.png";
      // move up
      if (possMoves[0]) {
        monsters[k].i -= 1;
      } else {
        for (let p = 0; p < 4; p++) {
          if (possMoves[p]) {
            monsters[k].i = possMoves[p][0];
            monsters[k].j = possMoves[p][1];
            break;
          }
        }
      }
    } else if (difI < 0) {
      monsterImgs[k].src = "./resources/monster-right.png";
      // move down
      if (possMoves[1]) {
        monsters[k].i += 1;
      } else {
        for (let p = 0; p < 4; p++) {
          if (possMoves[p]) {
            monsters[k].i = possMoves[p][0];
            monsters[k].j = possMoves[p][1];
            break;
          }
        }
      }
    } else {
      if (difJ > 0) {
        // move left
        if (possMoves[2]) {
          monsters[k].j -= 1;
        } else {
          for (let p = 0; p < 4; p++) {
            if (possMoves[p]) {
              monsters[k].i = possMoves[p][0];
              monsters[k].j = possMoves[p][1];
              break;
            }
          }
        }
      } else if (difJ < 0) {
        // move right
        if (possMoves[3]) {
          monsters[k].j += 1;
        } else {
          for (let p = 0; p < 4; p++) {
            if (possMoves[p]) {
              monsters[k].i = possMoves[p][0];
              monsters[k].j = possMoves[p][1];
              break;
            }
          }
        }
      }
    }
  } else {
    if (difJ > 0) {
      // move left
      if (possMoves[2]) {
        monsters[k].j -= 1;
      } else {
        for (let p = 0; p < 4; p++) {
          if (possMoves[p]) {
            monsters[k].i = possMoves[p][0];
            monsters[k].j = possMoves[p][1];
            break;
          }
        }
      }
    } else if (difJ < 0) {
      // move right

      if (possMoves[3]) {
        monsters[k].j += 1;
      } else {
        for (let p = 0; p < 4; p++) {
          if (possMoves[p]) {
            monsters[k].i = possMoves[p][0];
            monsters[k].j = possMoves[p][1];
            break;
          }
        }
      }
    } else {
      if (difI > 0) {
        // move up
        monsterImgs[k].src = "./resources/monster-left.png";
        if (possMoves[0]) {
          monsters[k].i -= 1;
        } else {
          for (let p = 0; p < 4; p++) {
            if (possMoves[p]) {
              monsters[k].i = possMoves[p][0];
              monsters[k].j = possMoves[p][1];
              break;
            }
          }
        }
      } else if (difI < 0) {
        // move down
        monsterImgs[k].src = "./resources/monster-right.png";
        if (possMoves[1]) {
          monsters[k].i += 1;
        } else {
          for (let p = 0; p < 4; p++) {
            if (possMoves[p]) {
              monsters[k].i = possMoves[p][0];
              monsters[k].j = possMoves[p][1];
              break;
            }
          }
        }
      }
    }
  }
}
function UpdatePositionSpecialMonster() {
  possMoves = getPossibleMoves(specialMonster.i, specialMonster.j);
  let step = Math.floor(Math.random() * possMoves.length);
  while (possMoves[step] == 0) {
    step = Math.floor(Math.random() * possMoves.length);
  }
  if (step == 2) {
    specialMonster.direction = 0;
  } else if (step == 3) {
    specialMonster.direction = 1;
  }
  specialMonster.i = possMoves[step][0];
  specialMonster.j = possMoves[step][1];
}

function UpdatePositionMonster() {
  let pacI = pacman.i;
  let pacJ = pacman.j;
  for (let k = 0; k < monsters.length; k++) {
    let monI = monsters[k].i;
    let monJ = monsters[k].j;
    let difI = monI - pacI;
    let difJ = monJ - pacJ;

    setMonsterMove(monI, monJ, difI, difJ, monsters, k);
  }
}

function UpdatePositionFeatures() {
  if (!clock.wasEaten) {
    let cell = findRandomEmptyCell(board);
    clock.i = cell[0];
    clock.j = cell[1];
  }
  let cell = findRandomEmptyCell(board);
  extraLife.i = cell[0];
  extraLife.j = cell[1];
}
function UpdatePosition() {
  board[pacman.i][pacman.j] = 0;
  var x = GetKeyPressed();
  if (x == 1) {
    if (pacman.j > 0 && board[pacman.i][pacman.j - 1] != 4) {
      pacman.j--;
      pacman.direction = 1;
    }
  }
  if (x == 2) {
    if (pacman.j < boardSize - 1 && board[pacman.i][pacman.j + 1] != 4) {
      pacman.j++;
      pacman.direction = 3;
    }
  }
  if (x == 3) {
    if (pacman.i > 0 && board[pacman.i - 1][pacman.j] != 4) {
      pacman.i--;
      pacman.direction = 0;
    }
  }
  if (x == 4) {
    if (pacman.i < boardSize - 1 && board[pacman.i + 1][pacman.j] != 4) {
      pacman.i++;
      pacman.direction = 2;
    }
  }
  if (board[pacman.i][pacman.j] == 5) {
    score += 5;
    numOfBalls--;
  }
  if (board[pacman.i][pacman.j] == 15) {
    score += 15;
    numOfBalls--;
  }
  if (board[pacman.i][pacman.j] == 25) {
    score += 25;
    numOfBalls--;
  }
  if (
    !specialMonster.wasEaten &&
    pacman.i == specialMonster.i &&
    pacman.j == specialMonster.j
  ) {
    score += specialMonster.points;
    specialMonster.wasEaten = true;
  }

  if (!clock.wasEaten && pacman.i == clock.i && pacman.j == clock.j) {
    gameTime += clock.addTime;
    clock.wasEaten = true;
  }

  if (
    !extraLife.wasEaten &&
    pacman.i == extraLife.i &&
    pacman.j == extraLife.j
  ) {
    lives += 1;
    extraLife.wasEaten = true;
    let htmlLive = `
    <img src="resources/heart.jpg" style="display: inline; width: 30px" />
    `;

    $("#lives_div").append(htmlLive);
  }

  board[pacman.i][pacman.j] = 2;
  var currentTime = new Date();
  time_elapsed = (currentTime - start_time) / 1000;
}

function saveResultAndRestartGame() {
  results.push(new Result(currUser.username, score));
  switch (gameStatus) {
    case "win":
      changePage(
        div_winnerPage,
        div_settings_login,
        anchor_game,
        anchor_settings,
        "settings-login"
      );
      break;
    case "lose":
      changePage(
        div_looserPage,
        div_settings_login,
        anchor_game,
        anchor_settings,
        "settings-login"
      );
      break;
  }
}

function clearAllIntervals() {
  window.clearInterval(intervalP);
  window.clearInterval(intervalM);
  window.clearInterval(intervalFeatures);
  backgroundMusic.pause();
}

function storeResult() {
  results.push(new Result(currUser.username, score));
  results.sort((a, b) => b.score - a.score);
  results = results.splice(0, 10);
}

function setResults() {
  $("#bodyTable").children().remove();
  let tableBody = document.getElementById("bodyTable");

  for (let i = 0; i < results.length; i++) {
    let row = tableBody.insertRow(-1);

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);

    cell1.innerHTML = results[i].username;
    cell2.innerHTML = results[i].score;
  }
}

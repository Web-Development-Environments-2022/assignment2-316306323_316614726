/* Page Variables */
var currPage = "welcome";

// anchors nav bar
const anchor_welcome = document.getElementById("welcome_a");
const anchor_settings = document.getElementById("settings_a");
const anchor_game = document.getElementById("game_a");
const anchor_about = document.getElementById("about_a");

// divs
const div_welcome = document.getElementById("welcome_div");
const div_game = document.getElementById("game_div");
const div_signUp = document.getElementById("signup_div");
const div_login = document.getElementById("login_div");
const div_settings = document.getElementById("settings_div");
const div_about = document.getElementById("about_div");

// btn
const btn_signUp = document.getElementById("signup-btn");
const btn_login = document.getElementById("login-btn");

/* Game Variables */
var context;
var shape = new Object();
var board;
var score;
var pac_color;
var start_time;
var time_elapsed;
var interval;

/* ////////////////////////////////  NAV PAGES ////////////////////////////////// */
anchor_welcome.addEventListener("click", function () {
  switch (currPage) {
    case "welcome":
      console.log("in welcome!");
      break;
    case "settings":
      console.log("in welcome!");
      div_settings.classList.toggle("hide");
      div_welcome.classList.toggle("hide");

      anchor_settings.classList.toggle("active");
      anchor_welcome.classList.toggle("active");
      currPage = "welcome";
      break;
    case "game":
      console.log("in welcome!");
      div_game.classList.toggle("hide");
      div_welcome.classList.toggle("hide");

      anchor_game.classList.toggle("active");
      anchor_welcome.classList.toggle("active");
      currPage = "welcome";
      break;
    case "about":
      console.log("in welcome!");
      div_about.classList.toggle("hide");
      div_welcome.classList.toggle("hide");

      anchor_about.classList.toggle("active");
      anchor_welcome.classList.toggle("active");
      currPage = "welcome";
      break;
    case "signUp":
      console.log("in welcome!");
      div_signUp.classList.toggle("hide");
      div_welcome.classList.toggle("hide");
      currPage = "welcome";
      break;
    case "login":
      console.log("in welcome!");
      div_login.classList.toggle("hide");
      div_welcome.classList.toggle("hide");
      currPage = "welcome";
      break;
  }
});
anchor_settings.addEventListener("click", function () {
  switch (currPage) {
    case "welcome":
      console.log("in settings!");
      div_welcome.classList.toggle("hide");
      div_settings.classList.toggle("hide");

      anchor_welcome.classList.toggle("active");
      anchor_settings.classList.toggle("active");
      currPage = "settings";
      break;
    case "settings":
      console.log("still in settings!");
      break;
    case "game":
      console.log("in settings!");
      div_game.classList.toggle("hide");
      div_settings.classList.toggle("hide");

      anchor_game.classList.toggle("active");
      anchor_settings.classList.toggle("active");
      currPage = "settings";
      break;
    case "about":
      console.log("in settings!");
      div_about.classList.toggle("hide");
      div_settings.classList.toggle("hide");

      anchor_about.classList.toggle("active");
      anchor_settings.classList.toggle("active");
      currPage = "settings";
      break;
    case "signUp":
      console.log("in settings!");
      div_signUp.classList.toggle("hide");
      div_settings.classList.toggle("hide");
      currPage = "settings";
      break;
    case "login":
      console.log("in settings!");
      div_login.classList.toggle("hide");
      div_settings.classList.toggle("hide");
      currPage = "settings";
      break;
  }
});
anchor_game.addEventListener("click", function () {
  switch (currPage) {
    case "welcome":
      console.log("in game!");
      div_welcome.classList.toggle("hide");
      div_game.classList.toggle("hide");

      anchor_game.classList.toggle("active");
      anchor_welcome.classList.toggle("active");
      currPage = "game";
      break;
    case "settings":
      console.log("in game!");
      div_settings.classList.toggle("hide");
      div_game.classList.toggle("hide");

      anchor_settings.classList.toggle("active");
      anchor_game.classList.toggle("active");
      currPage = "game";
      break;
    case "game":
      console.log("still in game!");

      break;
    case "about":
      console.log("in settings!");
      div_about.classList.toggle("hide");
      div_game.classList.toggle("hide");

      anchor_about.classList.toggle("active");
      anchor_game.classList.toggle("active");
      currPage = "game";
      break;
    case "signUp":
      console.log("in settings!");
      div_signUp.classList.toggle("hide");
      div_game.classList.toggle("hide");
      currPage = "game";
      break;
    case "login":
      console.log("in settings!");
      div_login.classList.toggle("hide");
      div_game.classList.toggle("hide");
      currPage = "game";
      break;
  }
});
anchor_about.addEventListener("click", function () {
  switch (currPage) {
    case "welcome":
      console.log("in about!");
      div_welcome.classList.toggle("hide");
      div_about.classList.toggle("hide");

      anchor_welcome.classList.toggle("active");
      anchor_about.classList.toggle("active");
      currPage = "about";
      break;
    case "settings":
      console.log("in about!");
      div_settings.classList.toggle("hide");
      div_about.classList.toggle("hide");

      anchor_settings.classList.toggle("active");
      anchor_about.classList.toggle("active");
      currPage = "about";
      break;
    case "game":
      console.log("in about!");
      div_game.classList.toggle("hide");
      div_about.classList.toggle("hide");

      anchor_game.classList.toggle("active");
      anchor_about.classList.toggle("active");
      currPage = "about";
      break;
    case "about":
      console.log("still in about!");
      break;
    case "signUp":
      console.log("in about!");
      div_signUp.classList.toggle("hide");
      div_about.classList.toggle("hide");
      currPage = "about";
      break;
    case "login":
      console.log("in about!");
      div_login.classList.toggle("hide");
      div_about.classList.toggle("hide");
      currPage = "about";
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
    let s = email.value;
    if (regex.test(s)) {
      $("#confemail").hide();
      emailError = true;
    } else {
      $("#confemail").show();
      emailError = false;
    }
  });

  // Validate Password
  $("#passcheck").hide();
  let passwordError = true;
  $("#form_pass").keyup(function () {
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
  $("#btn_submit").click(function () {
    validateUsername();
    validatePassword();
    validateConfirmPassword();
    validateEmail();
    validateName();
    if (
      usernameError == true &&
      passwordError == true &&
      confirmPasswordError == true &&
      emailError == true &&
      nameError == true
    ) {
      return true;
    } else {
      return false;
    }
  });
});

//   $(document).on("click", "form button[type=submit]", function (e) {
//     var signUpForm = $(e.target).parents("form");
//     var isValid = isFormValid(signUpForm);
//     if (!isValid) {
//       e.preventDefault(); //prevent the default action
//     }
//   });

// /* ////////////////////////////////  LOGIN ////////////////////////////////// */
// btn_login.addEventListener("click", function () {
//   console.log("in login!");
//   div_welcome.classList.toggle("hide");
//   div_login.classList.toggle("hide");
//   currPage = "signUp";
// });
/* //////////////////////////////// GAME ////////////////////////////////// */

// $(document).ready(function() {
// 	context = canvas.getContext("2d");
// 	Start();
// });

// function Start() {
// 	board = new Array();
// 	score = 0;
// 	pac_color = "yellow";
// 	var cnt = 100;
// 	var food_remain = 50;
// 	var pacman_remain = 1;
// 	start_time = new Date();
// 	for (var i = 0; i < 10; i++) {
// 		board[i] = new Array();
// 		//put obstacles in (i=3,j=3) and (i=3,j=4) and (i=3,j=5), (i=6,j=1) and (i=6,j=2)
// 		for (var j = 0; j < 10; j++) {
// 			if (
// 				(i == 3 && j == 3) ||
// 				(i == 3 && j == 4) ||
// 				(i == 3 && j == 5) ||
// 				(i == 6 && j == 1) ||
// 				(i == 6 && j == 2)
// 			) {
// 				board[i][j] = 4;
// 			} else {
// 				var randomNum = Math.random();
// 				if (randomNum <= (1.0 * food_remain) / cnt) {
// 					food_remain--;
// 					board[i][j] = 1;
// 				} else if (randomNum < (1.0 * (pacman_remain + food_remain)) / cnt) {
// 					shape.i = i;
// 					shape.j = j;
// 					pacman_remain--;
// 					board[i][j] = 2;
// 				} else {
// 					board[i][j] = 0;
// 				}
// 				cnt--;
// 			}
// 		}
// 	}
// 	while (food_remain > 0) {
// 		var emptyCell = findRandomEmptyCell(board);
// 		board[emptyCell[0]][emptyCell[1]] = 1;
// 		food_remain--;
// 	}
// 	keysDown = {};
// 	addEventListener(
// 		"keydown",
// 		function(e) {
// 			keysDown[e.keyCode] = true;
// 		},
// 		false
// 	);
// 	addEventListener(
// 		"keyup",
// 		function(e) {
// 			keysDown[e.keyCode] = false;
// 		},
// 		false
// 	);
// 	interval = setInterval(UpdatePosition, 250);
// }

// function findRandomEmptyCell(board) {
// 	var i = Math.floor(Math.random() * 9 + 1);
// 	var j = Math.floor(Math.random() * 9 + 1);
// 	while (board[i][j] != 0) {
// 		i = Math.floor(Math.random() * 9 + 1);
// 		j = Math.floor(Math.random() * 9 + 1);
// 	}
// 	return [i, j];
// }

// function GetKeyPressed() {
// 	if (keysDown[38]) {
// 		return 1;
// 	}
// 	if (keysDown[40]) {
// 		return 2;
// 	}
// 	if (keysDown[37]) {
// 		return 3;
// 	}
// 	if (keysDown[39]) {
// 		return 4;
// 	}
// }

// function Draw() {
// 	canvas.width = canvas.width; //clean board
// 	lblScore.value = score;
// 	lblTime.value = time_elapsed;
// 	for (var i = 0; i < 10; i++) {
// 		for (var j = 0; j < 10; j++) {
// 			var center = new Object();
// 			center.x = i * 60 + 30;
// 			center.y = j * 60 + 30;
// 			if (board[i][j] == 2) {
// 				context.beginPath();
// 				context.arc(center.x, center.y, 30, 0.15 * Math.PI, 1.85 * Math.PI); // half circle
// 				context.lineTo(center.x, center.y);
// 				context.fillStyle = pac_color; //color
// 				context.fill();
// 				context.beginPath();
// 				context.arc(center.x + 5, center.y - 15, 5, 0, 2 * Math.PI); // circle
// 				context.fillStyle = "black"; //color
// 				context.fill();
// 			} else if (board[i][j] == 1) {
// 				context.beginPath();
// 				context.arc(center.x, center.y, 15, 0, 2 * Math.PI); // circle
// 				context.fillStyle = "black"; //color
// 				context.fill();
// 			} else if (board[i][j] == 4) {
// 				context.beginPath();
// 				context.rect(center.x - 30, center.y - 30, 60, 60);
// 				context.fillStyle = "grey"; //color
// 				context.fill();
// 			}
// 		}
// 	}
// }

// function UpdatePosition() {
// 	board[shape.i][shape.j] = 0;
// 	var x = GetKeyPressed();
// 	if (x == 1) {
// 		if (shape.j > 0 && board[shape.i][shape.j - 1] != 4) {
// 			shape.j--;
// 		}
// 	}
// 	if (x == 2) {
// 		if (shape.j < 9 && board[shape.i][shape.j + 1] != 4) {
// 			shape.j++;
// 		}
// 	}
// 	if (x == 3) {
// 		if (shape.i > 0 && board[shape.i - 1][shape.j] != 4) {
// 			shape.i--;
// 		}
// 	}
// 	if (x == 4) {
// 		if (shape.i < 9 && board[shape.i + 1][shape.j] != 4) {
// 			shape.i++;
// 		}
// 	}
// 	if (board[shape.i][shape.j] == 1) {
// 		score++;
// 	}
// 	board[shape.i][shape.j] = 2;
// 	var currentTime = new Date();
// 	time_elapsed = (currentTime - start_time) / 1000;
// 	if (score >= 20 && time_elapsed <= 10) {
// 		pac_color = "green";
// 	}
// 	if (score == 50) {
// 		window.clearInterval(interval);
// 		window.alert("Game completed");
// 	} else {
// 		Draw();
// 	}
// }

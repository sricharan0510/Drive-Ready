
document.addEventListener("DOMContentLoaded", function () {
  const animatedClasses = [
    "matter",
    "academy-pic",
    "heading",
    "card",
    "fee-card",
    "Register-background",
    "form",
  ];
  function checkVisibility() {
    animatedClasses.forEach((className) => {
      const elements = document.querySelectorAll(`.${className}`);
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;

        if (rect.top <= windowHeight) {
          element.classList.add("visible");
        }
      });
    });
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility();
});


var ob = {
  name: "",
  age: "",
  gender: "",
  mobile: "",
  sport: "",
  plan: ""
};

function fun(event) {
  ob[event.target.name] = event.target.value;
}

function fun2(event) {
  event.preventDefault();
  let allFilled = Object.values(ob).every(value => value !== "");
  if (!allFilled) {
    alert("Please fill in all the details.");
    return;
  }
  let y = document.querySelectorAll('.form');
  y.forEach(element => {
    element.classList.add("register-animation");
  });

  let x = document.querySelector('.sample');
  x.classList.add("s");

  let inputs = document.querySelectorAll('.form-input');
  inputs.forEach(input => input.value = "");

  let radioButtons = document.querySelectorAll('.gtf');
  radioButtons.forEach(radio => radio.checked = false);

  let c = document.getElementsByClassName('register-details')[0];
  let innerData = `
      <div>Name: ${ob.name}</div>
      <div>Age: ${ob.age}</div>
      <div>Gender: ${ob.gender}</div>
      <div>Mobile: ${ob.mobile}</div>
      <div>Sport-Choosen: ${ob.sport}</div>
      <div>Plan-Choosen: ${ob.plan}</div>
  `;
  c.innerHTML = innerData;
}

// =====================================================================================================================

function loginTOSignUp() {
  let y = document.querySelectorAll('.signup-container');
  y.forEach(element => {
    element.classList.add("signup-animation");
  });

  let m = document.getElementsByClassName('login-container');
  Array.from(m).forEach(element => {
    element.style.opacity = "0";
    element.style.transform = "translateX(-100%)";
  });
}

function SignUptoLogin() {
  let y = document.querySelectorAll('.login-container');
  y.forEach(element => {
    element.classList.add("login-animation");
    element.style.transform = "translateX(0)"
    element.style.opacity = "1";
  });

  let m = document.getElementsByClassName('signup-container');
  Array.from(m).forEach(element => {
    element.style.opacity = "0";
    element.style.transform = "translateX(100%)"
  });
}


// ==================================================================================================================/

// Need to update in project file
function animateNavItems() {
  const navItems = document.querySelector('.Academy-nav-items');
  navItems.classList.toggle('show');
}

document.addEventListener('DOMContentLoaded', () => {
  const academyMenuBar = document.querySelector('.Academy-menu-bar');
  if (academyMenuBar) {
    academyMenuBar.addEventListener('click', animateNavItems);
  }
});

// ===============================================================================================================/


const users = { "Sricharan": "1234" };

function login(event) {
  event.preventDefault();
  const username = document.getElementById('my-name').value;
  const password = document.getElementById('my-pass').value;

  if (users[username] && users[username] === password) {
    clearInputs();
    window.location.href = './Academy.html';
  } else {
    clearInputs();
    window.alert('Invalid username or password. Please try again or sign up.');
    showSignupForm();
  }
}

function signup(event) {
  event.preventDefault();
  const signupUsername = document.getElementById('signup-username').value;
  const signupEmail = document.getElementById('signup-email').value;
  const signupPassword = document.getElementById('signup-pass').value;
  const signupCfmPassword = document.getElementById('signup-cfm-pass').value;

  console.log(signupUsername, signupEmail, signupPassword, signupCfmPassword);

  if (signupPassword !== signupCfmPassword) {
    clearInputs();
    window.alert('Passwords do not match. Please try again.');
  }
  else if (users[signupUsername]) {
    clearInputs();
    window.alert('Username already exists. Please try again.');
  }
  else {
    users[signupUsername] = signupPassword;
    clearInputs();
    window.alert('Account created successfully. Please login to continue.');
    SignUptoLogin();
    users[signupUsername] = signupPassword;
    console.log(users);
  }
}


function clearInputs() {
  document.getElementById('my-name').value = '';
  document.getElementById('my-pass').value = '';
  document.getElementById('signup-username').value = '';
  document.getElementById('signup-email').value = '';
  document.getElementById('signup-pass').value = '';
  document.getElementById('signup-cfm-pass').value = '';
}

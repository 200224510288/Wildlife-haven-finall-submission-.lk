const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnloging-popup');
const iconClose = document.querySelector('.icon-close');


// Show register form
registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

// Hide register form
loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

// for the login part 
function loginUser() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let userRecords = JSON.parse(localStorage.getItem("users")) || [];

    let userFound = userRecords.some(user => user.email === email && user.password === password);

    if (userFound) {
        alert("Login Successful");
        let currentUser = userRecords.find(user => user.email === email);
        localStorage.setItem("name", currentUser.name);
        localStorage.setItem("email", currentUser.email);

        if (email === "admin" && password === "admin") {
            window.location.href = "dashbord.html?admin=true";
        } else {
            window.location.href = "dashbord.html?admin=false";
        }
        // window.location.href = "dashbord.html"; 
    } else {
        alert("Login Failed");
    }
}

// Registration section
function registerUser() {
    let name = document.getElementById("regName").value;
    let email = document.getElementById("regEmail").value;
    let password = document.getElementById("regPassword").value;

    let user_records = JSON.parse(localStorage.getItem("users")) || [];

    if (user_records.some(v => v.email === email)) {
        alert("Duplicate Data");
    } else {
        user_records.push({
            "name": name,
            "email": email,
            "password": password,
        });
        localStorage.setItem("users", JSON.stringify(user_records));
        alert("Registration Successful");
    }
} 


// end of the login part*/

// registration section
/*function registerUser() {
    let name = document.getElementById("regName").value;
    let email = document.getElementById("regEmail").value;
    let password = document.getElementById("regPassword").value;

    let user_records = JSON.parse(localStorage.getItem("users")) || [];

    if (user_records.some(v => v.email === email)) {
        alert("Duplicate Data");
    } else {
        user_records.push({
            "name": name,
            "email": email,
            "password": password,
        });
        localStorage.setItem("users", JSON.stringify(user_records));
        alert("Registration Successful");
    }
}*/

// funtion for get data by jsonfile
/*function loginUser() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    fetch('userData.json')
        .then(response => response.json())
        .then(data => {
            let userRecords = data.users || []; // Assuming your JSON structure has a key "users" containing an array of user records
            
            let userFound = userRecords.some(user => user.email === email && user.password === password);
            
            if (userFound) {
                alert("Login Successful");
                let currentUser = userRecords.find(user => user.email === email);
                localStorage.setItem("name", currentUser.name);
                localStorage.setItem("email", currentUser.email);
                window.location.href = "dashbord.html";
            } else {
                alert("Login Failed");
            }
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
        });
}*/
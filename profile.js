// newsletter part
let newsLetter = JSON.parse(localStorage.getItem("newsLetter")) || [];
const emailList = document.getElementById("emailList");

function displayEmails() {
    emailList.innerHTML = ""; // Clear previous list

    // Loop through emails and create list items
    newsLetter.forEach((emailObject, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
        <span>${emailObject.email}</span>
        <button onclick="editEmail(${index})">Edit</button>
        <button onclick="deleteEmail(${index})">Delete</button>
    `;

        emailList.appendChild(li); // Append list item to emailList
    });
}

function editEmail(index) {
    const newEmail = prompt("Enter new email:", newsLetter[index].email);

    // If user provides a new email and confirms, update the email in the list
    if (newEmail !== null) {
        newsLetter[index].email = newEmail;
        localStorage.setItem("newsLetter", JSON.stringify(newsLetter));
        displayEmails();
        location.reload();

    }
}
function deleteEmail(index) {
    const confirmDelete = confirm("Are you sure you want to delete this email?");

    if (confirmDelete) {
        newsLetter.splice(index, 1);
        localStorage.setItem("newsLetter", JSON.stringify(newsLetter));
        displayEmails();
        location.reload();
    }
}
displayEmails();

function addEmail() {
    const emailInput = document.getElementById("emailInput");
    const email = emailInput.value.trim();

    if (email === "") return;

    // Create an object representing the email
    const emailObject = { email: email };

    // Add the email object to the newsletter list
    newsLetter.push(emailObject);
    localStorage.setItem("newsLetter", JSON.stringify(newsLetter));
    emailInput.value = "";
    displayEmails();
}
// end of letter


//user profile part

 // Retrieve users from local storage
 const users = JSON.parse(localStorage.getItem("users")) || [];
 const userList = document.getElementById("userList");

 // Function to display users
 function displayUsers() {
     userList.innerHTML = ""; // Clear previous list

     // Loop through users and create list items
     users.forEach(user => {
         const li = document.createElement("li");
         li.textContent = `Name: ${user.name}, Email: ${user.email}, Password: ${user.password}`;
         userList.appendChild(li); // Append list item to userList
     });
 }

 // Display users when the page loads
 displayUsers();


  // Retrieve query parameter
  const urlParams = new URLSearchParams(window.location.search);
  const isAdmin = urlParams.get('admin');

  // Check if user is admin and display admin content
  if (isAdmin === "true") {
    document.getElementById("admin-content").style.display = "grid";
} else {
    document.getElementById("user-content").style.display = "grid";
}



  function logOut(){
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    window.location.href="newlogin2.html"
    }

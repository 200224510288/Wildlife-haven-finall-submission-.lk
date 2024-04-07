
// animal section 
const animalData = {
    h1Mammals: '',
    descriptionMammals: '',
    h2Mammals: '',
    h3MammalsLeo: '',
    descriptionMammalsLeo: '',
    h3MammalsElephant: '',
    descriptionMammalsElephant: '',
    h1Birds: '',
    descriptionBirds: '',
    h2Birds: '',
    h3BirdsCrimson: '',
    descriptionBirdsCrimson: '',
    h3BirdsOwl: '',
    descriptionBirdsOwl: '',
    h3BirdsDrongo: '',
    descriptionBirdsDrongo: '',
};

// fetch the JSON data
fetch('animal.json')
    .then(response => response.json())
    .then(data => {
        localStorage.setItem('animalPageData', JSON.stringify(data));
        loadDataFromLocalStorage();

    })
    .catch(error => console.error('Error fetching data:', error));

function loadDataFromLocalStorage() {
    const storedData = localStorage.getItem("animalPageData");
    if (storedData) {
        const parsedData = JSON.parse(storedData);
        animalData.h1Mammals = parsedData.h1Mammals;
        animalData.descriptionMammals = parsedData.descriptionMammals;
        animalData.h2Mammals = parsedData.h2Mammals;
        animalData.h3MammalsLeo = parsedData.h3MammalsLeo;
        animalData.descriptionMammalsLeo = parsedData.descriptionMammalsLeo;
        animalData.h3MammalsElephant = parsedData.h3MammalsElephant;
        animalData.descriptionMammalsElephant = parsedData.descriptionMammalsElephant;
        animalData.h2Birds = parsedData.h2Birds;
        animalData.h1Birds = parsedData.h1Birds;
        animalData.descriptionBirds = parsedData.descriptionBirds;
        animalData.h3BirdsCrimson = parsedData.h3BirdsCrimson;
        animalData.descriptionBirdsCrimson = parsedData.descriptionBirdsCrimson;
        animalData.h3BirdsOwl = parsedData.h3BirdsOwl;
        animalData.descriptionBirdsOwl = parsedData.descriptionBirdsOwl;
        animalData.h3BirdsDrongo = parsedData.h3BirdsDrongo;
        animalData.descriptionBirdsDrongo = parsedData.descriptionBirdsDrongo;
        console.log("Data loaded from local storage:", animalData);
    } else {
        console.log("No data found in local storage.");
    }
};
// end of the animal section

// Get reference to the login dialog
const loginDialog = document.getElementById('login-dialog');

// Function to show the login dialog
function showLoginDialog() {
  loginDialog.showModal();


  // Set dialog title dynamically
  const dialogTitle = document.getElementById('dialogTitle');
  dialogTitle.innerText = document.getElementById('mammalsH1').innerText;

  const description1 = document.getElementById('description1');
  description1.innerText = document.getElementById('descriptionMammels').innerText;

  const dialogTitle2 = document.getElementById('dialogTitle2');
  dialogTitle2.innerText = document.getElementById('MammalH2').innerText;

  const dialogTitle3 = document.getElementById('dialogTitle3');
  dialogTitle3.innerText = document.getElementById('leoMammelH3').innerText;

  const description2 = document.getElementById('description2');
  description2.innerText = document.getElementById('mammelDescriptionLeo').innerText;

  const dialogTitle9 = document.getElementById('dialogTitle9');
  dialogTitle9.innerText = document.getElementById('elepantH3').innerText;

  const description3 = document.getElementById('description3');
  description3.innerText = document.getElementById('descriptonElephant').innerText;

  const dialogTitle4 = document.getElementById('dialogTitle4');
  dialogTitle4.innerText = document.getElementById('birdsH1').innerText;

  const description4 = document.getElementById('description4');
  description4.innerText = document.getElementById('birdsDescription').innerText;

  const dialogTitle5 = document.getElementById('dialogTitle5');
  dialogTitle5.innerText = document.getElementById('birdsH2').innerText;

  const dialogTitle6 = document.getElementById('dialogTitle6');
  dialogTitle6.innerText = document.getElementById('crimsonH3').innerText;

  const description5 = document.getElementById('description5');
  description5.innerText = document.getElementById('crimsonDescription').innerText;

  const dialogTitle7 = document.getElementById('dialogTitle7');
  dialogTitle7.innerText = document.getElementById('owlH3').innerText;

  const description6 = document.getElementById('description6');
  description6.innerText = document.getElementById('owlDescripton').innerText;

  const dialogTitle8 = document.getElementById('dialogTitle8');
  dialogTitle8.innerText = document.getElementById('drongoBirds').innerText;

  const description7 = document.getElementById('description7');
  description7.innerText = document.getElementById('drongoDiscription').innerText;

}


//funtioning the dilog buttons
const btnSubmit = document.getElementById("btn");
btnSubmit.addEventListener("click", editTitle);

const btnClose = document.getElementById("btnClose");
btnClose.addEventListener("click", closeDialog);

function editTitle() {
  const newTitle = document.getElementById("dialogTitle").innerText;
  animalData.h1Mammals = newTitle;

  const newTitle2 = document.getElementById("description1").innerText;
  animalData.descriptionMammals = newTitle2;

  const newTitle3 = document.getElementById("dialogTitle2").innerText;
  animalData.h2Mammals = newTitle3;

  const newTitle4 = document.getElementById("dialogTitle3").innerText;
  animalData.h3MammalsLeo = newTitle4;

  const newTitle5 = document.getElementById("description2").innerText;
  animalData.descriptionMammalsLeo = newTitle5;

  const newTitle6 = document.getElementById("dialogTitle9").innerText;
  animalData.h3MammalsElephant = newTitle6;

  const newTitle7 = document.getElementById("description3").innerText;
  animalData.descriptionMammalsElephant = newTitle7;

  const newTitle8 = document.getElementById("dialogTitle4").innerText;
  animalData.h1Birds = newTitle8;

  const newTitle9 = document.getElementById("description4").innerText;
  animalData.descriptionBirds = newTitle9;

  const newTitle10 = document.getElementById("dialogTitle6").innerText;
  animalData.h3BirdsCrimson = newTitle10;

  const newTitle11 = document.getElementById("description5").innerText;
  animalData.descriptionBirdsCrimson = newTitle11;

  const newTitle12 = document.getElementById("dialogTitle7").innerText;
  animalData.h3BirdsOwl = newTitle12;

  const newTitle13 = document.getElementById("description6").innerText;
  animalData.descriptionBirdsOwl = newTitle13;

  const newTitle14 = document.getElementById("dialogTitle8").innerText;
  animalData.h3BirdsDrongo = newTitle14;

  const newTitle15 = document.getElementById("description7").innerText;
  animalData.descriptionBirdsDrongo = newTitle15;

  document.title = newTitle; // Change the document title

  localStorage.setItem("conservationPageData", JSON.stringify(animalData)); // Update local storage

  document.getElementById("mammalsH1").innerText = newTitle;
  document.getElementById("descriptionMammels").innerText = newTitle2;
  document.getElementById("MammalH2").innerText = newTitle3;
  document.getElementById("leoMammelH3").innerText = newTitle4;
  document.getElementById("mammelDescriptionLeo").innerText = newTitle5;
  document.getElementById("elepantH3").innerText = newTitle6;
  document.getElementById("descriptonElephant").innerText = newTitle7;
  document.getElementById("birdsH1").innerText = newTitle8;
  document.getElementById("birdsDescription").innerText = newTitle8;
  document.getElementById("birdsH2").innerText = newTitle9;
  document.getElementById("crimsonH3").innerText = newTitle10;
  document.getElementById("crimsonDescription").innerText = newTitle11;
  document.getElementById("owlH3").innerText = newTitle12;
  document.getElementById("owlH3").innerText = newTitle13;
  document.getElementById("drongoBirds").innerText = newTitle14;
  document.getElementById("drongoDiscription").innerText = newTitle15;

}
function closeDialog() {
  loginDialog.close(); // Close the dialog
}

//newsletter

function storeNewsLetter() {
  let email = document.getElementById("emailInput").value;

  let getEmail = JSON.parse(localStorage.getItem("newsLetter")) || [];

  if (getEmail.some(v => v.email === email)) {
    alert("Duplicate Email")
  } else {
    getEmail.push({
      "email": email,
    });
    localStorage.setItem("newsLetter", JSON.stringify(getEmail));
    alert("Registration Successful")
  }
}
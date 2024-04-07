
// endemic animal section
const endemicData = {
  h1Title: '',
  animalList: [],
  h2Title: '',
  h2Birds: '',
  reptitlesTitle: '',
  birdDescription: '',
  reptilesDescription: '',
  parksList: [],
  parkH2: '',
  h2IntroductionParks: '',
  h2ConservationParks: '',
  introductionParks: '',
  conservationParks: '',
  h1Lover: '',
  descriptionLover: ''
}

// fetch the JSON data
fetch('home.json')
  .then(response => response.json())
  .then(data => {

    localStorage.setItem('homePageData', JSON.stringify(data));
    loadDataFromLocalStorage(); // Call the function to load data after storing

  })
  .catch(error => console.error('Error fetching data:', error));
  
function loadDataFromLocalStorage() {
  const storedData = localStorage.getItem("homePageData");
  if (storedData) {
    const parsedData = JSON.parse(storedData);
    endemicData.h1Title = parsedData.h1Title;
    endemicData.h2Title = parsedData.h2Title;
    endemicData.h2Birds = parsedData.h2Birds;
    endemicData.birdDescription = parsedData.birdDescription;
    endemicData.reptitlesTitle = parsedData.reptitlesTitle;
    endemicData.reptilesDescription = parsedData.reptilesDescription;
    endemicData.animalList = parsedData.animalList;
    endemicData.parkH2 = parsedData.parkH2;
    endemicData.h2IntroductionParks = parsedData.h2IntroductionParks;
    endemicData.h2ConservationParks = parsedData.h2ConservationParks;
    endemicData.conservationParks = parsedData.conservationParks;
    endemicData.introductionParks = parsedData.introductionParks;
    endemicData.parksList = parsedData.parksList;
    endemicData.descriptionLover = parsedData.descriptionLover;
    endemicData.h1Lover = parsedData.h1Lover;
    console.log("Data loaded from local storage:", endemicData);
  } else {
    console.log("No data found in local storage.");
  }
};



// Get reference to the login dialog
const loginDialog = document.getElementById('login-dialog');

// Function to show the login dialog

function showLoginDialog() {
  loginDialog.showModal();

  // Set dialog title dynamically
  const dialogTitle = document.getElementById('dialogTitle');
  dialogTitle.innerText = document.getElementById('title').innerText;

  const dialogTitle2 = document.getElementById('dialogTitle2');
  dialogTitle2.innerText = document.getElementById('titleH2').innerText;

  const dialogTitle3 = document.getElementById('dialogTitle3');
  dialogTitle3.innerText = document.getElementById('birdsH2').innerText;

  const dialogDescription1 = document.getElementById('dialogDescription1');
  dialogDescription1.innerText = document.getElementById('birdsP').innerText;

  const dialogTitle4 = document.getElementById('dialogTitle4');
  dialogTitle4.innerText = document.getElementById('reptitlesH').innerText;

  const dialogDescription2 = document.getElementById('dialogDescription2');
  dialogDescription2.innerText = document.getElementById('reptitlesP').innerText;

  const dialogList1 = document.getElementById('dialogList1');
  dialogList1.innerText = document.getElementById('animalList').innerText;

  const dialogTitle5 = document.getElementById('dialogTitle5');
  dialogTitle5.innerText = document.getElementById('parksH2').innerText;

  const dialogList2 = document.getElementById('dialogList2');
  dialogList2.innerText = document.getElementById('parkList').innerText;

  const dialogTitle6 = document.getElementById('dialogTitle6');
  dialogTitle6.innerText = document.getElementById('h2Introduction').innerText;
 
  const dialogDescription3 = document.getElementById('dialogDescription3');
  dialogDescription3.innerText = document.getElementById('pIntroduction').innerText;
  
  const dialogTitle7 = document.getElementById('dialogTitle7');
  dialogTitle7.innerText = document.getElementById('conservationH2').innerText;
 
  const dialogDescription4 = document.getElementById('dialogDescription4');
  dialogDescription4.innerText = document.getElementById('conservationP').innerText;

  const dialogTitle8 = document.getElementById('dialogTitle8');
  dialogTitle8.innerText = document.getElementById('h1Lover').innerText;

  const dialogDescription5 = document.getElementById('dialogDescription5');
  dialogDescription5.innerText = document.getElementById('pLover').innerText;

}


//funtioning the dilog buttons
const btnSubmit = document.getElementById("btn");
btnSubmit.addEventListener("click", editTitle);

const btnClose = document.getElementById("btnClose");
btnClose.addEventListener("click", closeDialog);

function editTitle() {
  const newTitle = document.getElementById("dialogTitle").innerText;
  endemicData.h1Title = newTitle;

  const newTitle2 = document.getElementById("dialogTitle2").innerText;
  endemicData.h2Title = newTitle2;

  const newTitle7 = document.getElementById("dialogList1").innerText;
  endemicData.animalList = newTitle7;

  const newTitle3 = document.getElementById("dialogTitle3").innerText;
  endemicData.h2Birds = newTitle3;

  const newTitle4 = document.getElementById("dialogDescription1").innerText;
  endemicData.birdDescription = newTitle4;

  const newTitle5 = document.getElementById("dialogTitle4").innerText;
  endemicData.reptitlesTitle = newTitle5;

  const newTitle6 = document.getElementById("dialogDescription2").innerText;
  endemicData.reptilesDescription = newTitle6;

  const newTitle8 = document.getElementById("dialogTitle5").innerText;
  endemicData.parkH2 = newTitle8;

  const newTitle9 = document.getElementById("dialogList2").innerText;
  endemicData.parksList = newTitle9;

 
  const newTitle10 = document.getElementById("dialogTitle6").innerText;
  endemicData.parkH2 = newTitle10;

  const newTitle12 = document.getElementById("dialogDescription3").innerText;
  endemicData.introductionParks = newTitle12;


  const newTitle11 = document.getElementById("dialogTitle7").innerText;
  endemicData.h2ConservationParks = newTitle11;


  const newTitle13 = document.getElementById("dialogDescription4").innerText;
  endemicData.conservationParks = newTitle13;

  const newTitle14 = document.getElementById("dialogTitle8").innerText;
  endemicData.h1Lover = newTitle14;

  const newTitle15 = document.getElementById("dialogDescription5").innerText;
  endemicData.descriptionLover = newTitle15;

 
  document.title = newTitle; // Change the document title
  

  localStorage.setItem("homePageData", JSON.stringify(endemicData)); // Update local storage

  document.getElementById("title").innerText = newTitle;
  document.getElementById("titleH2").innerText = newTitle2;
  document.getElementById("birdsH2").innerText = newTitle3;
  document.getElementById("birdsP").innerText = newTitle4;
  document.getElementById("reptitlesH").innerText = newTitle5;
  document.getElementById("reptitlesP").innerText = newTitle6;
  document.getElementById("animalList").innerText = newTitle7;
  document.getElementById("parksH2").innerText = newTitle8;
  document.getElementById("parkList").innerText = newTitle9;
  document.getElementById("h2Introduction").innerText = newTitle10;
  document.getElementById("pIntroduction").innerText = newTitle12;
  document.getElementById("conservationH2").innerText = newTitle11;
  document.getElementById("conservationP").innerText = newTitle13;
  document.getElementById("h1Lover").innerText = newTitle14;
  document.getElementById("pLover").innerText = newTitle15;

}
function closeDialog() {
  loginDialog.close(); // Close the dialog
}



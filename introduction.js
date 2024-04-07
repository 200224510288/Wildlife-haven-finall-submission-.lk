
// Introduction section 
const introductionData = {
    h1Intro: '',
    h2Intro: '',
    descriptionIntro: '',
    h1Wonder: '',
    descriptionWonder: '',
    h1Sinharaja: '',
    h1Location: '',
    descriptionLocation: '',
    h1Integrity: '',
    descriptionIntegrity: '',
    h1Minneriya: '',
    h1MinneriyaLocation: '',
    descriptionMinneriyaLocation: '',
    h1WonderMinneriya: '',
    descriptionWonderMinneriya: '',
    tableHeading: '',
    elephant: '',
    elephantDescription: '',
    parakeet: '',
    parakeetDescription: '',
    magpie: '',
    magpieDescription: '',
    footer: '',
    animalTH: '',
    factTH: '',
    imgTH: '',
    exploreTH: '',





}


// fetch the JSON data
fetch('introduction.json')
    .then(response => response.json())
    .then(data => {
        localStorage.setItem('introdutionPageData', JSON.stringify(data));
        loadDataFromLocalStorage();
    })
    .catch(error => console.error('Error fetching data:', error));
// end of the introduction section
function loadDataFromLocalStorage() {
    const storedData = localStorage.getItem("introdutionPageData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      introductionData.h1Intro = parsedData.h1Intro;
      introductionData.h2Intro = parsedData.h2Intro;
      introductionData.descriptionIntro = parsedData.descriptionIntro;
      introductionData.h1Wonder = parsedData.h1Wonder;
      introductionData.descriptionWonder = parsedData.descriptionWonder;
      introductionData.h1Sinharaja = parsedData.h1Sinharaja;
      introductionData.h1Location = parsedData.h1Location;
      introductionData.descriptionLocation = parsedData.descriptionLocation;
      introductionData.h1Integrity = parsedData.h1Integrity;
      introductionData.descriptionIntegrity = parsedData.descriptionIntegrity;
      introductionData.h1Minneriya = parsedData.h1Minneriya;
      introductionData.h1MinneriyaLocation = parsedData.h1MinneriyaLocation;
      introductionData.descriptionMinneriyaLocation = parsedData.descriptionMinneriyaLocation;
      introductionData.h1WonderMinneriya = parsedData.h1WonderMinneriya;
      introductionData.descriptionWonderMinneriya = parsedData.descriptionWonderMinneriya;
      
      introductionData.tableHeading = parsedData.tableHeading;
      introductionData.elephant = parsedData.elephant;
      introductionData.elephantDescription = parsedData.elephantDescription;
      introductionData.parakeet = parsedData.parakeet;
      introductionData.parakeetDescription = parsedData.parakeetDescription;
      introductionData.magpie = parsedData.magpie;
      introductionData.magpieDescription = parsedData.magpieDescription;
      introductionData.footer = parsedData.footer;
      introductionData.animalTH = parsedData.animalTH;
      introductionData.factTH = parsedData.factTH;
      introductionData.imgTH = parsedData.imgTH;
      introductionData.exploreTH = parsedData.exploreTH;
      


      console.log("Data loaded from local storage:", introductionData);
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
  dialogTitle.innerText = document.getElementById('titleH1').innerText;

  const dialogTitle2 = document.getElementById('dialogTitle2');
  dialogTitle2.innerText = document.getElementById('title2').innerText;

  const dialogDescription = document.getElementById('dialogDescription');
  dialogDescription.innerText = document.getElementById('description1').innerText;

  const dialogTitle3 = document.getElementById('dialogTitle3');
  dialogTitle3.innerText = document.getElementById('titleWonder').innerText;

  const dialogDescription2 = document.getElementById('dialogDescription2');
  dialogDescription2.innerText = document.getElementById('PWonder').innerText;

  const dialogTitle4 = document.getElementById('dialogTitle4');
  dialogTitle4.innerText = document.getElementById('titleSinharaja').innerText;

  const dialogTitle5 = document.getElementById('dialogTitle5');
  dialogTitle5.innerText = document.getElementById('locationH1').innerText;

  const dialogDescription3 = document.getElementById('dialogDescription3');
  dialogDescription3.innerText = document.getElementById('locationP').innerText;

  const dialogTitle6 = document.getElementById('dialogTitle6');
  dialogTitle6.innerText = document.getElementById('intergrityH1').innerText;

  const dialogDescription4 = document.getElementById('dialogDescription4');
  dialogDescription4.innerText = document.getElementById('intergrityP').innerText;

  const dialogTitle7 = document.getElementById('dialogTitle7');
  dialogTitle7.innerText = document.getElementById('minneriyaH1').innerText;

  const dialogTitle8 = document.getElementById('dialogTitle8');
  dialogTitle8.innerText = document.getElementById('mineriyalocationH1').innerText;

  const dialogDescription5 = document.getElementById('dialogDescription5');
  dialogDescription5.innerText = document.getElementById('mineriyaLocationP').innerText;

  const dialogTitle9 = document.getElementById('dialogTitle9');
  dialogTitle9.innerText = document.getElementById('wonderMinneriyaH1').innerText;

  const dialogDescription6 = document.getElementById('dialogDescription6');
  dialogDescription6.innerText = document.getElementById('wonderMinneriyaP').innerText;

  const dialogTitle10 = document.getElementById('dialogTitle10');
  dialogTitle10.innerText = document.getElementById('tableH1').innerText;


  document.getElementById("editedAnimaltable").value = document.getElementById("animaltable").innerText;
  document.getElementById("editedFactTable").value = document.getElementById("factTable").innerText;
  document.getElementById("elephantTitleEdited").value = document.getElementById("elephantTitle").innerText;
  document.getElementById("elephantDescriptionEdited").value = document.getElementById("elephantDescription").innerText;

  document.getElementById("parrotEdit").value = document.getElementById("parrot").innerText;
  document.getElementById("parakeetDescriptionEdit").value = document.getElementById("parrotDescription").innerText;
  document.getElementById("magpie1Edit").value = document.getElementById("magpie1").innerText;
  document.getElementById("magpieDescriptionEdit").value = document.getElementById("magDescrption").innerText;
}

//funtioning the dilog buttons
const btnSubmit = document.getElementById("btn");
btnSubmit.addEventListener("click", editTitle);

const btnClose = document.getElementById("btnClose");
btnClose.addEventListener("click", closeDialog);

function editTitle() {
  const newTitle = document.getElementById("dialogTitle").innerText;
  introductionData.h1Intro = newTitle;

  const newTitle2 = document.getElementById("dialogTitle2").innerText;
  introductionData.h2Intro = newTitle2;

  const newTitle3 = document.getElementById("dialogDescription").innerText;
  introductionData.descriptionIntro = newTitle3;

  const newTitle4 = document.getElementById("dialogTitle3").innerText;
  introductionData.h1Wonder = newTitle4;

  const newTitle5 = document.getElementById("dialogDescription2").innerText;
  introductionData.descriptionWonder = newTitle5;

  const newTitle6 = document.getElementById("dialogTitle4").innerText;
  introductionData.h1Sinharaja = newTitle6;

  const newTitle7 = document.getElementById("dialogTitle5").innerText;
  introductionData.h1Location = newTitle7;

  const newTitle8 = document.getElementById("dialogDescription3").innerText;
  introductionData.descriptionLocation = newTitle8;

  const newTitle9 = document.getElementById("dialogTitle6").innerText;
  introductionData.h1Integrity = newTitle9;

  const newTitle10 = document.getElementById("dialogDescription4").innerText;
  introductionData.descriptionIntegrity = newTitle10;

  const newTitle11 = document.getElementById("dialogTitle7").innerText;
  introductionData.h1Minneriya = newTitle11;

  const newTitle12 = document.getElementById("dialogTitle8").innerText;
  introductionData.h1MinneriyaLocation = newTitle12;

  const newTitle13 = document.getElementById("dialogDescription4").innerText;
  introductionData.descriptionMinneriyaLocation = newTitle13;

  const newTitle14 = document.getElementById("dialogTitle9").innerText;
  introductionData.h1WonderMinneriya = newTitle14;

  const newTitle15 = document.getElementById("dialogDescription6").innerText;
  introductionData.descriptionWonderMinneriya = newTitle15;

  const newTitle16 = document.getElementById("dialogTitle10").innerText;
  introductionData.tableHeading = newTitle16;

  var newTabletitle1 = document.getElementById("editedAnimaltable").value;
  var newTabletitle2 = document.getElementById("editedFactTable").value;
  var newTabletitle4 = document.getElementById("elephantTitleEdited").value;
  var newTabletitle5 = document.getElementById("elephantDescriptionEdited").value;
  
  var newTabletitle6 = document.getElementById("parrotEdit").value;
  var newTabletitle7 = document.getElementById("parakeetDescriptionEdit").value;
  var newTabletitle8 = document.getElementById("magpie1Edit").value;
  var newTabletitle9 = document.getElementById("magpieDescriptionEdit").value;

  document.title = newTitle; // Change the document title
  

  localStorage.setItem("introdutionPageData", JSON.stringify(introductionData)); // Update local storage

  document.getElementById("titleH1").innerText = newTitle;
  document.getElementById("title2").innerText = newTitle2;
  document.getElementById("description1").innerText = newTitle3;
  document.getElementById("titleWonder").innerText = newTitle4;
  document.getElementById("PWonder").innerText = newTitle5;
  document.getElementById("titleSinharaja").innerText = newTitle6;
  document.getElementById("locationH1").innerText = newTitle7;
  document.getElementById("locationP").innerText = newTitle8;
  document.getElementById("intergrityH1").innerText = newTitle9;
  document.getElementById("intergrityP").innerText = newTitle10;
  document.getElementById("minneriyaH1").innerText = newTitle11;
  document.getElementById("mineriyalocationH1").innerText = newTitle12;
  document.getElementById("mineriyaLocationP").innerText = newTitle13;
  document.getElementById("wonderMinneriyaH1").innerText = newTitle14;
  document.getElementById("wonderMinneriyaP").innerText = newTitle15;
  document.getElementById("tableH1").innerText = newTitle16;

  document.getElementById("animaltable").innerText = newTabletitle1;
  document.getElementById("factTable").innerText = newTabletitle2;
  document.getElementById("elephantTitle").innerText = newTabletitle4;
  document.getElementById("elephantDescription").innerText = newTabletitle5;

  document.getElementById("parrot").innerText = newTabletitle6;
  document.getElementById("parrotDescription").innerText = newTabletitle7;
  document.getElementById("magpie1").innerText = newTabletitle8;
  document.getElementById("magDescrption").innerText = newTabletitle9;

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


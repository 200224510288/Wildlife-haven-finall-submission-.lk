
//leopard section
const leopardData = {
    h1Leopard: '',
    h2Leopard: '',
    descriptionLeopard: '',
    h2habitats: '',
    descriptionhabitats: '',
    h2Diet: '',
    decriptionDiet: '',
    h2Behavior: '',
    descriptionBehavior: '',
    h2Distribution: '',
    descriptionDistribution: '',
    h2Yala: '',
    descriptionYala: '',
    h2Wilpattu: '',
    descriptionWilpattu: '',
    h2HortonPlains: '',
    descriptionHortonPlains: '',
    h2Threats: '',
    h2HabitatLoss: '',
    descriptionHabitatLoss: '',
    h2PreventingActs: '',
    descriptionPreventingActs: '',
    h2Hunting: '',
    descriptionHunting: '',
    h2Preventing: '',
    descriptionPreventing: '',
    h2Leopocon: '',
    descriptionLeopocon: '',
    description2Leopocon: '',
};

// fetch the JSON data
fetch('leopard.json')
    .then(response => response.json())
    .then(data => {

        localStorage.setItem('leopardPageData', JSON.stringify(data));
        loadDataFromLocalStorage();

    })
    .catch(error => console.error('Error fetching data:', error));

function loadDataFromLocalStorage() {
    const storedData = localStorage.getItem("leopardPageData");
    if (storedData) {
        const parsedData = JSON.parse(storedData);
        leopardData.h1Leopard = parsedData.h1Leopard;
        leopardData.h2Leopard = parsedData.h2Leopard;
        leopardData.descriptionLeopard = parsedData.descriptionLeopard;
        leopardData.h2habitats = parsedData.h2habitats;
        leopardData.descriptionhabitats = parsedData.descriptionhabitats;
        leopardData.h2Diet = parsedData.h2Diet;
        leopardData.decriptionDiet = parsedData.decriptionDiet;
        leopardData.h2Behavior = parsedData.h2Behavior;
        leopardData.descriptionBehavior = parsedData.descriptionBehavior;
        leopardData.h2Distribution = parsedData.h2Distribution;
        leopardData.descriptionDistribution = parsedData.descriptionDistribution;
        leopardData.h2Yala = parsedData.h2Yala;
        leopardData.descriptionYala = parsedData.descriptionYala;
        leopardData.h2Wilpattu = parsedData.h2Wilpattu;
        leopardData.descriptionWilpattu = parsedData.descriptionWilpattu;
        leopardData.h2HortonPlains = parsedData.h2HortonPlains;
        leopardData.descriptionHortonPlains = parsedData.descriptionHortonPlains;
        leopardData.h2Threats = parsedData.h2Threats;
        leopardData.h2HabitatLoss = parsedData.h2HabitatLoss;
        leopardData.descriptionHabitatLoss = parsedData.descriptionHabitatLoss;
        leopardData.h2PreventingActs = parsedData.h2PreventingActs;
        leopardData.descriptionPreventingActs = parsedData.descriptionPreventingActs;
        leopardData.h2Hunting = parsedData.h2Hunting;
        leopardData.descriptionHunting = parsedData.descriptionHunting;
        leopardData.h2Preventing = parsedData.h2Preventing;
        leopardData.descriptionPreventing = parsedData.descriptionPreventing;
        leopardData.h2Preventing = parsedData.h2Preventing;
        leopardData.h2Leopocon = parsedData.h2Leopocon;
        leopardData.descriptionLeopocon = parsedData.descriptionLeopocon;
        leopardData.description2Leopocon = parsedData.description2Leopocon;
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
  dialogTitle.innerText = document.getElementById('leopardH1').innerText;

  const dialogTitle2 = document.getElementById('dialogTitle2');
  dialogTitle2.innerText = document.getElementById('leopardH2').innerText;

  const dialogDescription = document.getElementById('dialogDescription');
  dialogDescription.innerText = document.getElementById('leopardP').innerText;

  const dialogTitle3 = document.getElementById('dialogTitle3');
  dialogTitle3.innerText = document.getElementById('habittatH2').innerText;

  const dialogDescription2 = document.getElementById('dialogDescription2');
  dialogDescription2.innerText = document.getElementById('habitatDescription').innerText;

  const dialogTitle4 = document.getElementById('dialogTitle4');
  dialogTitle4.innerText = document.getElementById('dietH2').innerText;

  const dialogDescription3 = document.getElementById('dialogDescription3');
  dialogDescription3.innerText = document.getElementById('descriptionP').innerText;

  const dialogTitle5 = document.getElementById('dialogTitle5');
  dialogTitle5.innerText = document.getElementById('behaviorH2').innerText;

  const dialogDescription4 = document.getElementById('dialogDescription4');
  dialogDescription4.innerText = document.getElementById('behaviordescription').innerText;

  const dialogTitle6 = document.getElementById('dialogTitle6');
  dialogTitle6.innerText = document.getElementById('distributionH2').innerText;

  const dialogDescription5 = document.getElementById('dialogDescription5');
  dialogDescription5.innerText = document.getElementById('distribtiondescrip').innerText;

  const dialogTitle7 = document.getElementById('dialogTitle7');
  dialogTitle7.innerText = document.getElementById('yalaTitle').innerText;

  const dialogDescription6 = document.getElementById('dialogDescription6');
  dialogDescription6.innerText = document.getElementById('YalaDescription').innerText;

  const dialogTitle8 = document.getElementById('dialogTitle8');
  dialogTitle8.innerText = document.getElementById('wilpattuTitle').innerText;

  const dialogDescription7 = document.getElementById('dialogDescription7');
  dialogDescription7.innerText = document.getElementById('wilpattuDescription').innerText;

  const dialogTitle9 = document.getElementById('dialogTitle9');
  dialogTitle9.innerText = document.getElementById('hortainH2').innerText;

  const dialogDescription8 = document.getElementById('dialogDescription8');
  dialogDescription8.innerText = document.getElementById('hortainDescription').innerText;

  const dialogTitle10 = document.getElementById('dialogTitle10');
  dialogTitle10.innerText = document.getElementById('threatH2').innerText;

  const dialogTitle11 = document.getElementById('dialogTitle11');
  dialogTitle11.innerText = document.getElementById('habitatLossH2').innerText;

  const dialogDescription9 = document.getElementById('dialogDescription9');
  dialogDescription9.innerText = document.getElementById('habitantlossDescription').innerText;

  const dialogTitle12 = document.getElementById('dialogTitle12');
  dialogTitle12.innerText = document.getElementById('preventingLossH2').innerText;

  const dialogDescription10 = document.getElementById('dialogDescription10');
  dialogDescription10.innerText = document.getElementById('preventingLossP').innerText;

  const dialogTitle13 = document.getElementById('dialogTitle13');
  dialogTitle13.innerText = document.getElementById('huntingH2').innerText;

  const dialogDescription11 = document.getElementById('dialogDescription11');
  dialogDescription11.innerText = document.getElementById('huntingDescription').innerText;

  const dialogTitle14 = document.getElementById('dialogTitle14');
  dialogTitle14.innerText = document.getElementById('preventingHuntH2').innerText;

  const dialogDescription12 = document.getElementById('dialogDescription12');
  dialogDescription12.innerText = document.getElementById('preventingHuntP').innerText;

  const dialogTitle15 = document.getElementById('dialogTitle15');
  dialogTitle15.innerText = document.getElementById('loeopardH2').innerText;

  const dialogDescription13 = document.getElementById('dialogDescription13');
  dialogDescription13.innerText = document.getElementById('leopordDescription').innerText;

  const dialogDescription14 = document.getElementById('dialogDescription14');
  dialogDescription14.innerText = document.getElementById('leopordDescription2').innerText;
}

//funtioning the dilog buttons
const btnSubmit = document.getElementById("btn");
btnSubmit.addEventListener("click", editTitle);

const btnClose = document.getElementById("btnClose");
btnClose.addEventListener("click", closeDialog);

function editTitle() {
  const newTitle = document.getElementById("dialogTitle").innerText;
  leopardData.h1Leopard = newTitle;

  const newTitle2 = document.getElementById("dialogTitle2").innerText;
  leopardData.h2Leopard = newTitle2;

  const newTitle3 = document.getElementById("dialogDescription").innerText;
  leopardData.descriptionLeopard = newTitle3;

  const newTitle4 = document.getElementById("dialogTitle3").innerText;
  leopardData.h2habitats = newTitle4;

  const newTitle5 = document.getElementById("dialogDescription2").innerText;
  leopardData.descriptionhabitats = newTitle5;

  const newTitle6 = document.getElementById("dialogTitle4").innerText;
  leopardData.h2Diet = newTitle6;

  const newTitle7 = document.getElementById("dialogDescription3").innerText;
  leopardData.decriptionDiet = newTitle7;

  const newTitle8 = document.getElementById("dialogTitle5").innerText;
  leopardData.h2Behavior = newTitle8;

  const newTitle9 = document.getElementById("dialogDescription4").innerText;
  leopardData.descriptionBehavior = newTitle9;

  const newTitle10 = document.getElementById("dialogTitle6").innerText;
  leopardData.h2Distribution = newTitle10;

  const newTitle11 = document.getElementById("dialogDescription5").innerText;
  leopardData.descriptionDistribution = newTitle11;

  const newTitle12 = document.getElementById("dialogTitle7").innerText;
  leopardData.h2Yala = newTitle12;

  const newTitle13 = document.getElementById("dialogDescription6").innerText;
  leopardData.descriptionYala = newTitle13;

  const newTitle14 = document.getElementById("dialogTitle8").innerText;
  leopardData.h2Wilpattu = newTitle14;

  const newTitle15 = document.getElementById("dialogDescription7").innerText;
  leopardData.h2Wilpattu = newTitle15;

  const newTitle16 = document.getElementById("dialogTitle9").innerText;
  leopardData.h2Wilpattu = newTitle16;

  const newTitle17 = document.getElementById("dialogDescription8").innerText;
  leopardData.descriptionWilpattu = newTitle17;

  const newTitle18 = document.getElementById("dialogTitle10").innerText;
  leopardData.h2Threats = newTitle18;

  const newTitle19 = document.getElementById("dialogTitle11").innerText;
  leopardData.h2HabitatLoss = newTitle19;

  const newTitle20 = document.getElementById("dialogDescription9").innerText;
  leopardData.descriptionHabitatLoss = newTitle20;

  const newTitle21 = document.getElementById("dialogTitle12").innerText;
  leopardData.h2PreventingActs = newTitle21;

  const newTitle22 = document.getElementById("dialogDescription10").innerText;
  leopardData.descriptionPreventingActs = newTitle22;

  const newTitle23 = document.getElementById("dialogTitle13").innerText;
  leopardData.h2Hunting = newTitle23;

  const newTitle24 = document.getElementById("dialogDescription11").innerText;
  leopardData.descriptionHunting = newTitle24;

  const newTitle25 = document.getElementById("dialogTitle14").innerText;
  leopardData.h2Preventing = newTitle25;

  const newTitle26 = document.getElementById("dialogDescription12").innerText;
  leopardData.descriptionPreventing = newTitle26;

  const newTitle27 = document.getElementById("dialogTitle15").innerText;
  leopardData.h2Leopocon = newTitle27;

  const newTitle28 = document.getElementById("dialogDescription13").innerText;
  leopardData.descriptionLeopocon = newTitle28; 

  const newTitle29 = document.getElementById("dialogDescription14").innerText;
  leopardData.descriptionLeopocon = newTitle29; 

  document.title = newTitle; // Change the document title
  

  localStorage.setItem("leopardPageData", JSON.stringify(leopardData)); // Update local storage

  document.getElementById("leopardH1").innerText = newTitle;
  document.getElementById("leopardH2").innerText = newTitle2;
  document.getElementById("leopardP").innerText = newTitle3;
  document.getElementById("habittatH2").innerText = newTitle4;
  document.getElementById("habitatDescription").innerText = newTitle5;
  document.getElementById("dietH2").innerText = newTitle6;
  document.getElementById("descriptionP").innerText = newTitle7;
  document.getElementById("behaviorH2").innerText = newTitle8;
  document.getElementById("behaviordescription").innerText = newTitle9;
  document.getElementById("distributionH2").innerText = newTitle10;
  document.getElementById("distribtiondescrip").innerText = newTitle11;
  document.getElementById("yalaTitle").innerText = newTitle12;
  document.getElementById("YalaDescription").innerText = newTitle13;
  document.getElementById("wilpattuTitle").innerText = newTitle14;
  document.getElementById("wilpattuDescription").innerText = newTitle15;
  document.getElementById("hortainH2").innerText = newTitle16;
  document.getElementById("hortainDescription").innerText = newTitle17;
  document.getElementById("threatH2").innerText = newTitle18;
  document.getElementById("habitatLossH2").innerText = newTitle19;
  document.getElementById("habitantlossDescription").innerText = newTitle20;
  document.getElementById("preventingLossH2").innerText = newTitle21;
  document.getElementById("preventingLossP").innerText = newTitle22;
  document.getElementById("huntingH2").innerText = newTitle23;
  document.getElementById("huntingDescription").innerText = newTitle24;
  document.getElementById("preventingHuntH2").innerText = newTitle25;
  document.getElementById("preventingHuntP").innerText = newTitle26;
  document.getElementById("loeopardH2").innerText = newTitle27;
  document.getElementById("leopordDescription").innerText = newTitle28;
  document.getElementById("leopordDescription2").innerText = newTitle29;



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

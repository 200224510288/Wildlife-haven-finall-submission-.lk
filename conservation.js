
// conservation section 
const conservationData = {
    h1Conservation: '',
    h2Conservation: '',
    descriptionConservation: '',
    h2Responsibilities: '',
    descriptionResponsibilities: '',
    h1Location: '',
    directonList: [],
    h2Location: '',
    h1Concern: '',
    descriptionConcern: '',
    h1Protected: '',
    thProtected: '',
    thPlace: '',
    thBrief: '',
    thPicture: '',
    tdHortain: '',
    tdHortainDescription: '',
    tdGaloya: '',
    tdGaloyaDescription: '',
    tdWasgamuwa: '',
    tdwasgamuwaDescription: '',


}


// fetch the JSON data
fetch('conservation.json')
    .then(response => response.json())
    .then(data => {
        localStorage.setItem('conservationPageData', JSON.stringify(data));
        loadDataFromLocalStorage();
    })
    .catch(error => console.error('Error fetching data:', error));
// end of the introduction section
function loadDataFromLocalStorage() {
    const storedData = localStorage.getItem("conservationPageData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      conservationData.h1Conservation = parsedData.h1Conservation;
      conservationData.h2Conservation = parsedData.h2Conservation;
      conservationData.descriptionConservation = parsedData.descriptionConservation;
      conservationData.h2Responsibilities = parsedData.h2Responsibilities;
      conservationData.descriptionResponsibilities = parsedData.descriptionResponsibilities;
      conservationData.h1Location = parsedData.h1Location;
      conservationData.directonList = parsedData.directonList; // Assuming there's a directonList property in the JSON
      conservationData.h2Location = parsedData.h2Location;
      conservationData.h1Concern = parsedData.h1Concern;
      conservationData.descriptionConcern = parsedData.descriptionConcern;
      conservationData.h1Protected = parsedData.h1Protected;
      conservationData.thProtected = parsedData.thProtected;
      conservationData.thPlace = parsedData.thPlace;
      conservationData.thBrief = parsedData.thBrief;
      conservationData.thPicture = parsedData.thPicture;
      conservationData.tdHortain = parsedData.tdHortain;
      conservationData.tdHortainDescription = parsedData.tdHortainDescription;
      conservationData.tdGaloya = parsedData.tdGaloya;
      conservationData.tdGaloyaDescription = parsedData.tdGaloyaDescription;
      conservationData.tdWasgamuwa = parsedData.tdWasgamuwa;
      conservationData.tdwasgamuwaDescription = parsedData.tdwasgamuwaDescription;


      console.log("Data loaded from local storage:", conservationData);
    } else {
      console.log("No data found in local storage.");
    }
};
// end of the introduction section

// Get reference to the login dialog
const loginDialog = document.getElementById('login-dialog');

// Function to show the login dialog
function showLoginDialog() {
  loginDialog.showModal();


  // Set dialog title dynamically
  const dialogTitle = document.getElementById('dialogTitle');
  dialogTitle.innerText = document.getElementById('conservationH1').innerText;

  const dialogTitle2 = document.getElementById('dialogTitle2');
  dialogTitle2.innerText = document.getElementById('conservationH2').innerText;

  const descriptionP = document.getElementById('descriptionP');
  descriptionP.innerText = document.getElementById('conservationDescription').innerText;

  const dialogTitle3 = document.getElementById('dialogTitle3');
  dialogTitle3.innerText = document.getElementById('responsiblitiesH2').innerText;

  const descriptionP2 = document.getElementById('descriptionP2');
  descriptionP2.innerText = document.getElementById('responsiblitiesP').innerText;

  const dialogTitle4 = document.getElementById('dialogTitle4');
  dialogTitle4.innerText = document.getElementById('locationH1').innerText;

  const dialogTitle5 = document.getElementById('dialogTitle5');
  dialogTitle5.innerText = document.getElementById('locationH2').innerText;

  const loctionList = document.getElementById('loctionList');
  loctionList.innerText = document.getElementById('loctionList1').innerText;

  const dialogTitle6 = document.getElementById('dialogTitle6');
  dialogTitle6.innerText = document.getElementById('concernH1').innerText;

  const descriptionP3 = document.getElementById('descriptionP3');
  descriptionP3.innerText = document.getElementById('descripConcern').innerText;

  document.getElementById("parktableEdit").value = document.getElementById("parktable").innerText;
  document.getElementById("factTableEdit").value = document.getElementById("factTable").innerText;
  document.getElementById("hortainTableEdit").value = document.getElementById("hortainTable").innerText;
  document.getElementById("hortonDescrptionEdit").value = document.getElementById("hortonDescrption").innerText;

  document.getElementById("galoyaTableEdit").value = document.getElementById("galoyaTable").innerText;
  document.getElementById("tdGaloyaDescriptionEdit").value = document.getElementById("galoyaDecription").innerText;
  document.getElementById("wasgamuwaTableEdit").value = document.getElementById("wasgamuwaTable").innerText;
  document.getElementById("tdwasgamuwaDescriptionEdit").value = document.getElementById("wasgamuwaBrief").innerText;


}


//funtioning the dilog buttons
const btnSubmit = document.getElementById("btn");
btnSubmit.addEventListener("click", editTitle);

const btnClose = document.getElementById("btnClose");
btnClose.addEventListener("click", closeDialog);

function editTitle() {
  const newTitle = document.getElementById("dialogTitle").innerText;
  conservationData.h1Conservation = newTitle;

  const newTitle2 = document.getElementById("dialogTitle2").innerText;
  conservationData.h2Conservation = newTitle2;

  const newTitle3 = document.getElementById("descriptionP").innerText;
  conservationData.descriptionConservation = newTitle3;

  const newTitle4 = document.getElementById("dialogTitle3").innerText;
  conservationData.h2Responsibilities = newTitle4;

  const newTitle5 = document.getElementById("descriptionP2").innerText;
  conservationData.descriptionResponsibilities = newTitle5;

  const newTitle6 = document.getElementById("dialogTitle4").innerText;
  conservationData.h1Location = newTitle6;

  const newTitle7 = document.getElementById("dialogTitle5").innerText;
  conservationData.h2Location = newTitle7;

  const newTitle8 = document.getElementById("loctionList").innerText;
  conservationData.directonList = newTitle8;

  const newTitle9 = document.getElementById("dialogTitle6").innerText;
  conservationData.h1Concern = newTitle9;

  const newTitle10 = document.getElementById("descriptionP3").innerText;
  conservationData.descripConcern = newTitle10;

  var newTabletitle1 = document.getElementById("parktableEdit").value;
  var newTabletitle2 = document.getElementById("factTableEdit").value;
  var newTabletitle4 = document.getElementById("hortainTableEdit").value;
  var newTabletitle5 = document.getElementById("hortonDescrptionEdit").value;
  
  var newTabletitle6 = document.getElementById("galoyaTableEdit").value;
  var newTabletitle7 = document.getElementById("tdGaloyaDescriptionEdit").value;
  var newTabletitle8 = document.getElementById("wasgamuwaTableEdit").value;
  var newTabletitle9 = document.getElementById("tdwasgamuwaDescriptionEdit").value;



  document.title = newTitle; // Change the document title

  localStorage.setItem("conservationPageData", JSON.stringify(conservationData)); // Update local storage

  document.getElementById("conservationH1").innerText = newTitle;
  document.getElementById("conservationH2").innerText = newTitle2;
  document.getElementById("conservationDescription").innerText = newTitle3;
  document.getElementById("responsiblitiesH2").innerText = newTitle4;
  document.getElementById("responsiblitiesP").innerText = newTitle5;
  document.getElementById("locationH1").innerText = newTitle6;
  document.getElementById("locationH2").innerText = newTitle7;
  document.getElementById("loctionList1").innerText = newTitle8;
  document.getElementById("concernH1").innerText = newTitle9;
  document.getElementById("descripConcern").innerText = newTitle10;

  document.getElementById("parktable").innerText = newTabletitle1;
  document.getElementById("factTable").innerText = newTabletitle2;
  document.getElementById("hortainTable").innerText = newTabletitle4;
  document.getElementById("hortonDescrption").innerText = newTabletitle5;

  document.getElementById("galoyaTable").innerText = newTabletitle6;
  document.getElementById("galoyaDecription").innerText = newTabletitle7;
  document.getElementById("wasgamuwaTable").innerText = newTabletitle8;
  document.getElementById("wasgamuwaBrief").innerText = newTabletitle9;



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
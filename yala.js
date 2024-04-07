// yala section 
const yala = {
    h1AboutYala: '',
    h2AboutYala: '',
    descriptionAboutYala: '',
    h2WildlifeYala: '',
    descriptionWildlifeYala: '',
    h1OurEndemic: '',
    h2OurEndemic: '',
    animalList: [],
    h2Birdlife: '',
    descriptionBirdlife: '',
    h2Reptiles: '',
    descriptionReptiles: '',
    h1Adventures: '',
    h3JeepSafari: '',
    h3JeepSafari2: '',
    descriptionJeepSafari: '',
    
    h3Accommodation: '',
    h3Accommodation2: '',
    descriptionAccommodation: '',
    
    h3Camping: '',
    h3Camping2: '',
    descriptionCamping: '',
    h1OurRequest: '',
    h1Remember: '',
    rulesList:[],
}


// fetch the JSON data
fetch('yala.json')
  .then(response => response.json())
  .then(data => {

    localStorage.setItem('yalaPageData', JSON.stringify(data));
    loadDataFromLocalStorage(); // Call the function to load data after storing

  })



  .catch(error => console.error('Error fetching data:', error));

//   call data from the local storage 
  function loadDataFromLocalStorage() {
    const storedData = localStorage.getItem("yalaPageData");
    if (storedData) {
        const parsedData = JSON.parse(storedData);
        yala.h1AboutYala = parsedData.h1AboutYala;
        yala.h2AboutYala = parsedData.h2AboutYala;
        yala.descriptionAboutYala = parsedData.descriptionAboutYala;
        yala.h2WildlifeYala = parsedData.h2WildlifeYala;
        yala.descriptionWildlifeYala = parsedData.descriptionWildlifeYala;
        yala.h1OurEndemic = parsedData.h1OurEndemic;
        yala.h2OurEndemic = parsedData.h2OurEndemic;
        yala.animalList = parsedData.animalList;

        yala.h2Birdlife = parsedData.h2Birdlife;
        yala.descriptionBirdlife = parsedData.descriptionBirdlife;
        yala.h2Reptiles = parsedData.h2Reptiles;
        yala.descriptionReptiles = parsedData.descriptionReptiles;
        yala.h1Adventures = parsedData.h1Adventures;
        yala.h3JeepSafari = parsedData.h3JeepSafari;

        yala.h3JeepSafari2 = parsedData.h3JeepSafari2;
        yala.descriptionJeepSafari = parsedData.descriptionJeepSafari;
        yala.h3Accommodation = parsedData.h3Accommodation;
        yala.h3Accommodation2 = parsedData.h3Accommodation2;

        yala.descriptionAccommodation = parsedData.descriptionAccommodation;
        yala.h3Camping = parsedData.h3Camping;
        yala.h3Camping2 = parsedData.h3Camping2;
        yala.descriptionCamping = parsedData.descriptionCamping;
        yala.rulesList = parsedData.rulesList;
        yala.h1OurRequest = parsedData.h1OurRequest;
        yala.h1Remember = parsedData.h1Remember;
        console.log("Data loaded from local storage:", yala);
    } else {
      console.log("No data found in local storage.");
  
    }
  };
// end of the Wilpattu section



  // Get reference to the login dialog
  const popUpLogin = document.getElementById('login-dialog');

  // Function to show the login dialog
  function showLoginDialog() {
      popUpLogin.showModal();
  }
  
  $(document).ready(function() {
      function openPopUp() {
          popUpLogin.showModal(); // Call the function to show the dialog
          var existingContent = $('#editableContent').html();
          $('#editedContent').val(existingContent);
      }
  
      function saveEdit() {
          var editedContent = $('#editedContent').val();
          $('#editableContent').html(editedContent);
          popUpLogin.close(); // Close the dialog after saving
          // Save data to localStorage
          localStorage.setItem('editedContent', editedContent);
      }
  
      $('#editButton').click(function() {
          $('#editedContent').val(''); // Clear the edited content
          openPopUp();
      });
  
      $('#btnSave').click(function() {
          saveEdit();
      });
  
      $('#btnClose').click(function() {
          popUpLogin.close(); // Close the dialog if close button is clicked
      });
  });


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


// Introduction section 
const wilpattu = {
    h1AboutWilpattu: '',
    h2AboutWilpattu: '',
    descriptionAboutWilpattu: '',
    h2WildlifeWilpattu: '',
    descriptionWilpattu: '',
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
    h3Tour: '',
    h3Tour2: '',
    descriptionTour: '',    
    h3Camping: '',
    h3Camping2: '',
    descriptionCamping: '',
    h1OurRequest: '',
    h1Remember: '',
    rulesList:[]
};


// fetch the JSON data
fetch('wilpattu.json')
    .then(response => response.json())
    .then(data => {
 localStorage.setItem('wilpattuPageData', JSON.stringify(data));
 loadDataFromLocalStorage(); // Call the function to load data after storing

})
    .catch(error => console.error('Error fetching data:', error));
// end of the introduction section


//   call data from the local storage 

function loadDataFromLocalStorage() {
    const storedData = localStorage.getItem("wilpattuPageData");
    if (storedData) {
        const parsedData = JSON.parse(storedData);

        wilpattu.h1AboutWilpattu = parsedData.h1AboutWilpattu;
        wilpattu.h2AboutWilpattu = parsedData.h2AboutWilpattu;
        wilpattu.descriptionAboutWilpattu = parsedData.descriptionAboutWilpattu;
        wilpattu.h2WildlifeWilpattu = parsedData.h2WildlifeWilpattu;
        wilpattu.descriptionWilpattu = parsedData.descriptionWilpattu;
        wilpattu.h1OurEndemic = parsedData.h1OurEndemic;
        wilpattu.h2OurEndemic = parsedData.h2OurEndemic;
        wilpattu.animalList = parsedData.animalList;
        wilpattu.h2Birdlife = parsedData.h2Birdlife;
        wilpattu.descriptionBirdlife = parsedData.descriptionBirdlife;
        wilpattu.h2Reptiles = parsedData.h2Reptiles;
        wilpattu.descriptionReptiles = parsedData.descriptionReptiles;
        wilpattu.h1Adventures = parsedData.h1Adventures;
        wilpattu.h3JeepSafari = parsedData.h3JeepSafari;
        wilpattu.h3JeepSafari2 = parsedData.h3JeepSafari2;
        wilpattu.descriptionJeepSafari = parsedData.descriptionJeepSafari;
        wilpattu.h3Tour = parsedData.h3Tour;
        wilpattu.h3Tour2 = parsedData.h3Tour2;
        wilpattu.descriptionTour = parsedData.descriptionTour;
        wilpattu.h3Camping = parsedData.h3Camping;
        wilpattu.h3Camping2 = parsedData.h3Camping2;
        wilpattu.descriptionCamping = parsedData.descriptionCamping;
        wilpattu.rulesList = parsedData.rulesList;
        wilpattu.h1OurRequest = parsedData.h1OurRequest;
        wilpattu.h1Remember = parsedData.h1Remember;
        console.log("Data loaded from local storage:", wilpattu);
    } else {
      console.log("No data found in local storage.");
  
    }
  };
// end of the yala section



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
  
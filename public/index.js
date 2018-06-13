
function insertNewParticipant(twitText, twitAuthor){

  var newParticipant = Handlebars.templates.addNewParticipant;
  
  var participantContexts = newParticipant({

    text: twitText,
    author: twitAuthor

  });

  var appContainer = document.querySelector('.participants-container');
  
  appContainer.insertAdjacentHTML('beforeend', participantContexts);
}

var applicationsArray = [];

function handleModalAcceptClick(){

  var fName = document.getElementById('first-name').value;
  var lName = document.getElementById('last-name').value;
  var email = document.getElementById('email-address').value;
  var phone = document.getElementById('phone-number').value;
  var cName = document.getElementById('college-name').value;
  var cMajor = document.getElementById('college-major').value;
  var gYear = document.getElementById('grad-year').value;
  var sex = document.getElementById('gender').value;
  var race = document.getElementById('race').value;
  var tCity = document.getElementById('from-city').value;
  var cYrs = document.getElementById('college-years').value;

  if (fName && lName && email && phone && cName && cMajor && gYear && sex && 
      race && tCity && cYrs)
  {
    applicationsArray.push({
      first_name: fName,
      last_name: lName,
      email_address: email,
      phone_number: phone,
      college_name: cName,
      college_major: cMajor,
      graduation_year: gYear,
      gender: sex,
      race_ethnicity: race,
      travelling_from_city: tCity,
      years_in_college: cYrs
    });

    clearSearchAndReinsertTwits();

    hideCreateTwitModal();
  } 
  else 
    alert('You have one or more missing inputs!');
}

function clearSearchAndReinsertTwits(){
  document.getElementById('navbar-search-input').value = "";
  doSearchUpdate();
}

function showRegistrationForm(){
  var modalBackdrop = document.getElementById('modal-backdrop');
  var registrationModal = document.getElementById('registration-modal');

  modalBackdrop.classList.remove('hidden');
  registrationModal.classList.remove('hidden');
}

function clearRegistrationForm(){
  var registrationFormElements = document.getElementsByClassName('app-input-element');
  
  for(var i = 0; i < registrationFormElements.length; i++)
  {
    var input = registrationFormElements[i].querySelector('input, textarea, form');
    input.value = '';
  }
}

function hideRegistrationForm(){
  var modalBackdrop = document.getElementById('modal-backdrop');
  var registrationModal = document.getElementById('registration-modal');

  modalBackdrop.classList.add('hidden');
  registrationModal.classList.add('hidden');

  clearRegistrationForm();
}

function twitMatchesSearchQuery(twit, searchQuery){
  if (!searchQuery)
    return true;

  searchQuery = searchQuery.trim().toLowerCase();

  return (twit.author + " " + twit.text).toLowerCase().indexOf(searchQuery) >= 0;
}

function doSearchUpdate() {
  var searchQuery = document.getElementById('navbar-search-input').value;

  var twitContainer = document.querySelector('.participants-container');
  if (twitContainer) {
    while (twitContainer.lastChild) {
      twitContainer.removeChild(twitContainer.lastChild);
    }
  }

  /*
   * Loop through the collection of all twits and add twits back into the DOM
   * if they match the current search query.
   */
  allApplications.forEach(function (twit) {
    if (twitMatchesSearchQuery(twit, searchQuery)) {
      insertNewTwit(twit.text, twit.author);
    }
  });

}


/*
 * This function parses an existing DOM element representing a single twit
 * into an object representing that twit and returns that object.  The object
 * is structured like this:
 *
 * {
 *   text: "...",
 *   author: "..."
 * }
 */
function parseTwitElem(twitElem){

  var twit = {};

  var twitTextElem = twitElem.querySelector('.twit-text');
  twit.text = twitTextElem.textContent.trim();

  var twitAttributionLinkElem = twitElem.querySelector('.twit-attribution a');
  twit.author = twitAttributionLinkElem.textContent.trim();

  return twit;
}

function navbarItems(){
  var home = document.getElementById('home');
  var about = document.getElementById('about');
  var schedule = document.getElementById('schedule');
  var faqs = document.getElementById('faqs');
  var sponsors = document.getElementById('sponsors');
  var contacts = document.getElementById('contacts');
}

/*
 * Wait until the DOM content is loaded, and then hook up UI interactions, etc.
 */
window.addEventListener('DOMContentLoaded', function () {

  var twitElemsCollection = document.getElementsByClassName('twit');
  for (var i = 0; i < twitElemsCollection.length; i++) {
    allApplications.push(parseTwitElem(twitElemsCollection[i]));
  }

  var createTwitButton = document.getElementById('create-twit-button');
  if (createTwitButton)
  {
    createTwitButton.addEventListener('click', showRegistrationForm);
  }

  var modalCloseButton = document.querySelector('#create-twit-modal .modal-close-button');
  if (modalCloseButton) {
    modalCloseButton.addEventListener('click', hideCreateTwitModal);
  }

  var modalCancalButton = document.querySelector('#create-twit-modal .modal-cancel-button');
  if (modalCancalButton) {
    modalCancalButton.addEventListener('click', hideCreateTwitModal);
  }

  var modalAcceptButton = document.querySelector('#create-twit-modal .modal-accept-button');
  if (modalAcceptButton) {
    modalAcceptButton.addEventListener('click', handleModalAcceptClick);
  }

  var searchButton = document.getElementById('navbar-search-button');
  if (searchButton) {
    searchButton.addEventListener('click', doSearchUpdate);
  }

  var searchInput = document.getElementById('navbar-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', doSearchUpdate);
  }

});

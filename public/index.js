
document.getElementById('submit-new-registration').addEventListener('click', checkRegistration);

var first = document.getElementById('first-name').value;
var last = document.getElementById('last-name').value;
var city = document.getElementById('from-city').value;
var school = document.getElementById('college-name').value;
var major = document.getElementById('college-major').value;
var email = document.getElementById('email-address').value;
var phone = document.getElementById('phone-number').value;
var bday = document.getElementById('b-day').value;
var gender = document.getElementById('gender').value;
var ethnicity = document.getElementById('race').value;

function checkRegistration()
{
  if(first == "" || last == "" || city == "" || school == "" || major == "" ||
     email == "" || phone == "" || bday == "" || gender == "" || ethnicity == "" )
  {
    alert("You missed a question!");
  }
  else
  {
    console.log("A new participant has registered.");
    addRegistration();
  }
}

function addRegistration()
{
  let request = new XMLHttpRequest();
  let url = "/addParticipant";
  request.open("POST", url);

  let participantData = {
    first: document.getElementById('first-name').value,
    last: document.getElementById('last-name').value,
    city: document.getElementById('from-city').value,
    school: document.getElementById('college-name').value,
    major: document.getElementById('college-major').value,
    email: document.getElementById('email-address').value,
    phone: document.getElementById('phone-number').value,
    bday: document.getElementById('b-day').value,
    gender: document.getElementById('gender').value,
    ethnicity: document.getElementById('race').value
  }

  let requestBody = JSON.stringify(participantData);

  request.addEventListener('load', function(event) {
    if(event.target.status === 200)
    {
      let newParticipant = Handlebars.templates.addNewParticipant;

      let adminParticipantsData = newParticipant({

        //(Contexts used in addNewParticipants.handlebars): (Stored data from server)

        first: first,
        last: last,
        city: city,
        school: schoo,
        major: major,
        email: email,
        phone: phone,
        bday: bday,
        gender: gender,
        ethnicity: ethnicity

      });

      let participantsContainer = document.querySelector('.participants-container');

      participantsContainer.insertAdjacentHTML('beforeend', adminParticipantsData);
    }
    else
    {
      alert("--404-- AdminAccess failed to load Participants Data");
    }
  })

  request.setRequestHeader('Content-Type', 'application/json');
  request.send(requestBody);
}

$( "registration-form" ).submit(function( event )
{
  if ( 
        $( "#first-name" ).val() == "" ||
        $( "#last-name" ).val() == "" ||
        $( "#from-city" ).val() == "" ||
        $( "#college-name" ).val() == "" ||
        $( "#college-major" ).val() == "" ||
        $( "#email-address" ).val() == "" ||
        $( "#phone-number" ).val() == "" ||
        $( "b-day" ).val() == "" ||
        $( "#gender label.active input" ).val() == "" ||
        $( "#race label.active input" ).val() ) 
  {
      alert("You missed a question!"); 
  }
  else
  {
    let request = new XMLHttpRequest();
    let url = "/addParticipant";
    request.open("POST", url);

    let participantData = {
      first: $( "#first-name" ).val(),
      last: $( "#last-name" ).val(),
      city: $( "#from-city" ).val(),
      school: $( "#college-name" ).val(),
      major: $( "#college-major" ).val(),
      email: $( "#email-address" ).val(),
      phone: $( "#phone-number" ).val(),
      bday: $( "#b-day" ).val(),
      gender: $( "#gender label.active input" ).val(),
      ethnicity: $( "#race label.active input" ).val()
    }

    request.setRequestHeader('Content-Type', 'application/json');
    request.send(requestBody);

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
          school: school,
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
    });
  }
});
/*
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
  });

  request.setRequestHeader('Content-Type', 'application/json');
  request.send(requestBody);
}
*/
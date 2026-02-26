var today = new Date();
var thisYear = today.getFullYear();



var footer = document.querySelector('footer');

var copyright = document.createElement('p');
copyright.innerHTML = `© ${thisYear} Oswaldo Criollo Ortiz. All rights reserved.`;

footer.appendChild(copyright);


var skills = ["JavaScript", "HTML", "CSS", "GitHub","C/C++ Programming","Python",
    "Embedded Systems (Raspberry Pi, STM32, ESP32)","Embedded Linux","Circuit Design","TCP/IP Networking",
"Scikit-learn","TensorFlow o PyTorch","OpenCV"];
var skillsSection = document.querySelector('#skills')
var skillsList  = skillsSection.querySelector('ul')

for(var i =0;i< skills.length; i++){
    var skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);

}



/////////////////////////// Chapter 12   //////////////////////

const messageForm = document.querySelector('form[name="leave_message"]');

messageForm.addEventListener('submit', function(event) {
event.preventDefault();

  const name = event.target.usersName.value;
  const email = event.target.usersEmail.value;
  const message = event.target.usersMessage.value;

  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);

            /* Display */
  var messageSection = document.getElementById("messages");
  var messageList = messageSection.querySelector("ul");
  var newMessage  = document.createElement('li');
  

   newMessage.innerHTML = `
      <a href="mailto:${email}">${name}</a>
      <span>${message}</span>
    `;

  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";


  removeButton.addEventListener("click", function () {
    var entry = removeButton.parentNode;
  entry.remove();
});

newMessage.appendChild(removeButton);
messageList.appendChild(newMessage);


event.target.reset();
});


/////////////////////////////// Chapter 13 ///////////////////////////////////////////

fetch("https://api.github.com/users/Oswaldo-Criollo/repos", {
  method: "GET"
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Request failed');
    }
    return response.json(); 
  })
  .then(data => (console.log(data), data)) // check data and return
  .then(function(data) {
    var repositories = data;
    console.log("Repositories:", repositories);

    var projectSection = document.getElementById("projects");
    var projectList = projectSection.querySelector("ul");

    for (let i = 0; i < repositories.length; i++) {
      var project = document.createElement("li");
      project.innerText = repositories[i].name; 
      projectList.appendChild(project); 
    }
  })

  .catch(error => {
    console.error('Check connection an error occurred :', error);
  });
  


let currentStep = 1;
//track the steps which the user is on


function nextStep() { //move to the next step
  const current = document.getElementById('step' + currentStep);
  current.classList.remove('active');
  current.classList.add('left');

  currentStep++;
  const next = document.getElementById('step' + currentStep);
  if (next) {
    next.classList.add('active');
  }
}
//show image preview when a file is selected 
function previewImage(event) {
  const img = document.getElementById('previewImg');
  img.src = URL.createObjectURL(event.target.files[0]);
  img.style.display = "block";
}

function answerLove(isLove) {
  document.getElementById('step5').style.display = "none";
  const chatWindow = document.getElementById('chatWindow');
  chatWindow.style.display = "block";

  const userName = document.getElementById('nameInput').value || "You";
  const crushName = document.getElementById('crushInput').value || "Crush";
  const userMsg = document.getElementById('userMessage');
  const botMsg = document.getElementById('botMessage');
  const crushImage = document.getElementById('crushImage');
  const uploadedFile = document.getElementById('imageUpload').files[0];

//create the text message
  const userText = "I love you.";
  const botText = isLove ? "I love you too!" : "Ansakit por :<";

  userMsg.innerText = `${userName}: ${userText}`;
  botMsg.innerText = "";

  if (uploadedFile) {
    crushImage.src = URL.createObjectURL(uploadedFile);
    crushImage.style.display = "block";
  }

  // Typing delay for the chatbot
  let index = 0;
  function typeWriter() {
    if (index < botText.length) {
      botMsg.innerHTML += botText.charAt(index);
      index++;
      setTimeout(typeWriter, 60);
    }
  }
  typeWriter();
}
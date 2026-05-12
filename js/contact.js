function setActive(element) {
    // Remove 'active' class from all links
    document.querySelectorAll('#shuffle').forEach(link => {
        link.classList.remove('active');
    });

    // Add 'active' class to the clicked link
    element.classList.add('active');
}

function shuffleString(str) {
    return str.split('').sort(() => Math.random() - 0.5).join('');
}

document.querySelectorAll(".nav-bar>ul>li>a").forEach(word => {
    const original = word.textContent;

    word.addEventListener("mouseenter", () => {
        let count = 0;
        const interval = setInterval(() => {
            word.textContent = shuffleString(original);
            count++;
            if (count > 10) {
                clearInterval(interval);
                word.textContent = original;
            }
        }, 10);
    });
});


function shuffleString(str) {
    return str.split('').sort(() => Math.random() - 0.5).join('');
}

document.querySelectorAll(".shuffle-word").forEach(word => {
    const original = word.textContent;

    word.addEventListener("mouseenter", () => {
        let count = 0;
        const interval = setInterval(() => {
            word.textContent = shuffleString(original);
            count++;
            if (count > 10) { // shuffle for ~10 cycles
                clearInterval(interval);
                word.textContent = original; // reset to original
            }
        }, 20); // shuffle speed
    });
});



const words = ["Contact", "Reach Out", "Get in Touch", "Say Hello" ,"Communicate with", "Connect with","get in touch with","Touch base","Approach","Engage with","Get hold of","Drop a line"];
let wordIndex = 0;
const wordElement = document.getElementById("changingWord");

function changeWord() {
  // Get next word
  wordIndex = (wordIndex + 1) % words.length;
  const newWord = words[wordIndex];

  // Split current and new word into letters
  const currentLetters = wordElement.textContent.split("");
  const newLetters = newWord.split("");

  // Make both arrays the same length (padding with spaces)
  const maxLength = Math.max(currentLetters.length, newLetters.length);
  while (currentLetters.length < maxLength) currentLetters.push(" ");
  while (newLetters.length < maxLength) newLetters.push(" ");

  // Animate letter by letter
  currentLetters.forEach((letter, i) => {
    setTimeout(() => {
      wordElement.textContent =
        wordElement.textContent.substring(0, i) +
        newLetters[i] +
        wordElement.textContent.substring(i + 1);
    }, i * 50); // delay per letter
  });
}

// Change word every 2 seconds
setInterval(changeWord, 1500);

// Email.js initialization
const emailServiceID = 'service_YOUR_SERVICE_ID'; // Replace with your service ID
const emailTemplateID = 'template_YOUR_TEMPLATE_ID'; // Replace with your template ID
const emailUserID = 'YOUR_PUBLIC_KEY'; // Replace with your public key

// Initialize Email.js
emailjs.init(emailUserID);

// Form submission handler
document.getElementById('box').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const button = document.getElementById('button');
    button.value = 'Sending...';
    button.disabled = true;
    
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Prepare email parameters
    const templateParams = {
        to_email: 'senthilaravinth0110@gmail.com',
        from_name: fullname,
        from_email: email,
        message: message
    };
    
    // Send email
    emailjs.send(emailServiceID, emailTemplateID, templateParams)
        .then(function(response) {
            console.log('Email sent successfully!', response);
            alert('Message sent successfully! I will get back to you soon.');
            document.getElementById('box').reset();
            button.value = 'Contact us';
            button.disabled = false;
        }, function(error) {
            console.error('Failed to send email:', error);
            alert('Failed to send message. Please try again.');
            button.value = 'Contact us';
            button.disabled = false;
        });
});

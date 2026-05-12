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

// Form submission handler for success modal
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Show success modal
  const modal = document.getElementById('successModal');
  modal.classList.add('show');
  
  // Submit the form data to FormSubmit
  fetch(this.action, {
    method: this.method,
    body: new FormData(this)
  }).then(response => {
    // Modal stays open for 3 seconds before closing
    setTimeout(() => {
      // Close modal and redirect
      modal.classList.remove('show');
      window.location.href = this.getAttribute('action');
    }, 3000);
  }).catch(error => {
    console.error('Error:', error);
    modal.classList.remove('show');
  });
});

// Close modal button handler
document.getElementById('closeModal').addEventListener('click', function() {
  const modal = document.getElementById('successModal');
  modal.classList.remove('show');
});


 const words = ["Premium", "Awesome", "Posh", "Astonishing", "Marvelous", "Majestic", "Wonderful", "Fabulous", "Fantastic", "Incredible", "Mathematical", "First-rate", "Fine", "Well-made", "Perfect", "Divine", "Sublime", "Solid", "Neat", "Superior", "Shining", "Dazzling", "Stunning", "Impressive", "Exquisite", "Elegant", "Classy", "Chic", "Stylish"];
        let index = 0;
        const wordElement = document.getElementById("changingWord");

        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        function scrambleToWord(newWord) {
            let current = wordElement.textContent.padEnd(newWord.length, " ");
            let frame = 0;
            const interval = setInterval(() => {
                let output = "";
                let complete = true;
                for (let i = 0; i < newWord.length; i++) {
                    if (frame > i * 3) { // Controls when each letter locks in
                        output += newWord[i];
                    } else {
                        output += letters[Math.floor(Math.random() * letters.length)];
                        complete = false;
                    }
                }
                wordElement.textContent = output;
                frame++;
                if (complete) clearInterval(interval);
            }, 15);
        }


        // Function to change the word every 2 seconds

        function changeWord() {
            scrambleToWord(words[index]);
            index = (index + 1) % words.length;
        }

        // Start
        wordElement.textContent = "";
        changeWord();
        setInterval(changeWord, 2000);
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        // Get today's date
        const today = new Date();

        // Get day name
        const dayName = days[today.getDay()];

        // Display in the HTML
        document.getElementById("day").textContent = dayName;




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
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
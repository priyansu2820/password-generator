function generatePassword() {
        const useName = document.getElementById("useName").checked;
        const userName = document.getElementById("userName").value;
        const length = parseInt(document.getElementById("length").value, 10);
        const uppercase = document.getElementById("uppercase").checked;
        const lowercase = document.getElementById("lowercase").checked;
        const digits = document.getElementById("digits").checked;
        const symbols = document.getElementById("symbols").checked;
    
        if (useName) {
            if (!userName) {
                alert("Please enter your name.");
                return;
            }
            generatePasswordWithName(userName, length, uppercase, lowercase, digits, symbols);
        } else {
            generateRegularPassword(length, uppercase, lowercase, digits, symbols);
        }
    }
    
    function generatePasswordWithName(name, length, uppercase, lowercase, digits, symbols) {
        let characters = "";
        if (uppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (lowercase) characters += "abcdefghijklmnopqrstuvwxyz";
        if (digits) characters += "0123456789";
        if (symbols) characters += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    
        if (characters.length === 0) {
            alert("Please select at least one character set.");
            return;
        }
    
        let password = name;
        let remainingLength = length - name.length;
    
        if (remainingLength > 0) {
            for (let i = 0; i < remainingLength; i++) {
                const randomIndex = Math.floor(Math.random() * characters.length);
                password += characters.charAt(randomIndex);
            }
        }
    
        document.getElementById("password").value = password;
    }
    
    function generateRegularPassword(length, uppercase, lowercase, digits, symbols) {
        let characters = "";
        if (uppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (lowercase) characters += "abcdefghijklmnopqrstuvwxyz";
        if (digits) characters += "0123456789";
        if (symbols) characters += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    
        if (characters.length === 0) {
            alert("Please select at least one character set.");
            return;
        }
    
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters.charAt(randomIndex);
        }
    
        document.getElementById("password").value = password;
    }
    
    // Event listener to show/hide the name input
    document.getElementById("useName").addEventListener("change", function() {
        document.getElementById("userName").style.display = this.checked ? "block" : "none";
    });
    
    // Dark Mode Toggle
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;
    const divContainer = document.querySelector(".div-container");
    const inputs = document.querySelectorAll("input[type='number'], #password, #userName");
    const labels = document.querySelectorAll("label");
    const credit = document.querySelector(".credit");
    
    function toggleDarkMode() {
        body.classList.toggle("dark-mode");
        divContainer.classList.toggle("dark-mode");
        darkModeToggle.classList.toggle("dark-mode");
        credit.classList.toggle("dark-mode");
    
        inputs.forEach(input => {
            input.classList.toggle("dark-mode");
        });
    
        labels.forEach(label => {
            label.classList.toggle("dark-mode");
        });
    
        // Update the emoji
        if (body.classList.contains("dark-mode")) {
            darkModeToggle.textContent = " "; // Sun emoji for light mode
        } else {
            darkModeToggle.textContent = " "; // Moon emoji for dark mode
        }
    }
    
    darkModeToggle.addEventListener("click", toggleDarkMode);
    
    // Set initial emoji based on dark mode state (if any)
    if (body.classList.contains("dark-mode")) {
        darkModeToggle.textContent = " ";
    } else {
        darkModeToggle.textContent = " ";
    }
    
    // Password Pulse Animation (Optional)
    function generatePassword() {
        const useName = document.getElementById("useName").checked;
        const userName = document.getElementById("userName").value;
        const length = parseInt(document.getElementById("length").value, 10);
        const uppercase = document.getElementById("uppercase").checked;
        const lowercase = document.getElementById("lowercase").checked;
        const digits = document.getElementById("digits").checked;
        const symbols = document.getElementById("symbols").checked;
    
        if (useName) {
            if (!userName) {
                alert("Please enter your name.");
                return;
            }
            generatePasswordWithName(userName, length, uppercase, lowercase, digits, symbols);
        } else {
            generateRegularPassword(length, uppercase, lowercase, digits, symbols);
        }
    
        // Add pulse animation to password field
        const passwordInput = document.getElementById("password");
        passwordInput.classList.add("pulse-animation");
        setTimeout(() => {
            passwordInput.classList.remove("pulse-animation");
        }, 500); // Remove after 0.5 seconds
    }
    
    // Cursor Ripple Effect
    body.addEventListener("click", (event) => {
        const ripple = document.createElement("span");
        ripple.classList.add("ripple");
        body.appendChild(ripple);
    
        ripple.style.left = event.clientX - ripple.offsetWidth / 2 + "px";
        ripple.style.top = event.clientY - ripple.offsetHeight / 2 + "px";
    
        ripple.addEventListener("animationend", () => {
            ripple.remove();
        });
    });
    
    // ... your existing JavaScript code ...
    
    // ... your existing JavaScript code ...
    
    // Particle Effect (Smooth Animation)
    body.addEventListener("mousemove", (event) => {
        createParticle(event.clientX, event.clientY);
    });
    
    function createParticle(x, y) {
        const particle = document.createElement("span");
        particle.classList.add("particle");
        body.appendChild(particle);
    
        particle.style.left = x + "px";
        particle.style.top = y + "px";
    
        const size = Math.random() * 4 + 2; // Very small size
        particle.style.width = size + "px";
        particle.style.height = size + "px";
    
        // Dynamic color based on dark mode
        if (body.classList.contains("dark-mode")) {
            particle.style.backgroundColor = "rgba(255, 255, 255, 0.4)"; // White for dark mode, slightly more transparent
        } else {
            particle.style.backgroundColor = "rgba(0, 0, 0, 0.4)"; // Black for light mode, slightly more transparent
        }
    
        particle.style.borderRadius = "50%"; // Ensure perfect circle
        particle.style.filter = "blur(1px)"; // Add subtle blur
    
        const animationDuration = Math.random() * 800 + 500; // Slightly longer animation
        particle.style.animationDuration = animationDuration + "ms";
    
        particle.addEventListener("animationend", () => {
            particle.remove();
        });
    }
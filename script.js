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
        darkModeToggle.textContent = "☀️"; // Sun emoji for light mode
    } else {
        darkModeToggle.textContent = "🌙"; // Moon emoji for dark mode
    }

    // Store dark mode preference in local storage
    localStorage.setItem("darkMode", body.classList.contains("dark-mode"));
}

darkModeToggle.addEventListener("click", toggleDarkMode);

// Set initial dark mode state from local storage or system preference
const storedDarkMode = localStorage.getItem("darkMode");

// Check if Dark mode is already set in local storage.
if (storedDarkMode === "true") {
    body.classList.add("dark-mode");
    toggleDarkMode();
} else if (storedDarkMode === null && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.add("dark-mode");
    toggleDarkMode();
}

// ... your existing JavaScript ...

function createFloatingElements() {
    const backgroundElements = document.querySelector(".background-elements");
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 50; i++) { // Generate 50 elements
        const element = document.createElement("span");
        element.textContent = characters.charAt(Math.floor(Math.random() * characters.length));

        // Random position and animation delay
        element.style.left = Math.random() * 100 + "vw";
        element.style.top = Math.random() * 100 + "vh";
        element.style.animationDelay = Math.random() * 10 + "s";

        backgroundElements.appendChild(element);
    }
}

createFloatingElements();

function generatePassword() {
    const useName = document.getElementById("useName").checked;
    const userName = document.getElementById("userName").value;
    const length = parseInt(document.getElementById("length").value, 10);
    const uppercase = document.getElementById("uppercase").checked;
    const lowercase = document.getElementById("lowercase").checked;
    const digits = document.getElementById("digits").checked;
    const symbols = document.getElementById("symbols").checked;
    const excludeSimilar = document.getElementById("excludeSimilar").checked;

    if (useName) {
        if (!userName) {
            alert("Please enter your name.");
            return;
        }
        generatePasswordWithName(userName, length, uppercase, lowercase, digits, symbols, excludeSimilar);
    } else {
        generateRegularPassword(length, uppercase, lowercase, digits, symbols, excludeSimilar);
    }
    const generatedPassword = document.getElementById("password").value;
    updatePasswordStrength(generatedPassword);
}

function generatePasswordWithName(name, length, uppercase, lowercase, digits, symbols, excludeSimilar) {
    let characters = "";
    if (uppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) characters += "abcdefghijklmnopqrstuvwxyz";
    if (digits) characters += "0123456789";
    if (symbols) characters += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

    if (excludeSimilar) {
        characters = characters.replace(/[l1IO0]/g, '');
    }

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

function generateRegularPassword(length, uppercase, lowercase, digits, symbols, excludeSimilar) {
    let characters = "";
    if (uppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) characters += "abcdefghijklmnopqrstuvwxyz";
    if (digits) characters += "0123456789";
    if (symbols) characters += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

    if (excludeSimilar) {
        characters = characters.replace(/[l1IO0]/g, '');
    }

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
        darkModeToggle.textContent = "☀️";
    } else {
        darkModeToggle.textContent = "🌙";
    }

    localStorage.setItem("darkMode", body.classList.contains("dark-mode"));
}

darkModeToggle.addEventListener("click", toggleDarkMode);

const storedDarkMode = localStorage.getItem("darkMode");

if (storedDarkMode === "true") {
    body.classList.add("dark-mode");
    toggleDarkMode();
} else if (storedDarkMode === null && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.add("dark-mode");
    toggleDarkMode();
}

// Floating Elements
function createFloatingElements() {
    const backgroundElements = document.querySelector(".background-elements");
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 50; i++) {
        const element = document.createElement("span");
        element.textContent = characters.charAt(Math.floor(Math.random() * characters.length));

        element.style.left = Math.random() * 100 + "vw";
        element.style.top = Math.random() * 100 + "vh";
        element.style.animationDelay = Math.random() * 10 + "s";

        backgroundElements.appendChild(element);
    }
}

createFloatingElements();

function copyPassword() {
    const passwordInput = document.getElementById("password");
    passwordInput.select();
    document.execCommand("copy");
    document.getElementById('clipboardConfirmation').style.display = 'block';
    setTimeout(function() {
        document.getElementById('clipboardConfirmation').style.display = 'none';
    }, 2000);
}

function updatePasswordStrength(password) {
    let strength = calculatePasswordStrength(password);
    const strengthDiv = document.getElementById("passwordStrength");
    if (strength < 30) {
        strengthDiv.textContent = "Weak";
        strengthDiv.style.color = "red";
    } else if (strength < 70) {
        strengthDiv.textContent = "Medium";
        strengthDiv.style.color = "orange";
    } else {
        strengthDiv.textContent = "Strong";
        strengthDiv.style.color = "green";
    }
}

function calculatePasswordStrength(password) {
    let strength = 0;
    if (password.length >= 8) strength += 20;
    if (password.match(/[a-z]/)) strength += 20;
    if (password.match(/[A-Z]/)) strength += 20;
    if (password.match(/[0-9]/)) strength += 20;
    if (password.match(/[^a-zA-Z0-9]/)) strength += 20;
    return strength;
}

let passwordVisible = false;

function togglePasswordVisibility() {
    const passwordInput = document.getElementById("password");
    const visibilityIcon = document.getElementById("visibilityIcon");

    if (passwordVisible) {
        passwordInput.type = "password";
        visibilityIcon.classList.remove("fa-eye");
        visibilityIcon.classList.add("fa-eye-slash");
    } else {
        passwordInput.type = "text";
        visibilityIcon.classList.remove("fa-eye-slash");
        visibilityIcon.classList.add("fa-eye");
    }
    passwordVisible = !passwordVisible;
}

function regeneratePassword() {
    generatePassword();
}

// Event Listeners (Corrected)
document.getElementById("generateButton").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission
    generatePassword();
});
document.querySelector(".copy-button").addEventListener("click", copyPassword);
document.querySelector(".regenerate-button").addEventListener("click", regeneratePassword);
document.querySelector(".visibility-button").addEventListener("click", togglePasswordVisibility);
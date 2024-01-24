function checkPasswordStrength() {
    const password = document.getElementById('password').value;
    const strengthBar = document.getElementById('strengthBar');
    const strengthText = document.getElementById('strengthText');

    // Reset the bar and text
    strengthBar.style.width = '0%';
    strengthText.textContent = '';

    // Minimum 8 characters
    if (password.length < 8) {
        strengthText.textContent = 'Password must be at least 8 characters long';
        return;
    }

    let strength = 0;

    // Check for uppercase letters
    if (/[A-Z]/.test(password)) {
        strength++;
    }

    // Check for lowercase letters
    if (/[a-z]/.test(password)) {
        strength++;
    }

    // Check for numbers
    if (/\d/.test(password)) {
        strength++;
    }

    // Calculate the percentage of password strength
    const percentage = (strength / 3) * 100;

    // Update the bar and text
    strengthBar.style.width = percentage + '%';
    setStrengthText(percentage);
}

function setStrengthText(percentage) {
    const strengthText = document.getElementById('strengthText');

    if (percentage < 33.33) {
        strengthText.textContent = 'Weak';
        strengthText.style.color = '#e74c3c';
    } else if (percentage < 66.66) {
        strengthText.textContent = 'Moderate';
        strengthText.style.color = '#f39c12';
    } else {
        strengthText.textContent = 'Strong';
        strengthText.style.color = '#2ecc71';
    }
}

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}
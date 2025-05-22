document.addEventListener("DOMContentLoaded", function() {
    const roles = ["UI/UX Designer", "Front-end Developer"];
    let currentRoleIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    let deletingSpeed = 50;
    const roleElement = document.getElementById("roleText");

    function type() {
        if (isDeleting) {
            // Delete characters
            if (currentCharIndex > 0) {
                currentCharIndex--;
                roleElement.textContent = roles[currentRoleIndex].substring(0, currentCharIndex);
                setTimeout(type, deletingSpeed);
            } else {
                // Move to next role
                isDeleting = false;
                currentRoleIndex = (currentRoleIndex + 1) % roles.length;
                setTimeout(type, typingSpeed);
            }
        } else {
            // Type characters
            if (currentCharIndex < roles[currentRoleIndex].length) {
                currentCharIndex++;
                roleElement.textContent = roles[currentRoleIndex].substring(0, currentCharIndex);
                setTimeout(type, typingSpeed);
            } else {
                // Pause before deleting
                isDeleting = true;
                setTimeout(type, 1000); // Pause before deleting
            }
        }
    }

    // Start the typing animation
    type();
});

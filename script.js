<script>
// Toggle Password Visibility
function togglePassword() {
    const passwordField = document.getElementById('new-password');
    const confirmPasswordField = document.getElementById('confirm-password');
    const type = passwordField.type === 'password' ? 'text' : 'password';
    passwordField.type = type;
    confirmPasswordField.type = type;
}

// Show notification after an update (Profile settings)
function showNotification(message) {
    alert(message);
}

// Handle form submission (simple alert)
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission
    showNotification('Settings updated successfully!');
}
</script>

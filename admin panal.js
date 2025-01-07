<script>
// Deactivate user
function deactivateUser(userId) {
    if (confirm('Are you sure you want to deactivate this user?')) {
        document.getElementById(`user-${userId}`).innerHTML = 'Deactivated';
        alert(`User ${userId} deactivated successfully.`);
    }
}

// Delete user
function deleteUser(userId) {
    if (confirm('Are you sure you want to delete this user? This action cannot be undone.')) {
        document.getElementById(`user-${userId}`).remove();
        alert(`User ${userId} deleted successfully.`);
    }
}

// View user details (simple alert for demonstration)
function viewUserDetails(userId) {
    alert(`Viewing details for User ID: ${userId}`);
}
</script>

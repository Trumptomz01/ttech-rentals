const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm_password');
const errorMessage = document.getElementById('error_message');
confirmPasswordInput.addEventListener('input',() => {
    if (passwordInput.value !== confirmPasswordInput.value){
        errorMessage.textContent = 'Password Not Match!';
        // errorMessage.style.color = 'red';
        errorMessage.style.size= '10';
    }
    else{
        errorMessage.textContent = '';
    }
});

function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}
function closeSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}
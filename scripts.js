// script.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('message-form');
    const confirmationSection = document.getElementById('confirmation-section');
    const confirmDetails = document.getElementById('confirm-details');
    const confirmButton = document.getElementById('confirm-button');
    const editButton = document.getElementById('edit-button');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const mobileNumber = document.getElementById('mobile-number').value;
        const message = document.getElementById('message').value;
        const times = document.getElementById('times').value;

        confirmDetails.textContent = `Mobile Number: ${mobileNumber}\nMessage: ${message}\nNumber of Times: ${times}`;
        form.style.display = 'none';
        confirmationSection.style.display = 'block';
    });

    confirmButton.addEventListener('click', () => {
        const mobileNumber = document.getElementById('mobile-number').value;
        const message = document.getElementById('message').value;
        const times = parseInt(document.getElementById('times').value, 10);

        for (let i = 0; i < times; i++) {
            sendMessage(mobileNumber, message);
        }

        alert('Messages sent successfully!');
        form.reset();
        form.style.display = 'block';
        confirmationSection.style.display = 'none';
    });

    editButton.addEventListener('click', () => {
        form.style.display = 'block';
        confirmationSection.style.display = 'none';
    });

    function sendMessage(mobileNumber, message) {
        // Placeholder function to simulate sending a message
        console.log(`Sending message to ${mobileNumber}: ${message}`);
    }
    
});

// script.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('usage-data-form');
    const alertMessage = document.getElementById('alert-message');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const usageTime = parseFloat(document.getElementById('usage-time').value);
        const productiveTime = parseFloat(document.getElementById('productive-time').value);
        const wasteTime = parseFloat(document.getElementById('waste-time').value);

        if (usageTime > 4) {
            alertMessage.textContent = 'Warning: You are using your mobile for too long. This can harm your eyes.';
        } else {
            alertMessage.textContent = 'Your mobile usage is within a healthy range.';
        }
    });
});

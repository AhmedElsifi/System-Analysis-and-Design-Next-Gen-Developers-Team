document.getElementById('submitPhone').addEventListener('click', function () {
    const phoneInput = document.getElementById('phoneInput');
    const phoneNumber = phoneInput.value.trim();

    if (phoneNumber === '') {
        alert('Please enter your phone number.');
        return;
    }

    alert(`An email has been sent to the phone number: ${phoneNumber}`);
    window.close();
});

document.getElementById('closeWindow').addEventListener('click', function () {
    window.close();
});


// CONTACT FORM FUNCTIONALITY
document.addEventListener('DOMContentLoaded', function () {
    const dialog = document.getElementById('successDialog');
    const closeBtn = document.getElementById('closeSuccessDialog');
    const nextInput = document.getElementById('formNextUrl');

    if (nextInput) {
        const cleanUrl = window.location.origin + window.location.pathname;
        nextInput.value = cleanUrl + '?mensaje=enviado#contact';
    }

    const params = new URLSearchParams(window.location.search);

    if (dialog && params.get('mensaje') === 'enviado') {
        dialog.classList.add('active');

        const cleanUrl = window.location.origin + window.location.pathname + '#contact';
        window.history.replaceState({}, document.title, cleanUrl);
    }

    if (closeBtn && dialog) {
        closeBtn.addEventListener('click', function () {
            dialog.classList.remove('active');
        });

        dialog.addEventListener('click', function (event) {
            if (event.target === dialog) {
                dialog.classList.remove('active');
            }
        });
    }
});

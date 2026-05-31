
// CONTACT FORM FUNCTIONALITY
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.contact-form');
    const dialog = document.getElementById('successDialog');
    const closeBtn = document.getElementById('closeSuccessDialog');

    if (!form || !dialog || !closeBtn) return;

    form.addEventListener('submit', function () {
        setTimeout(function () {
            dialog.classList.add('active');
            form.reset();
        }, 700);
    });

    closeBtn.addEventListener('click', function () {
        dialog.classList.remove('active');
    });

    dialog.addEventListener('click', function (event) {
        if (event.target === dialog) {
            dialog.classList.remove('active');
        }
    });
});

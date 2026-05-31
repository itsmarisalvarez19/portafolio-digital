
// FORMULARIO FUNCIONAL CON WEB3FORMS
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('contactSubmitBtn');

    const successDialog = document.getElementById('successDialog');
    const errorDialog = document.getElementById('errorDialog');

    const closeSuccessDialog = document.getElementById('closeSuccessDialog');
    const closeErrorDialog = document.getElementById('closeErrorDialog');

    function openDialog(dialog) {
        if (dialog) dialog.classList.add('active');
    }

    function closeDialog(dialog) {
        if (dialog) dialog.classList.remove('active');
    }

    if (closeSuccessDialog) {
        closeSuccessDialog.addEventListener('click', function () {
            closeDialog(successDialog);
        });
    }

    if (closeErrorDialog) {
        closeErrorDialog.addEventListener('click', function () {
            closeDialog(errorDialog);
        });
    }

    [successDialog, errorDialog].forEach(function (dialog) {
        if (!dialog) return;
        dialog.addEventListener('click', function (event) {
            if (event.target === dialog) {
                closeDialog(dialog);
            }
        });
    });

    if (!form) return;

    form.addEventListener('submit', async function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        const originalText = submitBtn ? submitBtn.textContent : 'Enviar mensaje';

        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Enviando...';
        }

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();

            if (data.success === true) {
                form.reset();
                openDialog(successDialog);
            } else {
                console.log('Web3Forms error:', data);
                openDialog(errorDialog);
            }
        } catch (error) {
            console.log('Error enviando formulario:', error);
            openDialog(errorDialog);
        } finally {
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');

    const successDialog = document.getElementById('successDialog');
    const errorDialog = document.getElementById('errorDialog');

    const closeDialog = document.getElementById('closeDialog');
    const closeErrorDialog = document.getElementById('closeErrorDialog');

    form.addEventListener('submit', async (e) => {

        e.preventDefault();

        submitBtn.disabled = true;
        submitBtn.innerText = 'Enviando...';

        const formData = new FormData(form);

        try{

            const response = await fetch('https://api.web3forms.com/submit', {
                method:'POST',
                body:formData
            });

            const data = await response.json();

            if(data.success){

                form.reset();
                successDialog.classList.add('active');

            }else{

                errorDialog.classList.add('active');

            }

        }catch(error){

            console.log(error);
            errorDialog.classList.add('active');

        }

        submitBtn.disabled = false;
        submitBtn.innerText = 'Enviar mensaje';

    });

    closeDialog.addEventListener('click', () => {
        successDialog.classList.remove('active');
    });

    closeErrorDialog.addEventListener('click', () => {
        errorDialog.classList.remove('active');
    });

});

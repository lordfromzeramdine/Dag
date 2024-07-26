document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', async function (event) {
        event.preventDefault();

       
        feedbackDiv.textContent = '';
        feedbackDiv.className = 'form-feedback';

        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        if (!data.name || !data.email || !data.message) {
            feedbackDiv.textContent = 'Please fill out all fields.';
            feedbackDiv.className = 'form-feedback error';
            return;
        }

 
        try {
            const response = await fetch('/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                feedbackDiv.textContent = 'Your message has been sent successfully!';
                feedbackDiv.className = 'form-feedback success';
                form.reset(); 
            } else {
                throw new Error('Network response was not ok.');
            }
        } catch (error) {
            feedbackDiv.textContent = 'There was an error sending your message. Please try again later.';
            feedbackDiv.className = 'form-feedback error';
        }
    });
});


document.querySelector('#book-table form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const name = document.getElementById('reserve-name').value;
    const email = document.getElementById('reserve-email').value;
    const phone = document.getElementById('reserve-phone').value;
    const date = document.getElementById('reserve-date').value;
    const time = document.getElementById('reserve-time').value;
    const guests = document.getElementById('reserve-guests').value;

    alert(`Thank you for booking, ${name}! Your table for ${guests} is reserved on ${date} at ${time}. We will send a confirmation to ${email}.`);
    document.getElementById('reserve-name').value = '';
    document.getElementById('reserve-email').value = '';
    document.getElementById('reserve-phone').value = '';
    document.getElementById('reserve-date').value = '';
    document.getElementById('reserve-time').value = '';
    document.getElementById('reserve-guests').value = '';
});


document.querySelector('#contact form').addEventListener('submit', function(event) {
    event.preventDefault();

    
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;

    alert(`Thank you for contacting us, ${name}. We'll respond shortly!`);

    document.getElementById('contact-name').value = '';
    document.getElementById('contact-email').value = '';
    document.getElementById('contact-message').value = '';
});

document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <img src="${item.src}" alt="${item.alt}">
                <span class="close-lightbox">&times;</span>
            </div>`;
        document.body.appendChild(lightbox);

        lightbox.querySelector('.close-lightbox').addEventListener('click', () => {
            document.body.removeChild(lightbox);
        });
    });
});

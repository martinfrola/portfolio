document.addEventListener('DOMContentLoaded', function() {
    formValidation()
})

function formValidation() {
    const submit = document.querySelector('.send-button')
    
    submit.addEventListener('click', e => {
        e.preventDefault()
        const name = document.querySelector('#name')
        const subject = document.querySelector('#subject')
        const message = document.querySelector('#message')
        
        if(name.value === '' | subject.value === '' | message.value === ''){
            
            Swal.fire({
                title: 'Error',
                text: 'Faltan completar algún campo',
                icon: 'error',
                showConfirmButton: false,
                timer: 2000,
              })
            
        } else {
            
            Swal.fire({
                title: 'Enviado',
                text: 'Su mensaje fué enviado correctamente',
                icon: 'success',
                showConfirmButton: false,
                timer: 2000,
              })

            sendEmail();
            name.value = '';
            subject.value = '';
            message.value = '';
        }
        
    })
}

async function sendEmail() {
    
    const data = {
        name : document.querySelector('#name').value,
        subject : document.querySelector('#subject').value,
        message : document.querySelector('#message').value,
    }
    await emailjs.send('martinfrola', 'template_33boq4o', data )
}
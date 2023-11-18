document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var feedbackText = document.getElementById('userMessage').value;
    var userName = document.getElementById('userName').value;
    var userEmail = document.getElementById('userEmail').value;

    var emailjsConfig = {
        serviceID: 'service_kedrtoo',
        templateID: 'template_16rssvj',
        userID: 'Rzu3xYWUR9uHagsCj' 
    };

    emailjs.send(emailjsConfig.serviceID, emailjsConfig.templateID, {
        name: userName,
        email: userEmail,
        message: feedbackText
    }, emailjsConfig.userID)
    .then(function(response) {
        console.log('Feedback enviado com sucesso!', response);
    })
    .catch(function(error) {
        console.error('Erro ao enviar feedback:', error);
    });

    // Limpar o formulário após o envio
    this.reset();
});

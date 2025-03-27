
  document.getElementById("form-contatos").addEventListener("submit", function(event) {
    event.preventDefault();
    
    emailjs.init("9VJ6EQMxeakf0terJ"); // Substitua pelo seu User ID

    const templateParams = {
      from_name: document.getElementById("name").value,
      from_email: document.getElementById("email").value,
      message: document.getElementById("message").value
    };

    emailjs.send("service_jdvlxmr", "template_ascnlli", templateParams)
      .then(response => {
        alert("E-mail enviado com sucesso!");
        console.log("Success:", response);
      })
      .catch(error => {
        alert("Erro ao enviar e-mail!");
        console.error("Error:", error);
      });
  });

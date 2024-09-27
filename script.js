// Bug no botão "Saiba mais"
document.getElementById('learnMoreButton').addEventListener('click', function() {
    let extraInfo = document.getElementById('extraInfo');
    extraInfo.style.display = 'none'; // Bug: O texto deveria aparecer, mas sempre fica oculto.
  });
  
  // Bug no formulário de contato: Envia mesmo com campos vazios
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Deveria impedir o envio sem validação
    alert('Formulário enviado com sucesso!!');
  });
  
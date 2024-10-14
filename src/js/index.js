const formulario = document.getElementById('formulario');

// Adiciona um evento para o envio do formulário
formulario.addEventListener('submit', function (evento) {
    evento.preventDefault(); // Impede o envio automático

    let camposValidos = false;

    // Seleciona todos os inputs e textarea com a classe 'input'
    const campos = document.querySelectorAll('.input');

    // Verifica cada campo
    campos.forEach((campo) => {
        const mensagemErro = campo.nextElementSibling; // Acessa a 'span' correspondente

        if (campo.value.trim() === '') {
            campo.classList.add('invalido');
            mensagemErro.style.display = 'inline';
        } else {
            // Se o campo estiver preenchido, remove os erros, e adiciona a borda verde
            campo.classList.remove('invalido');
            campo.classList.add('valido'); 
            mensagemErro.style.display = 'none'; 
        }
    });

    // Se todos os campos forem válidos, o formulário é enviado
    if (camposValidos) {
        alert('Formulário enviado com sucesso!');
        formulario.submit(); // Envia o formulário
    }
});

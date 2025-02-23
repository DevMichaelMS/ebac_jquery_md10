$(document).ready(function() {
    $('#carousel').slick({
        autoplay:true
    });

    $('.menu-hamb').click(function() {
        $('nav').slideToggle();
    });

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    });

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            veiculo: {
                required: false,
            },
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            telefone: 'Por favor, insira o seu telefone',
            email: 'Por favor, insira o seu email',
            veiculo: 'Por favor, nos diga qual é o veiculo de seu interesse',
            mensagem: 'Por favor, digite sua mensagem acima',
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos!`)
            }
        }
    })

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');

        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);
        

        $(`html`).animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
});
function marcar() {
    //guardando os valores dos inputs
    var txtdia = document.getElementById('dia');
    var dia = txtdia.value;

    var txtnome = document.getElementById('txtnome');
    nome = txtnome.value;

    var txtidade = document.getElementById('txtidade');
    var idade = txtidade.value;

    var txttel = document.getElementById('txttel');
    var tel = txttel.value;

    //verificações dos dados
    if (nome.length == 0 || idade.length == 0 || idade < 0 || tel.length == 0 || tel < 0 || dia.length == 0) {
        alert('Erro no preenchimento dos dados. Tente novamente.')
    }

    //se estiver tudo preenchido corretamente
    else {
        var mar = document.getElementsByName('mar');
        var preco = 0;

        if(mar[0].checked){
            marcacao = 'Consulta Médica'
            preco = 75;

        }
        else if(mar[1].checked){
            marcacao = 'Análises'
            preco = 30;
        }
        else if(mar[2].checked){
            marcacao = 'Ressonância'
            preco = 120;
        }

        res.innerHTML = `Caro Sr./Sra ${nome}, a ${marcacao} está marcada para o dia ${dia} e tem um valor de ${preco} euros.`
        
    }


}
function marcar() {
    
    var txtdia = document.getElementById('dia');
    var dia = txtdia.value;

    var txtnome = document.getElementById('txtnome');
    nome = txtnome.value;

    var txtidade = document.getElementById('txtidade');
    var idade = txtidade.value;

    var txttel = document.getElementById('txttel');
    var tel = txttel.value;


    if (nome.length == 0 || idade.length == 0 || idade < 0 || tel.length == 0 || tel < 0 || dia.length == 0) {
        alert('Erro no preenchimento dos dados. Tente novamente.')
    }

    else {
        var mar = document.getElementsByName('mar');

        if(mar[0].checked){
            marcacao = 'Consulta Médica'
        }
        else if(mar[1].checked){
            marcacao = 'Análises'
        }
        else if(mar[2].checked){
            marcacao = 'Ressonância'
        }

        res.innerHTML = `Caro Sr./Sra ${nome}, a ${marcacao} está marcada para o dia ${dia}.`
        
    }


}
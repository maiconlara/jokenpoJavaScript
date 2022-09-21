let ress = document.getElementById('resultado').innerHTML;
let empate = "Empate!";
let derrota = "Derrota!";
let vitoria = "Vitória!";
let placarEmpate = 0;
let placarDerrota = 0;
let placarVitoria = 0;


function mostrar() {
    var see = document.getElementById('pcchoice');
    if(see.style.display == '' || see.style.display == 'none'){
         see.style.display = 'block';
    }
    var vs = document.getElementById('vsimage');
    if(vs.style.display == '' || vs.style.display == 'none'){
        vs.style.display = 'block';
   }
}

document.getElementById('Pedra').onclick = function(){
    let random = Math.floor(Math.random() * 3);
    switch(random){
        case 0:
            document.getElementById('pcchoice').src="/jokenpo/img/pedra.png";
            document.getElementById('resultado').innerHTML = empate;
            placarEmpate ++;
            document.getElementById('draw').innerHTML = 'Empates: ' + placarEmpate; 
            break;
        case 1:
            document.getElementById('pcchoice').src="/jokenpo/img/papel.png";
            document.getElementById('resultado').innerHTML = derrota;
            placarDerrota ++;
            document.getElementById('lose').innerHTML = 'Derrotas: ' + placarDerrota;
            break;
        case 2:
            document.getElementById('pcchoice').src="/jokenpo/img/tesoura.png";
            document.getElementById('resultado').innerHTML = vitoria;
            placarVitoria ++;
            document.getElementById('win').innerHTML = 'Vitorias: ' + placarVitoria;
            break;
    }

}

document.getElementById('Papel').onclick = function(){
    let random = Math.floor(Math.random() * 3);
    switch(random){
        case 0:
            document.getElementById('pcchoice').src="/jokenpo/img/pedra.png";
            document.getElementById('resultado').innerHTML = vitoria;
            placarVitoria ++;
            document.getElementById('win').innerHTML = 'Vitorias: ' + placarVitoria;
            break;
        case 1:
            document.getElementById('pcchoice').src="/jokenpo/img/papel.png";
            document.getElementById('resultado').innerHTML = empate;
            placarEmpate ++;
            document.getElementById('draw').innerHTML = 'Empates: ' + placarEmpate;
            break;
        case 2:
            document.getElementById('pcchoice').src="/jokenpo/img/tesoura.png";
            document.getElementById('resultado').innerHTML = derrota;
            placarDerrota ++;
            document.getElementById('lose').innerHTML = 'Derrotas: ' + placarDerrota;
            break;
    }

}

document.getElementById('Tesoura').onclick = function(){
    let random = Math.floor(Math.random() * 3);
    switch(random){
        case 0:
            document.getElementById('pcchoice').src="/jokenpo/img/pedra.png";
            document.getElementById('resultado').innerHTML = derrota;
            placarDerrota ++;
            document.getElementById('lose').innerHTML = 'Derrotas: ' + placarDerrota;
            break;
        case 1:
            document.getElementById('pcchoice').src="/jokenpo/img/papel.png";
            document.getElementById('resultado').innerHTML = vitoria;
            placarVitoria ++;
            document.getElementById('win').innerHTML = 'Vitorias: ' + placarVitoria;
            break;
        case 2:
            document.getElementById('pcchoice').src="/jokenpo/img/tesoura.png";
            document.getElementById('resultado').innerHTML = empate;
            placarEmpate ++;
            document.getElementById('draw').innerHTML = 'Empates: ' + placarEmpate;
            break;
    }

}


function resetar(){
    var see = document.getElementById('pcchoice');
    if(see.style.display == 'block' || see.style.display == 'active'){
        see.style.display = 'none';
   }
   var vs = document.getElementById('vsimage');
    if(vs.style.display == 'block' || vs.style.display == 'active'){
        vs.style.display = 'none';
   }
    document.getElementById('resultado').innerHTML = "";
    document.getElementById('pcchoice').src="";
}

function resetarTudo(){
    var see = document.getElementById('pcchoice');
    if(see.style.display == 'block' || see.style.display == 'active'){
        see.style.display = 'none';
   }
   var vs = document.getElementById('vsimage');
    if(vs.style.display == 'block' || vs.style.display == 'active'){
        vs.style.display = 'none';
   }
    document.getElementById('resultado').innerHTML = "";
    document.getElementById('pcchoice').src="";

    placarEmpate = 0;
    placarDerrota = 0;
    placarVitoria = 0;
    document.getElementById('win').innerHTML = 'Vitorias: ' + placarVitoria;
    document.getElementById('lose').innerHTML = 'Derrotas: ' + placarDerrota;
    document.getElementById('draw').innerHTML = 'Empates: ' + placarEmpate;
}



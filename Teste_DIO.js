let nome = "Carlos Eduardo";
let nivel = 7986;
let partidasGanhas = 20;
let xpPorPartida = 10;
let patentes = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"];
let patente;
let i;

for(i = 0; i < partidasGanhas; i++){
    nivel += xpPorPartida;
}

if(nivel <= 1000){
    patente = patentes[0];
}else if(nivel > 1000 && nivel <= 2000){
    patente = patentes[1];
}else if(nivel > 2000 && nivel <= 5000){
    patente = patentes[2];
}else if(nivel > 5000 && nivel <= 7000){
    patente = patentes[3];
}else if(nivel > 7000 && nivel <= 8000){
    patente = patentes[4];
}else if(nivel > 8000 && nivel <= 9000){
    patente = patentes[5];
}else if(nivel > 9000 && nivel <= 10000){
    patente = patentes[6];
}else{
    patente = patentes[7];
}


console.log("O Herói de nome " + nome + " está no nível de " + patente);


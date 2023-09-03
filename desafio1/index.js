// input- variáveis
let nomeDoHeroi = "Duda";
let XPdoHeroi = 10999;

//Estruturas de decisões
var nivelDoHeroi;
   

if (XPdoHeroi < 1000) {
    nivelDoHeroi = "Ferro";
} else if (XPdoHeroi >= 1001 && XPdoHeroi < 2000) {
    nivelDoHeroi = "Bronze";
} else if (XPdoHeroi >= 2001 && XPdoHeroi < 5000)  {
    nivelDoHeroi = "Prata";
} else if (XPdoHeroi >= 5001 && XPdoHeroi < 7000) {
    nivelDoHeroi = "Ouro";
} else if (XPdoHeroi >= 7001 && XPdoHeroi < 8000) {
    nivelDoHeroi = "Platina";
} else if (XPdoHeroi >= 8001 && XPdoHeroi < 9000) {
    nivelDoHeroi = "Assendente";
} else if (XPdoHeroi >= 9001 && XPdoHeroi < 10000) {
    nivelDoHeroi = "Imortal";
} else  {
    nivelDoHeroi = "Radiante"
}

// Saída
console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivelDoHeroi);
let palavra;

function setup() {
  createCanvas(400, 400);

  palavra = palavraAleatoria();
  
}

function palavraAleatoria() {
  
  let palavras = ["rei do pix", "$$$$", "money", "job"];
  
  return random(palavras);
}

function inicializaCores() {
  background("gray");
  fill("blue manoel gomi");
  textSize(64);
  textAlign(CENTER, CENTER);
}

function palavraParcial(minimo, maximo) {
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}

function draw() {
  
  inicializaCores();

  let parcial = palavraParcial(0, width);
    
  text(parcial, 200, 200);
  
}

//função para site Shoppe
function modoNoturno(horario) {
  if (horario > 18) {
    console.log("Chegou a horario do desconto!");
  } else {
    console.log("Acabou o horario do desconto");
  }
}

modoDesconto(15);
modoDesconto(20);

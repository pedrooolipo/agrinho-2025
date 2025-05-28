let fase = 0;
let tempoUltimaFase = 0;
let maca;
let macaAtiva = false;

function setup() {
  createCanvas(400, 400);
  tempoUltimaFase = millis();
}

function draw() {
  background(220);

  translate(width / 2, height);

  // Crescimento por fases
  if (millis() - tempoUltimaFase > 1000 && fase < 4) {
    fase++;
    tempoUltimaFase = millis();
  }

  stroke(139, 69, 19); // cor do tronco
  strokeWeight(10);

  if (fase >= 1) {
    // Tronco
    line(0, 0, 0, -100);
  }

  if (fase >= 2) {
    // Galhos
    line(0, -100, -40, -140);
    line(0, -100, 40, -140);
  }

  if (fase >= 3) {
    // Folhas
    noStroke();
    fill(34, 139, 34);
    ellipse(-40, -150, 40, 40);
    ellipse(40, -150, 40, 40);
    ellipse(0, -160, 50, 50);
  }

  if (fase >= 4) {
    // Maçã
    fill(255, 0, 0);
    let x = 0;
    let y = -170;
    ellipse(x, y, 20, 20);
    maca = { x: width / 2 + x, y: height + y }; // posição global da maçã
    macaAtiva = true;
  } else {
    macaAtiva = false;
  }
}

// Clicar na maçã reinicia o ciclo
function mousePressed() {
  if (macaAtiva) {
    let d = dist(mouseX, mouseY, maca.x, maca.y);
    if (d < 15) {
      fase = 0;
      tempoUltimaFase = millis();
    }
  }
}

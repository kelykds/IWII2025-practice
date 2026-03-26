// Seleciona as imagens
const imagem = document.getElementById("minhaImagem");

// Seleciona os botões
const botao1 = document.getElementById("imagem1");
const botao2 = document.getElementById("imagem2");
const botao3 = document.getElementById("imagem3");

// Associa o evento de clique
botao1.addEventListener("click", function() {
    imagem.src = "img1.jpg";
});
botao2.addEventListener("click", function() {
    imagem.src = "img2.jpg";
});
botao3.addEventListener("click", function() {
    imagem.src = "img3.jpg";
});
// Seleciona as imagens
const imagem = document.getElementById("minhaImagem");

// Seleciona os botões
const botao1 = document.getElementById("imagem1");
const botao2 = document.getElementById("imagem2");
const botao3 = document.getElementById("imagem3");

// Associa o evento de clique
botao1.addEventListener("click", function() {
    imagem.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8DbLye0-ZSWMUS6NiKkWHqEBsHKJwZ--iOQ&s";
});
botao2.addEventListener("click", function() {
    imagem.src = "https://ovicio.com.br/wp-content/uploads/2024/01/20240108-maki2.png";
});
botao3.addEventListener("click", function() {
    imagem.src = "https://i.pinimg.com/736x/04/56/36/0456369a471c30ddd24e5b96f70d82a7.jpg";
});
let nomeUsuario = prompt("Digite seu nome de usuário: ");
let senhaUsuario = prompt("Digite sua senha: ");
if (nomeUsuario === "admin" && senhaUsuario === "1234") {
    alert("Login bem-sucedido!");
} else {
    alert("Nome de usuário ou senha incorretos.");
    nomeUsuario = prompt("Digite seu nome de usuário: ");
    senhaUsuario = prompt("Digite sua senha: ");
}

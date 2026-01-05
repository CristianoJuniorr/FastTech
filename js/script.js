function comprar(produto) {
  const numero = "5563992298058";
  const mensagem = `Olá! Vi o ${produto} no site da Fast Tech e gostaria de mais informações.`;
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
}

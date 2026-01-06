/* ================= WHATSAPP ================= */
function comprar(produto) {
  const numero = "5563992298058";
  const mensagem = `Olá! Vi o ${produto} no site da Fast Tech e gostaria de mais informações.`;
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
}

/* ================= SLIDER DE BANNER ================= */
const banners = document.querySelectorAll(".banner");
const prevBtn = document.querySelector(".banner-prev");
const nextBtn = document.querySelector(".banner-next");

let index = 0;
let intervalo;

/* Mostrar banner ativo */
function showBanner(i) {
  banners.forEach((banner) => banner.classList.remove("active"));
  banners[i].classList.add("active");
}

/* Próximo banner */
function nextBanner() {
  index = (index + 1) % banners.length;
  showBanner(index);
}

/* Banner anterior */
function prevBanner() {
  index = (index - 1 + banners.length) % banners.length;
  showBanner(index);
}

/* Auto play */
function startAutoPlay() {
  intervalo = setInterval(nextBanner, 4000);
}

/* Reset autoplay ao clicar */
function resetAutoPlay() {
  clearInterval(intervalo);
  startAutoPlay();
}

/* Eventos dos botões */
if (nextBtn && prevBtn) {
  nextBtn.addEventListener("click", () => {
    nextBanner();
    resetAutoPlay();
  });

  prevBtn.addEventListener("click", () => {
    prevBanner();
    resetAutoPlay();
  });
}

/* Inicia */
startAutoPlay();
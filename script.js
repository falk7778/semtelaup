// Initialize Lucide Icons
lucide.createIcons();

// Smooth scroll to Pricing
function scrollToPlanos() {
    const el = document.getElementById('planos-de-compra');
    if(el) {
        const y = el.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
}

// Populate Photos Carousel
const carousel = document.getElementById('carousel');
const images = ["qc96wb4", "qc96oxV", "qc96xWB", "qc96CDQ", "qc96Ozl", "qc966ej", "qc9P9kJ", "qc9PKBI", "qc9PRBS"];

images.forEach((id, i) => {
    const div = document.createElement('div');
    div.className = "carousel-item";
    div.innerHTML = `<img src="https://iili.io/${id}.png" alt="Demonstração ${i + 1}" loading="lazy" decoding="async" referrerpolicy="no-referrer" />`;
    carousel.appendChild(div);
});

// Auto-scroll Carousels
function setupAutoScroll(elementId, delay) {
    const el = document.getElementById(elementId);
    if (!el) return;
    setInterval(() => {
        if (el.children.length > 0) {
            const childWidth = el.children[0].offsetWidth;
            const gap = 16; 
            const scrollAmount = childWidth + gap;
            
            if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
                el.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    }, delay);
}

setupAutoScroll('carousel', 3000);
setupAutoScroll('testimonial-carousel', 5000);

// Populate Bonuses
const bonusContainer = document.getElementById('bonus-container');
const bonuses = [
    { title: "#BÔNUS 01: Kit Sereia do Fundo do Mar", value: "R$ 19,90", desc: "Um cenário completo e roupinhas aquáticas para expandir a brincadeira.", img: "qcdneR9" },
    { title: "#BÔNUS 02: Kit Profissões (Médica e Professora)", value: "R$ 19,90", desc: "Incentive grandes sonhos com acessórios e jalecos para as bonecas.", img: "qcdnSob" },
    { title: "#BÔNUS 03: O Camarim e Guarda-Roupa Extra", value: "R$ 14,90", desc: "Dezenas de vestidos, laços e sapatos extras para as bonecas base.", img: "qcdnvDu" },
    { title: "#BÔNUS 04: Vídeo-Aula: A Montagem Perfeita", value: "R$ 29,90", desc: "O segredo revelado em vídeo de como plastificar com durex e usar o velcro para a casinha durar meses intacta.", img: "qcdnkNe" }
];

bonuses.forEach(bonus => {
    const div = document.createElement('div');
    div.className = "bonus-card";
    div.innerHTML = `
        <div class="bonus-img-wrapper">
            <img src="https://iili.io/${bonus.img}.png" alt="${bonus.title}" loading="lazy" />
        </div>
        <div>
            <h3 class="bonus-title"><i data-lucide="gift"></i> ${bonus.title}</h3>
            <div class="bonus-price">
                Valor: <span class="strikethrough">${bonus.value}</span> | Hoje: <span class="free">Grátis</span>
            </div>
            <p class="bonus-desc">${bonus.desc}</p>
        </div>
    `;
    bonusContainer.appendChild(div);
});

// Re-init lucide after injecting bonuses
lucide.createIcons();

// Populate FAQ
const faqContainer = document.getElementById('faq-container');
const faqs = [
    { q: "Minha filha consegue montar sozinha?", a: "O recorte e a montagem das peças menores exigem a supervisão de um adulto (é um ótimo momento em família!), mas após montado, ela brincará de forma 100% independente." },
    { q: "Qual papel eu preciso?", a: "Folha sulfite comum (A4) já serve! Na nossa vídeo-aula bônus, ensinamos o truque de usar fita adesiva para deixar qualquer papel super resistente." },
    { q: "Posso imprimir mais de uma vez?", a: "Sim! O arquivo é seu para sempre. Se a criança rasgar ou perder uma pecinha, basta imprimir aquela página novamente." },
    { q: "É seguro comprar?", a: "Totalmente. Seu pagamento é processado em ambiente criptografado e o PDF é enviado automaticamente para o seu e-mail em segundos." }
];

faqs.forEach((faq, index) => {
    const div = document.createElement('div');
    div.className = "faq-item";
    div.innerHTML = `
        <button class="faq-question" onclick="toggleFaq(${index})">
            ${faq.q}
            <i data-lucide="chevron-down" class="faq-icon"></i>
        </button>
        <div class="faq-answer">
            <p>${faq.a}</p>
        </div>
    `;
    faqContainer.appendChild(div);
});

// Re-init lucide after injecting FAQ
lucide.createIcons();

function toggleFaq(index) {
    const items = document.querySelectorAll('.faq-item');
    items.forEach((item, i) => {
        if (i === index) {
            item.classList.toggle('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Downsell Modal Logic
const modal = document.getElementById('downsell-modal');
let modalShown = false;

function mostrarDownsell() {
    if (!modalShown) {
        modal.classList.add('show');
        modal.style.display = 'flex';
        modalShown = true;
    }
}

function fecharDownsell() {
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

// Show modal on mouse leave intent
document.addEventListener('mouseleave', (e) => {
    if (e.clientY < 10) {
        mostrarDownsell();
    }
});

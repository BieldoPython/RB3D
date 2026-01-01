const products = [
            {
                id: 1, title: "Suporte de caneta Darth Vader", category: "decoracao", price: 45.00,
                desc: "Um suporte de caneta Darth Vader, ideal para ambientes minimalistas e escritórios. pode segurar coisas.",
                specs: ["Material: PLA", "Altura: 15cm", "Uso: Suporte", "Peso: 120g"],
                images: ["https://makerworld.bblmw.com/makerworld/model/US9c84e5e58ce7/design/2025-06-28_807f6ee5053378.jpg",
                    "https://makerworld.bblmw.com/makerworld/model/US9c84e5e58ce7/design/2025-06-28_a8316abbe42db.jpg",
                    "https://makerworld.bblmw.com/makerworld/model/US9c84e5e58ce7/design/2025-06-28_8964eaeb782c68.jpg",
                    "https://makerworld.bblmw.com/makerworld/model/US9c84e5e58ce7/design/2025-06-28_9ee9497f79b358.jpg",
                    "https://makerworld.bblmw.com/makerworld/model/US9c84e5e58ce7/design/2025-06-28_d0068cdbdf1528.jpg"]
            },
            {
                id: 2, title: "Soldado Storm Trooper", category: "brinquedos", price: 29.90,
                desc: "Miniatura de 25cm rica em detalhes, impressa em PLA. Ideal para decoração e para brincar.",
                specs: ["Material: PLA", "Escala: 25cm", "Acabamento: tinta acrílica", "Alta Resolução"],
                images: ["https://makerworld.bblmw.com/makerworld/model/US5bce7110a1e748/design/2025-02-23_ef1a362d589aa.jpg?x-oss-process=image%2Fresize%2Cw_400%2Fformat%2Cwebp",
                    "https://makerworld.bblmw.com/makerworld/model/US5bce7110a1e748/design/2025-02-15_8c69ae6c12036.jpg?x-oss-process=image/resize,w_1000/format,webp",
                    "https://makerworld.bblmw.com/makerworld/model/US5bce7110a1e748/design/2025-02-15_376c960845c48.jpg?x-oss-process=image/resize,w_1000/format,webp"]
            },
            {
                id: 3, title: "Chaveiro Suporte", category: "suportes", price: 15.00,
                desc: "Solução prática para segurar um celular. Além de útil pode decorar suas chaves.",
                specs: ["Material: PETG", "Qtd: Kit com 5", "Cor: Preto Fosco", "Resistente"],
                images: ["https://makerworld.bblmw.com/makerworld/model/US9ed59c39f449a5/design/2025-09-30_cd1bb388bfef88.jpg?x-oss-process=image/resize,w_1000/format,webp",
                    "https://makerworld.bblmw.com/makerworld/model/US9ed59c39f449a5/design/2025-09-30_12d5fe3cfdb2e.jpeg?x-oss-process=image/resize,w_1000/format,webp",
                    "https://makerworld.bblmw.com/makerworld/model/US9ed59c39f449a5/design/2025-09-30_9df1469d288768.jpeg?x-oss-process=image/resize,w_1000/format,webp",
                    "https://makerworld.bblmw.com/makerworld/model/US9ed59c39f449a5/design/2025-09-30_956f4834976e4.jpeg?x-oss-process=image/resize,w_1000/format,webp"]
            },
            {
                id: 4, title: "Dinossauro do google", category: "decoracao", price: 25.00,
                desc: "O dinossauro do joguinho do google decorando seu quarto ou sala. Nas versões branca e preta.",
                specs: ["Material: PLA Branco", "Diâmetro: 18cm", "Tempo de Impressão: 24h", "Textura Realista"],
                images: ["https://makerworld.bblmw.com/makerworld/model/UScba180b4a37c6b/design/2025-07-29_f7fa0dfad1033.jpeg?x-oss-process=image/resize,w_1000/format,webp",
                    "https://makerworld.bblmw.com/makerworld/model/UScba180b4a37c6b/design/2025-07-29_968b85d2dab3c.jpeg?x-oss-process=image/resize,w_1000/format,webp",
                    "https://makerworld.bblmw.com/makerworld/model/UScba180b4a37c6b/design/2025-07-29_45cab36cc2b04.jpeg?x-oss-process=image/resize,w_1000/format,webp"]
            },
            {
                id: 5, title: "Foguete de mesa", category: "decoracao", price: 25.90,
                desc: "Um foguete de mesa, decorando espaços vazios. Colorido e flexível.",
                specs: ["Material: ABS", "Mecanismo: Funcional", "Resistência: Média", "Cor: Laranja"],
                images: ["https://makerworld.bblmw.com/makerworld/model/US775e417ca44cdb/design/2024-01-20_7a9a9c8fba163.jpg?x-oss-process=image/resize,w_1000/format,webp",
                    "https://makerworld.bblmw.com/makerworld/model/US775e417ca44cdb/design/2024-01-20_3aa5a69d15799.jpg?x-oss-process=image/resize,w_1000/format,webp",
                    "https://makerworld.bblmw.com/makerworld/model/US775e417ca44cdb/design/2024-01-20_b1d219e3da07c.jpg?x-oss-process=image/resize,w_1000/format,webp",
                    "https://makerworld.bblmw.com/makerworld/model/US775e417ca44cdb/design/2024-01-20_00640edbd73ac.jpg?x-oss-process=image/resize,w_1000/format,webp"]
            },
            {
                id: 6, title: "Mascote do Flamengo",
                category: "brinquedos", price: 65.00,
                desc: "O mascote do Flamengo, Torcendo junto com você em todos os momentos .",
                specs: ["Material: PLA Multicolor", "Articulações: Móveis", "Comprimento: 30cm", "Seguro p/ Crianças"],
                images: ["https://makerworld.bblmw.com/makerworld/model/US8cdd66a9c76d9d/design/2025-04-26_0f8b3e0dd4ecb.png?x-oss-process=image/resize,w_1000/format,webp",
                    "https://makerworld.bblmw.com/makerworld/model/US8cdd66a9c76d9d/design/2025-04-26_0f8b3e0dd4ecb.png?x-oss-process=image/resize,w_1000/format,webp"]
            }
        ];

        /* --- SLIDER BANNER --- */
        const slides = document.querySelectorAll('.slide');
        let currentSlide = 0;
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 3500);

        /* Renderização */
        const grid = document.getElementById('product-grid');
        const catNames = {'decoracao': 'Decoração', 'brinquedos': 'Brinquedos', 'suportes': 'suportes'};
        const formatPrice = (v) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        function renderProducts(filter = 'todos') {
            grid.innerHTML = '';
            const filtered = filter === 'todos' ? products : products.filter(p => p.category === filter);
            filtered.forEach(prod => {
                const card = document.createElement('div');
                card.className = 'card';
                card.onclick = () => openModal(prod);
                card.innerHTML = `
                    <div class="card-img-wrapper"><img src="${prod.images[0]}" alt="${prod.title}"></div>
                    <div class="card-info"><span class="card-category">${catNames[prod.category] || prod.category}</span><h3 class="card-title">${prod.title}</h3><p class="card-desc">${prod.desc.substring(0, 40)}...</p><div class="card-price">${formatPrice(prod.price)}</div></div>`;
                grid.appendChild(card);
            });
            const observer = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }); }, { threshold: 0.1 });
            document.querySelectorAll('.card').forEach(c => observer.observe(c));
        }
        function filterItems(c) { document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active')); event.target.classList.add('active'); renderProducts(c); }
        renderProducts('todos');

        /* --- LÓGICA DO FAQ --- */
        const faqItems = document.querySelectorAll('.faq-item');
        faqItems.forEach(item => {
            item.querySelector('.faq-question').addEventListener('click', () => {
                item.classList.toggle('active');
            });
        });

        /* --- LÓGICA DO MODAL DE PRODUTO --- */
        const modal = document.getElementById('product-modal');
        const floatBtn = document.getElementById('float-btn');
        let modalOpen = false;

        function openModal(prod) {
            history.pushState({ modal: true }, null, "#produto");
            modalOpen = true;
            floatBtn.style.display = 'none';
            document.getElementById('modal-title').innerText = prod.title;
            document.getElementById('modal-desc').innerText = prod.desc;
            document.getElementById('modal-cat-badge').innerText = prod.category.toUpperCase();
            document.getElementById('modal-price').innerText = formatPrice(prod.price);
            document.getElementById('modal-buy-btn').href = `https://wa.me/5511999999999?text=${encodeURIComponent(`Olá! Tenho interesse em: ${prod.title}`)}`;
            
            const specsList = document.getElementById('modal-specs-list');
            specsList.innerHTML = '';
            prod.specs.forEach(s => specsList.innerHTML += `<li><i class="fas fa-check"></i> ${s}</li>`);
            
            document.getElementById('modal-main-img').src = prod.images[0];
            const thumbs = document.getElementById('modal-thumbs'); thumbs.innerHTML = '';
            prod.images.forEach(src => {
                const img = document.createElement('img'); img.src = src; img.className = 'thumb';
                img.onclick = function() { document.getElementById('modal-main-img').src = src; };
                thumbs.appendChild(img);
            });
            modal.style.display = 'flex'; document.body.style.overflow = 'hidden';
        }

        /* --- LÓGICA DOS MODAIS DE POLÍTICA --- */
        const policyModal = document.getElementById('policy-modal');
        const policyContent = document.getElementById('policy-text-area');

        const termsText = `<h2>Termos e Condições</h2>
            <p>Bem-vindo ao 3D Print Studio. Ao utilizar nossos serviços, você concorda com os seguintes termos:</p>
            <h3>1. Serviços</h3><p>Oferecemos serviços de impressão 3D sob demanda. Não nos responsabilizamos pelo design funcional de arquivos enviados por terceiros.</p>
            <h3>2. Propriedade Intelectual</h3><p>O cliente garante ter os direitos sobre os arquivos enviados. Nós mantemos o direito de fotografar as peças impressas para nosso portfólio, salvo solicitação de sigilo.</p>
            <h3>3. Prazos</h3><p>Os prazos são estimativas e podem variar conforme complexidade.</p>`;

        const privacyText = `<h2>Política de Privacidade</h2>
            <p>Sua privacidade é importante para nós.</p>
            <h3>1. Coleta de Dados</h3><p>Coletamos apenas informações necessárias para o pedido (Nome, Telefone, Endereço).</p>
            <h3>2. Uso de Dados</h3><p>Seus dados são usados exclusivamente para comunicação sobre o pedido e entrega. Não compartilhamos com terceiros.</p>`;

        function openPolicy(type) {
            history.pushState({ policy: true }, null, "#politica");
            if(type === 'terms') policyContent.innerHTML = termsText;
            if(type === 'privacy') policyContent.innerHTML = privacyText;
            policyModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            floatBtn.style.display = 'none';
        }

        function closePolicy() {
            policyModal.style.display = 'none';
            document.body.style.overflow = 'auto';
            floatBtn.style.display = 'flex';
            // Se foi aberto via histórico, volta.
            if(location.hash === "#politica") history.back();
        }

        /* --- CONTROLE GERAL DE FECHAMENTO --- */
        function closeModal() {
            if (modalOpen) history.back();
            else { modal.style.display = 'none'; document.body.style.overflow = 'auto'; modalOpen = false; floatBtn.style.display = 'flex'; }
        }

        window.addEventListener('popstate', () => {
            modal.style.display = 'none';
            policyModal.style.display = 'none';
            document.body.style.overflow = 'auto';
            modalOpen = false;
            floatBtn.style.display = 'flex';
        });

        window.onclick = (e) => {
            if (e.target == modal) closeModal();
            if (e.target == policyModal) closePolicy();
        }

        /* Zoom Desktop */
        const zoom = document.getElementById('zoom-container');
        const mImg = document.getElementById('modal-main-img');
        zoom.addEventListener('mousemove', (e) => {
            if(window.innerWidth>768) {
                const {left,top,width,height} = zoom.getBoundingClientRect();
                mImg.style.transformOrigin = `${(e.clientX-left)/width*100}% ${(e.clientY-top)/height*100}%`;
                mImg.style.transform = "scale(2)";
            }
        });
        zoom.addEventListener('mouseleave', () => mImg.style.transform = "scale(1)");

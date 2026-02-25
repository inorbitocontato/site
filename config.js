/* ============================================
   ARQUIVO DE CONFIGURAÇÃO - INORBITO
   Este arquivo contém todos os textos e links
   do site. Edite os valores entre as aspas para
   personalizar o conteúdo.
   IMPORTANTE: Não remova as aspas!
   ============================================ */
const CONFIG = {
    // ==========================================
    // LINKS DAS REDES SOCIAIS
    // Cole os links completos entre as aspas
    // ==========================================
    redesSociais: {
        youtube: "https://www.youtube.com/@Inorbito",
        spotify: "https://open.spotify.com/intl-pt/artist/1ECeU59Fh0O8XRYbhUtZyT?si=1D87mznTTiKm5_iJgta3aQ",
        deezer: "https://link.deezer.com/s/32xDxzpoG7yCWuJWHtwN3",
        appleMusic: "https://music.apple.com/us/artist/inorbito/1506227221",
        instagram: "https://www.instagram.com/inorbitoficial/",
        whatsappNumero: "5521998580835",
        whatsappMensagem: "Olá! Vim pelo site da INORBITO"
    },
    // ==========================================
    // SEÇÃO INICIAL (HERO)
    // ==========================================
    hero: {
        titulo: "INORBITO",
        subtitulo: "Progressive Metal from Brazil"
    },
    // ==========================================
    // BIOGRAFIA
    // ==========================================
    biografia: {
        paragrafo1: `Formada em 2018 nas profundezas do Rio de Janeiro, a INORBITO surgiu com uma missão clara:
            redefinir os limites do rock cantado em português. Combinando riffs pesados,
            paisagens sonoras atmosféricas e composições complexas, a banda rapidamente conquistou
            seu espaço na cena underground.`,
        paragrafo2: `Com influências que vão de Dream Theater, Symphony X, Angra e indo até Avantasia, a INORBITO
            criou uma identidade sonora única que transita entre a brutalidade e a beleza,
            o caos e a harmonia. Suas letras exploram temas como existencialismo, cosmos,
            e a condição humana.`,
        paragrafo3: `O álbum de estreia "Idade Mídia" (2020) foi aclamado pela crítica especializada,
            sendo considerado um dos melhores lançamentos de heavy metal cantado em português. Em 2024,
            a banda lançou "Predominante", consolidando sua posição como uma das principais
            forças do hard prog latino-americano.`
    },
    // ==========================================
    // INTEGRANTES DA BANDA
    // Para adicionar mais membros, copie um bloco
    // e cole abaixo, alterando o número
    // ==========================================
integrantes: {
    membro1: {
        nome: "Willy Arioli",
        funcao: "Vocal",
        bio: "Canta e compõe em diversos estilosos devido às várias influências musicais.",
        foto: "Banda/vocal.png"
    },
    membro2: {
        nome: "Gabriel Veloso",
        funcao: "Guitarra",
        bio: "Virtuoso das seis cordas, responsável pelos solos técnicos e texturas atmosféricas da banda.",
        foto: "Banda/guitarra.png" 
    },
    membro3: {
        nome: "Thiago Salo",
        funcao: "Baixo",
        bio: "A espinha dorsal do som da INORBITO. Suas linhas de baixo complexas são marca registrada.",
         foto: "Banda/baixo.png"
    },
    membro4: {
        nome: "Willian Domingos",
        funcao: "Bateria",
        bio: "Mestre das polirritmias e compassos ímpares. Sua precisão técnica é fundamental para o som da banda.",
        foto: "Banda/bateria.png"
    },
    membro5: {
        nome: "Fellipe Soriak",
        funcao: "Teclado",
        bio: "Mestre das texturas sonoras e sintetizadores. Traz camadas atmosféricas que definem a identidade sonora da banda.",
        foto: "Banda/teclado.png"
    }
},
    // ==========================================
    // LOJA - PRODUTOS
    // Para adicionar mais produtos, copie um bloco
    // e cole abaixo, alterando o número
    // ==========================================
    loja: {
        subtitulo: "Adquira produtos oficiais da INORBITO",
        produto1: {
            nome: "Camiseta \"Idade Mídia\"",
            descricao: "Camiseta oficial do álbum Idade Mídia. 100% algodão.",
            preco: "R$ 89,90",
            video: "Loja/camiseta-idade-midia.webm"
        },
        produto2: {
            nome: "Caneca \"Logo\"",
            descricao: "Caneca especial com a logo da banda.",
            preco: "R$ 40,00",
            video: "Loja/caneca-logo.webm"
        },
        produto3: {
            nome: "Camiseta \"Outra Vez\"",
            descricao: "Camiseta oficial do Single Outra Vez. 100% algodão.",
            preco: "R$ 89,90",
            video: "Loja/camiseta-outra-vez.webm"
        },
        produto4: {
            nome: "Camiseta \"Predominante\"",
            descricao: "Camiseta oficial do EP Predominante. 100% algodão.",
            preco: "R$ 89,90",
            video: "Loja/camiseta-predominante.webm"
        }
    },

discografia: {
    subtitulo: "Linha do tempo dos lançamentos",  // adicione isso se quiser customizar
    disco1: {
        ano: "2020",
        nome: "Idade Mídia",
        tipo: "Álbum",
        capa: "Discografia/idade-midia.png"
    },
    disco2: {
        ano: "2024",
        nome: "Predominante",
        tipo: "EP",
        capa: "Discografia/predominante.png"
    }
    // disco3: { ... } quando quiser adicionar mais
},
    // ==========================================
    // CONTATO
    // ==========================================
    contato: {
        subtitulo: "Entre em contato conosco para shows, parcerias ou dúvidas",
        email: "contato@inorbito.com.br",
        localizacao: "Rio de Janeiro, Brasil"
    },
    // ==========================================
    // RODAPÉ
    // ==========================================
    rodape: {
        texto: "© 2026 INORBITO. Todos os direitos reservados."
    }
};

/* ============================================
   NÃO EDITE ABAIXO DESTA LINHA
   (código técnico para aplicar as configurações)
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    aplicarConfiguracoes();
});

function aplicarConfiguracoes() {
    const social = CONFIG.redesSociais;

    // Redes sociais - botões Hero
    const btnYoutube    = document.getElementById('btn-youtube');
    const btnSpotify    = document.getElementById('btn-spotify');
    const btnDeezer     = document.getElementById('btn-deezer');
    const btnApple      = document.getElementById('btn-apple');
    const btnInstagram  = document.getElementById('btn-instagram');

    if (btnYoutube)    btnYoutube.href    = social.youtube;
    if (btnSpotify)    btnSpotify.href    = social.spotify;
    if (btnDeezer)     btnDeezer.href     = social.deezer;
    if (btnApple)      btnApple.href      = social.appleMusic;
    if (btnInstagram)  btnInstagram.href  = social.instagram;

    // Redes sociais - footer
    const footerYoutube = document.getElementById('footer-youtube');
    const footerSpotify = document.getElementById('footer-spotify');
    if (footerYoutube) footerYoutube.href = social.youtube;
    if (footerSpotify) footerSpotify.href = social.spotify;

    // Hero
    const heroTitle    = document.getElementById('hero-title');
    const heroSubtitle = document.getElementById('hero-subtitle');
    if (heroTitle)    heroTitle.textContent    = CONFIG.hero.titulo;
    if (heroSubtitle) heroSubtitle.textContent = CONFIG.hero.subtitulo;

    // Biografia
    const bioParagraph1 = document.getElementById('bio-paragraph-1');
    const bioParagraph2 = document.getElementById('bio-paragraph-2');
    const bioParagraph3 = document.getElementById('bio-paragraph-3');
    if (bioParagraph1) bioParagraph1.textContent = CONFIG.biografia.paragrafo1;
    if (bioParagraph2) bioParagraph2.textContent = CONFIG.biografia.paragrafo2;
    if (bioParagraph3) bioParagraph3.textContent = CONFIG.biografia.paragrafo3;

// Integrantes - dinâmica
const membros = CONFIG.integrantes;
const membersGrid = document.getElementById('members-grid');

if (membersGrid) {
    membersGrid.innerHTML = '';

    const membrosArray = [];
    let i = 1;
    while (membros[`membro${i}`]) {
        membrosArray.push(membros[`membro${i}`]);
        i++;
    }

    membrosArray.forEach((membro, index) => {
        const card = document.createElement('div');
        card.className = 'member-card';

        // Classes para ordenação no CSS (mantido como estava)
        let funcaoClass = '';
        const funcaoLower = membro.funcao.toLowerCase();
        if (funcaoLower.includes('vocal'))    funcaoClass = 'vocal';
        else if (funcaoLower.includes('guitarra')) funcaoClass = 'guitarra';
        else if (funcaoLower.includes('baixo'))    funcaoClass = 'baixo';
        else if (funcaoLower.includes('bateria'))  funcaoClass = 'bateria';
        else if (funcaoLower.includes('teclado'))  funcaoClass = 'teclado';
        if (funcaoClass) card.classList.add(funcaoClass);

        card.innerHTML = `
            <div class="member-image">
                ${gerarFotoMembroHTML(membro)}
            </div>
            <h3>${membro.nome}</h3>
            <p>${membro.funcao}</p>
            <p>${membro.bio}</p>
        `;

        membersGrid.appendChild(card);
    });
}

// Função auxiliar para gerar o HTML da foto do membro
function gerarFotoMembroHTML(membro) {
    if (membro.foto) {
        return `
            <img 
                src="${membro.foto}" 
                alt="${membro.nome} - ${membro.funcao}"
                loading="lazy"
            >
        `;
    }

    // Fallback: SVG atual (quando não tem foto)
    return `
        <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
    `;
}


    // Loja
    const loja = CONFIG.loja;
    const storeSubtitleEl = document.getElementById('store-subtitle');
    if (storeSubtitleEl) {
        storeSubtitleEl.textContent = loja.subtitulo || "Adquira produtos oficiais da INORBITO";
    }

    const storeGrid = document.getElementById('store-grid');
    if (storeGrid) {
        storeGrid.innerHTML = '';

        const produtos = [
            loja.produto1,
            loja.produto2,
            loja.produto3,
            loja.produto4
            // Adicione mais produtos aqui no futuro: loja.produto5, etc.
        ].filter(Boolean);

        produtos.forEach(produto => {
            const card = document.createElement('div');
            card.className = 'product-card';

            card.innerHTML = `
                <div class="product-image">
                    ${gerarMediaHTML(produto)}
                </div>
                <h3>${produto.nome}</h3>
                <p>${produto.descricao}</p>
                <span class="price">${produto.preco}</span>
                <a href="#contato" class="btn-buy">Comprar</a>
            `;

            storeGrid.appendChild(card);
        });
    }

    // Contato
    const contactSubtitle = document.getElementById('contact-subtitle');
    const contactEmail    = document.getElementById('contact-email');
    const contactWhatsapp = document.getElementById('contact-whatsapp');
    const contactLocation = document.getElementById('contact-location');

    if (contactSubtitle) contactSubtitle.textContent = CONFIG.contato.subtitulo;
    if (contactEmail) {
        contactEmail.textContent = CONFIG.contato.email;
        contactEmail.href = `mailto:${CONFIG.contato.email}`;
    }
    if (contactWhatsapp) {
        const whatsappLink = `https://wa.me/${social.whatsappNumero}?text=${encodeURIComponent(social.whatsappMensagem)}`;
        contactWhatsapp.href = whatsappLink;
    }
    if (contactLocation) contactLocation.textContent = CONFIG.contato.localizacao;

    // Rodapé
    const footerText = document.getElementById('footer-text');
    if (footerText) footerText.innerHTML = CONFIG.rodape.texto;
}


// Discografia - dinâmica
// ==================== DISCOGRAFIA ====================
const discografia = CONFIG.discografia;
const discSubtitleEl = document.getElementById('disc-subtitle');
if (discSubtitleEl) {
    discSubtitleEl.textContent = discografia.subtitulo || "Linha do tempo dos lançamentos";
}

const discGrid = document.getElementById('disc-grid');
if (discGrid) {
    discGrid.innerHTML = '';

    const discos = [
        discografia.disco1,
        discografia.disco2
        // disco3, disco4... quando adicionar mais
    ].filter(Boolean);

    discos.forEach(disco => {
        const card = document.createElement('div');
        card.className = 'product-card';

        card.innerHTML = `
            <div class="product-image">
                ${gerarCapaDiscoHTML(disco)}
            </div>
            <h3>${disco.nome}</h3>
            <p class="disc-info">${disco.ano} • ${disco.tipo}</p>
        `;

        discGrid.appendChild(card);
    });
}

// Função auxiliar para capa da discografia
function gerarCapaDiscoHTML(disco) {
    if (disco.capa) {
        return `
            <img 
                src="${disco.capa}" 
                alt="Capa do álbum ${disco.nome} (${disco.ano})"
                loading="lazy"
            >
        `;
    }
    // Fallback SVG simples
    return `
        <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5z"/>
        </svg>
    `;
}
// ============================================
// Função auxiliar para gerar o HTML da mídia (vídeo / imagem / SVG)
// ============================================
function gerarMediaHTML(produto) {
    if (produto.video) {
        return `
            <video 
                autoplay 
                loop 
                muted 
                playsinline 
                preload="auto"
            >
                <source src="${produto.video}" type="video/webm">
                Seu navegador não suporta vídeo.
            </video>
        `;
    }

    if (produto.imagem) {
        return `
            <img 
                src="${produto.imagem}" 
                alt="${produto.nome}" 
                loading="lazy"
            >
        `;
    }

    // Fallback: SVG padrão
    return `
        <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M21.7 8c-.4-.8-1.2-1.4-2.2-1.4H15l.7-3.3c.1-.4 0-.8-.1-1.1-.3-.4-.6-.7-1-.9L14 1l-5.3 6.3c-.2.3-.4.6-.4 1V19c0 1.1.9 2 2 2h6.3c.7 0 1.4-.4 1.7-1l2.8-6.5c.1-.3.2-.6.2-1V8.4c0-.1 0-.3-.1-.4zM4.5 21H3c-.6 0-1-.4-1-1v-9c0-.6.4-1 1-1h1.5c.6 0 1 .4 1 1v9c0 .6-.4 1-1 1z"/>
        </svg>
    `;
}
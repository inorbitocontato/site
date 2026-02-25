/* ============================================
   ARQUIVO DE CONFIGURAÇÃO - INORBITO

   Este arquivo contém todos os textos e links
   do site. Edite os valores entre aspas para
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

        // WhatsApp - coloque o número com código do país (55 para Brasil)
        // Exemplo: 5511999999999
        whatsappNumero: "5511999999999",
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
        paragrafo1: `Formada em 2018 nas profundezas de São Paulo, a INORBITO surgiu com uma missão clara:
            redefinir os limites do metal progressivo brasileiro. Combinando riffs pesados,
            paisagens sonoras atmosféricas e composições complexas, a banda rapidamente conquistou
            seu espaço na cena underground nacional.`,

        paragrafo2: `Com influências que vão de Dream Theater e Tool até Opeth e Meshuggah, a INORBITO
            criou uma identidade sonora única que transita entre a brutalidade e a beleza,
            o caos e a harmonia. Suas letras exploram temas como existencialismo, cosmos,
            e a condição humana.`,

        paragrafo3: `O álbum de estreia "Ciclos do Vazio" (2020) foi aclamado pela crítica especializada,
            sendo considerado um dos melhores lançamentos de metal progressivo do ano. Em 2023,
            a banda lançou "Singularidade", consolidando sua posição como uma das principais
            forças do prog metal latino-americano.`
    },

    // ==========================================
    // INTEGRANTES DA BANDA
    // Para adicionar mais membros, copie um bloco
    // e cole abaixo, alterando o número
    // ==========================================
    // Ordem para Smartphone: Vocal, Guitarra, Baixo, Bateria, Teclado
    // O CSS ajustará a ordem para PC (5 cards) para deixar o Vocal no meio
    integrantes: {
        membro1: {
            nome: "Willy Arioli",
            funcao: "Vocal",
            bio: "Fundador da banda e principal compositor. Sua voz versátil transita entre o melódico e o gutural."
        },
        membro2: {
            nome: "Gabriel Veloso",
            funcao: "Guitarra",
            bio: "Virtuoso das seis cordas, responsável pelos solos técnicos e texturas atmosféricas da banda."
        },
        membro3: {
            nome: "Thiago Salo",
            funcao: "Baixo",
            bio: "A espinha dorsal do som da INORBITO. Suas linhas de baixo complexas são marca registrada."
        },
        membro4: {
            nome: "Willian Domingos",
            funcao: "Bateria",
            bio: "Mestre das polirritmias e compassos ímpares. Sua precisão técnica é fundamental para o som da banda."
        },
        membro5: {
            nome: "Fellipe Soriak",
            funcao: "Teclado",
            bio: "Mestre das texturas sonoras e sintetizadores. Traz camadas atmosféricas que definem a identidade sonora da banda."
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
            nome: "Camiseta \"Singularidade\"",
            descricao: "Camiseta oficial do álbum Singularidade. 100% algodão.",
            preco: "R$ 89,90"
        },
        produto2: {
            nome: "CD \"Ciclos do Vazio\"",
            descricao: "Álbum de estreia em formato físico com encarte especial.",
            preco: "R$ 45,00"
        },
        produto3: {
            nome: "Vinil \"Singularidade\"",
            descricao: "Edição limitada em vinil duplo 180g com arte exclusiva.",
            preco: "R$ 189,90"
        },
        produto4: {
            nome: "Patch Bordado",
            descricao: "Patch bordado oficial com logo da INORBITO. 10x10cm.",
            preco: "R$ 25,00"
        }
    },

    // ==========================================
    // CONTATO
    // ==========================================
    contato: {
        subtitulo: "Entre em contato conosco para shows, parcerias ou dúvidas",
        email: "contato@inorbito.com.br",
        localizacao: "São Paulo, Brasil"
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

// Função para aplicar as configurações quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    aplicarConfiguracoes();
});

function aplicarConfiguracoes() {
    // Links das redes sociais
    const social = CONFIG.redesSociais;

    // Botões do Hero
    const btnYoutube = document.getElementById('btn-youtube');
    const btnSpotify = document.getElementById('btn-spotify');
    const btnDeezer = document.getElementById('btn-deezer');
    const btnApple = document.getElementById('btn-apple');
    const btnInstagram = document.getElementById('btn-instagram');

    if (btnYoutube) btnYoutube.href = social.youtube;
    if (btnSpotify) btnSpotify.href = social.spotify;
    if (btnDeezer) btnDeezer.href = social.deezer;
    if (btnApple) btnApple.href = social.appleMusic;
    if (btnInstagram) btnInstagram.href = social.instagram;

    // Botões do Footer
    const footerYoutube = document.getElementById('footer-youtube');
    const footerSpotify = document.getElementById('footer-spotify');

    if (footerYoutube) footerYoutube.href = social.youtube;
    if (footerSpotify) footerSpotify.href = social.spotify;

    // Hero
    const heroTitle = document.getElementById('hero-title');
    const heroSubtitle = document.getElementById('hero-subtitle');

    if (heroTitle) heroTitle.textContent = CONFIG.hero.titulo;
    if (heroSubtitle) heroSubtitle.textContent = CONFIG.hero.subtitulo;

    // Biografia
    const bioParagraph1 = document.getElementById('bio-paragraph-1');
    const bioParagraph2 = document.getElementById('bio-paragraph-2');
    const bioParagraph3 = document.getElementById('bio-paragraph-3');

    if (bioParagraph1) bioParagraph1.textContent = CONFIG.biografia.paragrafo1;
    if (bioParagraph2) bioParagraph2.textContent = CONFIG.biografia.paragrafo2;
    if (bioParagraph3) bioParagraph3.textContent = CONFIG.biografia.paragrafo3;

    // Integrantes
    const membros = CONFIG.integrantes;
    for (let i = 1; i <= 5; i++) {
        const membro = membros[`membro${i}`];
        if (membro) {
            const nomeEl = document.getElementById(`member-${i}-name`);
            const funcaoEl = document.getElementById(`member-${i}-role`);
            const bioEl = document.getElementById(`member-${i}-bio`);

            if (nomeEl) nomeEl.textContent = membro.nome;
            if (funcaoEl) funcaoEl.textContent = membro.funcao;
            if (bioEl) bioEl.textContent = membro.bio;
        }
    }

    // Loja
    const storeSubtitle = document.getElementById('store-subtitle');
    if (storeSubtitle) storeSubtitle.textContent = CONFIG.loja.subtitulo;

    const produtos = CONFIG.loja;
    for (let i = 1; i <= 4; i++) {
        const produto = produtos[`produto${i}`];
        if (produto) {
            const nomeEl = document.getElementById(`product-${i}-name`);
            const descEl = document.getElementById(`product-${i}-desc`);
            const precoEl = document.getElementById(`product-${i}-price`);

            if (nomeEl) nomeEl.textContent = produto.nome;
            if (descEl) descEl.textContent = produto.descricao;
            if (precoEl) precoEl.textContent = produto.preco;
        }
    }

    // Contato
    const contactSubtitle = document.getElementById('contact-subtitle');
    const contactEmail = document.getElementById('contact-email');
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

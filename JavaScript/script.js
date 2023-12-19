// document.addEventListener("DOMContentLoaded", () => {
//     // Adiciona o evento de clique na imagem do cookie
//     const cookieImage = document.querySelector("#cookieImage");
//     let quantidadeDeClick = 0;
//     let contagemRegressiva;

//     const clickCallback = () => {
//         // Inicia a contagem regressiva apenas no primeiro clique
//         if (quantidadeDeClick === 0) {
//             iniciarContagemRegressiva();
//         }

//         // Incrementa o contador e reproduz o som ao clicar
//         incrementar();
//         reproduzirSomClick();
//     };

//     cookieImage.addEventListener("click", clickCallback);

//     // Função para iniciar a contagem regressiva
//     function iniciarContagemRegressiva() {
//         contagemRegressiva = 30;
//         const contagemRegressivaElement = document.querySelector(".contagem-regressiva");

//         // Atualiza a contagem regressiva a cada segundo
//         const intervalId = setInterval(() => {
//             contagemRegressivaElement.textContent = contagemRegressiva;

//             if (contagemRegressiva === 0) {
//                 // Quando a contagem regressiva chegar a 0, exibe a mensagem com o número de cliques
//                 contagemRegressivaElement.textContent = `Parabéns. Você clicou ${quantidadeDeClick} vezes no cookie`;
//                 clearInterval(intervalId); // Interrompe a contagem regressiva

//                 // Remove o evento click da imagem
//                 cookieImage.removeEventListener("click", clickCallback);
//             } else {
//                 contagemRegressiva--; // Decrementa a contagem regressiva
//             }
//         }, 1000);
//     }

//     // Função para incrementar o contador
//     const incrementar = () => {
//         // Incrementa o valor do contador
//         quantidadeDeClick++;

//         // Atualiza o valor do contador na página
//         document.querySelector(".contador").textContent = quantidadeDeClick;

//         // mudar imagem
//         document.getElementById("cookieImage").src = "src/cookie_break.png";
//         setTimeout(() => {
//             document.getElementById("cookieImage").src = "src/cookie.png";
//         }, 200);
//     };

//     // Função para reproduzir o som de clique
//     const reproduzirSomClick = () => {
//         const caminhoAudio = "src/som_click.mp3";
//         const audio = new Audio(caminhoAudio);

//         audio.play();
//     };
// });

document.addEventListener("DOMContentLoaded", () => {
    const cookieImage = document.querySelector("#cookieImage");
    let quantidadeDeClick = 0;
    let contagemRegressiva;

    const clickCallback = () => {
        if (quantidadeDeClick === 0) {
            iniciarContagemRegressiva();
        }
        incrementar();
        reproduzirSomClick();
    };

    cookieImage.addEventListener("click", clickCallback);

    function iniciarContagemRegressiva() {
        contagemRegressiva = 30;
        const contagemRegressivaElement = document.querySelector(".contagem-regressiva");

        const intervalId = setInterval(() => {
            contagemRegressivaElement.textContent = contagemRegressiva;

            if (contagemRegressiva === 0) {
                contagemRegressivaElement.textContent = `Parabéns. Você clicou ${quantidadeDeClick} vezes no cookie`;
                clearInterval(intervalId);
                cookieImage.removeEventListener("click", clickCallback);

                // Reproduz o som finish.mp3 quando a contagem regressiva chegar a 0
                reproduzirSomFinish();
            } else {
                contagemRegressiva--;
            }
        }, 1000);
    }

    const incrementar = () => {
        quantidadeDeClick++;
        document.querySelector(".contador").textContent = quantidadeDeClick;
        document.getElementById("cookieImage").src = "src/cookie_break.png";
        setTimeout(() => {
            document.getElementById("cookieImage").src = "src/cookie.png";
        }, 200);
    };

    const reproduzirSomClick = () => {
        const caminhoAudio = "src/som_click.mp3";
        const audio = new Audio(caminhoAudio);
        audio.play();
    };

    const reproduzirSomFinish = () => {
        const caminhoAudioFinish = "src/finish.mp3";
        const audioFinish = new Audio(caminhoAudioFinish);
        audioFinish.play();
    };
});

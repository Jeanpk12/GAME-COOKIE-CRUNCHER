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

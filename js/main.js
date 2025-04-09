function MudaDesenho() {
    const dia = parseInt(document.getElementById("dia").value);
    const mes = parseInt(document.getElementById("mes").value);
    const imagem = document.querySelector(".divImg img");
    const titulo = document.querySelector("h1");
    const descricao = document.querySelector(".descricao");

    let signo = "";
    let texto = "";
    let nomeImagem = "";

    if ((dia >= 21 && mes == 3) || (dia <= 20 && mes == 4)) {
        signo = "Aries";
        nomeImagem = "aries.png";
        texto = "Mu is the Gold Saint who protects the first Zodiac House, Aries. He can repair sacred armors and use telekinesis. Trained by Shion, the former Aries Saint and Grand Master, Mu rebelled against the false Grand Master Saga and aided the Bronze Saints in the battle of the Twelve Houses. He also fought the Titans in Episode G and Hades in the Holy War. Known for his calm and wise demeanor, Mu is often seen as a mentor. He's also responsible for repairing the Saints' armors in the anime's early arcs.";
    } else if ((dia >= 21 && mes == 4) || (dia <= 20 && mes == 5)) {
        signo = "Taurus";
        nomeImagem = "touro.png";
        texto = "Aldebaran is portrayed as a tall, muscular man with brown hair and a forehead scar. His golden armor has bull horns, symbolizing his constellation. He possesses immense physical strength and a technique called Great Horn. Born in Brazil on May 8, he sacrificed himself at the Wall of Lamentations to open a path to the Elysian Fields and was later reborn in Asgard. His name comes from the brightest star in Taurus, meaning 'the follower' in Arabic.";
    } else if ((dia >= 21 && mes == 5) || (dia <= 20 && mes == 6)) {
        signo = "Gemini";
        nomeImagem = "gemeos.png";
        texto = "Saga is the Gold Saint of Gemini from the 20th century with a split personality. He killed the former Grand Master and impersonated him to try and rule the world. Eventually, Seiya and Athena stopped him, and he repented. Saga manipulates cosmic energy to create explosions or open dimensional portals. He also uses telekinesis, telepathy, illusions, and can move faster than light.";
    } else if ((dia >= 21 && mes == 6) || (dia <= 21 && mes == 7)) {
        signo = "Cancer";
        nomeImagem = "cancer.png";
        texto = "Deathmask is the Gold Saint of Cancer, known for his terrifying appearance and the mask covering most of his face. He’s sadistic and enjoys playing with his enemies. He can create a force field and manipulate the realm of the dead to damage opponents.";
    } else if ((dia >= 22 && mes == 7) || (dia <= 22 && mes == 8)) {
        signo = "Leo";
        nomeImagem = "leao.png";
        texto = "Aiolia of Leo is one of Athena’s strongest Saints and the younger brother of Aiolos of Sagittarius. He's brave, fair, and extremely powerful. Initially skeptical of Athena and the Bronze Saints, he becomes a loyal ally. He was once under Saga’s control through a mind-control technique and attacked Seiya until Cassius sacrificed himself to free him.";
    } else {
        signo = "Unknown";
        nomeImagem = "signos.jpg";
        texto = "Sorry, we couldn’t match your birthday to a Gold Saint.";
    }

    titulo.innerHTML = signo;
    imagem.setAttribute("src", "img/" + nomeImagem);
    descricao.innerHTML = texto;
}

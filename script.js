// Lista completa de Yo-kai con sus nombres e imágenes
const yoKaiList = [
  { "name": "Jabow", "img": "Jabow.png" },
  { "name": "Shirokuma", "img": "Shirokuma.png" },
  { "name": "Punkupine", "img": "Punkupine.png" },
  { "name": "Sorrypus", "img": "Sorrypus.png" },
  { "name": "McKraken", "img": "McKraken.png" },
  { "name": "Abuzampa", "img": "Abuzampa.gif" },
  { "name": "Pakkun", aliases: ["Pakkun", "Gabriel"], "img": "Pakkun.gif" },
  { "name": "Kyunshii", aliases: ["Kyunshii", "Zukkyunshii"], "img": "Kyunshii.gif" },
  { "name": "Hare-onna", aliases: ["Hare-onna", "Ame-onna"], "img": "Hare-onna.gif" },
  { "name": "Kakurenbou", aliases: ["Kakerenbou", "Inaiinaibaa"], "img": "Kakurenbou.gif" },
  { "name": "Granizia", "img": "Granizia.gif" },
  { "name": "Damona", "img": "Damona.gif" },
  { "name": "Zazel", "img": "Zazel_2040.png" },
  { "name": "Daniel", aliases: ["Daniel", "Big Danny"], "img": "Daniel.gif" },
  { "name": "Choky", aliases: ["Choky", "Shiomaneki"], "img": "Choky.gif" },
  { "name": "Flamileon", "img": "Flamileon.gif" },
  { "name": "Itashikatanashi", aliases: ["Itashikatanashi", "Yamuwoen"], "img": "Itashikatanashi.gif" },
  { "name": "Saya", aliases: ["Saya", "Makenki"], "img": "Saya.gif" },
  { "name": "Papa Rayo", "img": "Papa_Rayo.gif" },
  { "name": "Venocto", "img": "Venocto.gif" },
  { "name": "Venoctoscuro", "img": "Venoctoscuro.gif" },
  { "name": "Shogunyan", "img": "Shogunyan.gif" },
  { "name": "Komasura", "img": "Komasura.gif" },
  { "name": "Aracnio", "img": "Aracnio.gif" },
  { "name": "Lil' Acala", aliases: ["Lil' Acala", "Lil Acala", "Peque Acala"], "img": "Lil'_Acala.png" },
  { "name": "Honmaguro-taisho", aliases: ["Honmaguro-taisho", "Magulodon", "Neptuna"], "img": "Honmaguro-taisho.gif" },
  { "name": "Semicolon", aliases: ["Semicolon", "Semirongu", "Bugaboo"], "img": "Semicolon.gif" },
  { "name": "Komasan", "img": "Komasan.gif" },
  { "name": "Komajiro", "img": "Komajiro.gif" },
  { "name": "Banchou", aliases: ["Banchou", "Bourei Banchou", "Basher"], "img": "Banchou.gif" },
  { "name": "Noko", "img": "Noko.gif" },
  { "name": "Dragon Azur", "img": "Dragon_Azur.gif" },
  { "name": "Fuu-kun", aliases: ["Fuu-kun", "Fuujin"], "img": "Fuu-kun.gif" },
  { "name": "Rai-chan", aliases: ["Rai-chan", "Raijin"], "img": "Rai-chan.gif" },
  { "name": "Eleganfibio", "img": "Eleganfibio.gif" },
  { "name": "Jibanyan", "img": "Jibanyan.gif" },
  { "name": "Uribou", aliases: ["Uribou", "Inosasaou"], "img": "Uribou.gif" },
  { "name": "Hamham", aliases: ["Hamham", "Abraham"], "img": "Hamham.gif" },
  { "name": "Doyapon", aliases: ["Doyapon", "Doudanuki"], "img": "Doyapon.gif" },
  { "name": "Kyubi", "img": "Kyubi.gif" },
  { "name": "Nievacolas", "img": "Nievacolas.gif" },
  { "name": "Charlie", aliases: ["Charlie", "Ghostcycle"],  "img": "Charlie.gif" },
  { "name": "Kezurin", aliases: ["Kezurin", "Jinkotsukezuri"], "img": "Kezurin.gif" },
  { "name": "Hot Pot", aliases: ["Hot Pot", "Zundoumaru", "Shiryou no Dokudoku-nabe"], "img": "Hot_Pot.gif" },
  { "name": "Telespejo", "img": "Telespejo.gif" },
  { "name": "Jinta", aliases: ["Jinta", "Jingeki"], "img": "Jinta.gif" },
  { "name": "Kantaro", aliases: ["Kantaro", "Jihanki"], "img": "Kantaro.gif" },
  { "name": "Tidynator", aliases: ["Tidynator", "Robonyan 00"], "img": "Tidynator.gif" },
  { "name": "Kiborikkuma", aliases: ["Kiborikkuma", "Onikuma"], "img": "Kiborikkuma.gif" },
  { "name": "Junior", aliases: ["Junior", "Burning Dragon"], "img": "Junior.gif" },
  { "name": "Whisper", "img": "Whisper_2024.png" },
  { "name": "Sly", aliases: ["Sly", "Slimamander", "Super Sly", "Mitsumata Ghidorah"], "img": "Sly.gif" },
  { "name": "Becchan", aliases: ["Becchan", "Nuttarabeccha"], "img": "Becchan.gif" },
  { "name": "Dameboy", aliases: ["Dameboy", "Zettai Guardman"], "img": "Dameboy.gif" },
  { "name": "Fukurou", "img": "Fukurou.png" },
  { "name": "Intelecto", "img": "Intelecto.gif" },
  { "name": "Ogu Togu Mogu", aliases: ["Ogu Togu Mogu", "Ogu, Togu y Mogu", "Ogu, Togu & Mogu"], "img": "Ogu_Togu_Mogu.png" },
  { "name": "Voidera", "img": "Voidera.png" },
  { "name": "Shutendouji", aliases: ["Shutendouji", "Isotomas"], "img": "Shutendouji.png" },
  { "name": "Juno", "img": "Juno.png" },
  { "name": "Boreas", "img": "Boreas.png" },
  { "name": "Eurus", "img": "Eurus.png" },
  { "name": "Saros", "img": "Saros.png" },
  { "name": "Enma Demoniaco", aliases: ["Enma Demoniaco", "Yasha Enma", "Enma Iluminado", "Kakusei Enma"], "img": "Yasha_Enma.gif" },
  { "name": "Yamanbaa", aliases: ["Yamanbaa", "Yamambaa"], "img": "Yamanbaa.png" },
  { "name": "Kenshin Amaterasu", aliases: ["Kenshin Amaterasu", "Amaterasu"], "img": "Kenshin_Amaterasu.png" },
  { "name": "Suu-san", "img": "Suu-san.png" },
  { "name": "Nomi", aliases: ["Nomi", "Zashiki-warashi", "Tengu'ou Kurama"], "img": "Gnomey.gif" },
  { "name": "Yamanbaa", aliases: ["Yamanbaa", "Yamambaa"], "img": "Yamanbaa_LS.png" },
  { "name": "Kukuri-hime", "img": "Kukuri-hime.png" },
  { "name": "Gesshin Tsukuyomi", aliases: ["Gesshin Tsukuyomi", "Tsukuyomi"], "img": "Gesshin_Tsukuyomi.png" },
  { "name": "Gusto", aliases: ["Gusto", "Kaibyou Kamaitachi", "Neko'ou Bastet"], "img": "Gusto.gif" },
  { "name": "Kawauso", "img": "Kawauso.png" },
  { "name": "Tamamo", aliases: ["Tamamo", "Tamamo-no-mae"], "img": "Tamamo.gif" },
  { "name": "Gyuuki", "img": "Gyuuki.png" },
  { "name": "Narigama", "img": "Narigama.png" },
  { "name": "Blobgoblin", "img": "Blobgoblin.png" },
  { "name": "Azukiarai", "img": "Azukiarai.png" },
  { "name": "Kappa", aliases: ["Kappa", "Kappa'ou Sagojou"], "img": "Kappa.gif" },
  { "name": "Shien", "img": "Shien.png" },
  { "name": "Gran Enma Gouen", aliases: ["Gran Enma Gouen", "Gran Enma", "Enma Daiou"], "img": "Gran_Enma_Gouen.png" },
  { "name": "Naviwan", "img": "Naviwan.png" },
  { "name": "Konsaru", "img": "Konsaru.png" },
  { "name": "Dron", "img": "Dron.png" },
  { "name": "Alienigena", aliases: ["Alienigena", "Alien", "Miembro de la tribu Mikakunin"], "img": "Miembro_Mikakunin.png" },
  { "name": "Kitaro", "img": "Kitaro.png" },
  { "name": "Papa Ojo", aliases: ["Papa Ojo", "Medama Oyaji"], "img": "Papa_Ojo.png" },
  { "name": "Babamandra", "img": "Babamandra_SS.png" },
  { "name": "Medamanbou", aliases: ["Medamanbou", "Ojo de Babamandra"], "img": "Medamanbou.png" },    
  { "name": "Jingeki", "img": "Jingeki.png" },
  { "name": "Yamanbaa", aliases: ["Yamanbaa", "Yamambaa"], "img": "Yamanbaa_Boss.png" },
  { "name": "Shinmagunshin Fukurou", aliases: ["Shinmagunshin Fukurou", "Fukurou Corrupto"], "img": "Shinmagunshin_Fukurou.png" },
  { "name": "Lady Aracne", "img": "Lady_Aracne.png" },
  { "name": "Tamamo-no-mae", "img": "Tamamo-no-mae.png" },
  { "name": "Shinma Voidera", aliases: ["Shinma Voidera", "Shinma Douketsu", "Voidera Corrupto"], "img": "Voidera_Boss.png" },
  { "name": "Shien", "img": "Shien.png" },
  { "name": "Shinma Ananta", aliases: ["Shinma Ananta", "Shinma Kaira"], "img": "Ananta_Boss.png" },
  { "name": "Overseer", "img": "Overseer.png" },
  { "name": "Maten Overseer", aliases: ["Maten Overseer", "Maten Soranaki"], "img": "Maten_Overseer.png" },
  { "name": "Raidenryu", "img": "Raidenryu.png" },
  { "name": "Ananta Oscuro", aliases: ["Ananta Oscuro", "Yami Kaira"], "img": "Ananta_Oscuro.png" },
  { "name": "Acala Celestial", aliases: ["Acala Celestial", "Fudou Myouou Ten"], "img": "Acala_Celestial.png" },
  { "name": "Acala Exaltado", aliases: ["Acala Exaltado", "Acala Exalted"], "img": "Acala_Exaltado.png" },
  { "name": "Suzaku", "img": "Suzaku.png" },
  { "name": "Genbu", "img": "Genbu.png" },
  { "name": "Asura", "img": "Asura.png" },
  { "name": "Byakko", "img": "Byakko.png" },
  { "name": "Goemon", "img": "Goemon.png" },
  { "name": "Matsu", "img": "Matsu.png" },
  { "name": "Minamoto", "img": "Minamoto.png" },
  { "name": "Benkei", "img": "Benkei_P.png" },
  { "name": "Kyryn", "img": "Kyryn_C.png" },
  { "name": "Suzaku", "img": "Suzaku_C.png" },
  { "name": "Genbu", "img": "Genbu_C.png" },
  { "name": "Byakko", "img": "Byakko_C.png" },
  { "name": "Souryuu", "img": "Souryuu.png" },
  { "name": "Gunshin Susanoo", aliases: ["Gunshin Susanoo", "Susanoo"], "img": "Gunshin_Susanoo.png" }
];

let score = 0; 
let gameEnded = false; // Evita cambios una vez terminado el juego
const unlockedYoKai = new Set(); // Registro de Yo-kai desbloqueados por índice

// Normalizar la entrada del usuario (sin tildes y en minúsculas)
function normalizeString(str) {
    return str.normalize("NFD").replace(/[̀-\u036f]/g, "").toLowerCase();
}

// Crear el objeto de audio una sola vez
let getSound = new Audio("get.mp3");

// Reproducir sonido cuando se desbloquea un Yo-kai (sin solapamiento)
function playGetSound() {
    if (!getSound.paused) {
        getSound.pause(); // Detener el sonido actual si ya está reproduciéndose
        getSound.currentTime = 0; // Reiniciar el sonido al principio
    }
    getSound.play(); // Reproducir el sonido
}

// Actualizar la puntuación en formato (adivinados / totales)
function updateScoreDisplay() {
    const scoreDisplay = document.getElementById("score");
    scoreDisplay.textContent = `${score}/${yoKaiList.length}`;
}

// Verificar la respuesta del usuario
function checkAnswer() {
    if (gameEnded) return; // Si el juego ha terminado, no hacer nada

    const userAnswer = normalizeString(document.getElementById("answer-input").value.trim());

    let correctGuess = false; // Bandera para reproducir el sonido solo si hay aciertos

    yoKaiList.forEach((yoKai, index) => {
        // Normaliza todos los nombres asociados al Yo-kai
        const normalizedNames = [yoKai.name, ...(yoKai.aliases || [])].map(name => normalizeString(name));

        // Si la respuesta coincide con alguno de los nombres y no ha sido desbloqueado
        if (normalizedNames.includes(userAnswer) && !unlockedYoKai.has(index)) {
            const yoKaiImg = document.getElementById(`yo-kai${index + 1}`);
            if (yoKaiImg && yoKaiImg.src.includes("No-kai4.png")) {
                yoKaiImg.src = yoKai.img; // Actualiza la imagen

                // Añadir clase para animación
                yoKaiImg.classList.add("yokai-unlocked");
                yoKaiImg.addEventListener("animationend", () => {
                    yoKaiImg.classList.remove("yokai-unlocked"); // Quitar clase tras animación
                });

                unlockedYoKai.add(index); // Marcar el Yo-kai como desbloqueado
                score++;
                correctGuess = true; // Se encontró un acierto
            }
        }
    });

    if (correctGuess) {
        playGetSound(); // Reproducir sonido solo si hubo un acierto
        updateScoreDisplay(); // Actualizar puntuación
        document.getElementById("answer-input").value = ""; // Borra la respuesta después de un acierto
    }

    checkGameEnd(); // Verifica si el juego ha terminado
}

// Verificar si el juego ha terminado (cuando se han adivinado todos los Yo-kai)
function checkGameEnd() {
    if (score === yoKaiList.length) {
        gameEnded = true;
        stopTimer(); // Detener el temporizador
        showCongratsImage(); // Mostrar imagen de "¡Felicidades!"
    }
}

// Mostrar la imagen de "¡Felicidades!" al finalizar el juego
function showCongratsImage() {
    const congratsImg = document.createElement("img");
    congratsImg.src = "congrats.png";
    congratsImg.id = "congrats-image";
    congratsImg.style.position = "fixed";
    congratsImg.style.bottom = "0";
    congratsImg.style.left = "50%";
    congratsImg.style.transform = "translateX(-50%)";
    congratsImg.style.width = "100vw";
    congratsImg.style.zIndex = "1000";
    congratsImg.style.cursor = "pointer";

    // Ocultar la imagen al hacer clic
    congratsImg.addEventListener("click", () => {
        congratsImg.remove();
    });

    document.body.appendChild(congratsImg);
}

// Temporizador
let startTime;
let timerInterval;

function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;

    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

    const formattedTime = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    document.getElementById("time").textContent = formattedTime;
}

function stopTimer() {
    clearInterval(timerInterval);
}

// Manejador de evento: validación automática con "input"
document.getElementById("answer-input").addEventListener("input", checkAnswer);

// Inicializar el marcador y temporizador al cargar la página
updateScoreDisplay(); // Inicializa la puntuación en 0/total
startTimer();

window.addEventListener("beforeunload", (event) => {
    if (score > 0) { // Mostrar advertencia solo si hay progreso
        event.preventDefault();
        event.returnValue = "¿Estás seguro de que quieres salir? Se perderá todo el progreso.";
    }
});

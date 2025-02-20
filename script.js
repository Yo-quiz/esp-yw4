// Lista completa de Yo-kai con sus nombres e imágenes
const yoKaiList = [
  [
  { "name": "Jabow", "img": "Jabow.png" },
  { "name": "Shirokuma", "img": "Shirokuma.png" },
  { "name": "Punkupine", "img": "Punkupine.png" },
  { "name": "Sorrypus", "img": "Sorrypus.png" },
  { "name": "McKraken", "img": "McKraken.png" },
  { "name": "Abuzampa", "img": "Abuzampa.gif" },
  { "name": "Pakkun", "img": "Pakkun.gif" },
  { "name": "Kyunshii", "img": "Kyunshii.gif" },
  { "name": "Hare-onna", "img": "Hare-onna.gif" },
  { "name": "Kakurenbou", "img": "Kakurenbou.gif" },
  { "name": "Granizia", "img": "Granizia.gif" },
  { "name": "Damona", "img": "Damona.gif" },
  { "name": "Zazel", "img": "Zazel_2040.png" },
  { "name": "Daniel", "img": "Daniel.gif" },
  { "name": "Choky", "img": "Choky.gif" },
  { "name": "Flamileon", "img": "Flamileon.gif" },
  { "name": "Itashikatanashi", "img": "Itashikatanashi.gif" },
  { "name": "Saya", "img": "Saya.gif" },
  { "name": "Papa Rayo", "img": "Papa-Rayo.gif" },
  { "name": "Venocto", "img": "Venocto.gif" },
  { "name": "Venoctoscuro", "img": "Venoctoscuro.gif" },
  { "name": "Shogunyan", "img": "Shogunyan.gif" },
  { "name": "Komasura", "img": "Komasura.gif" },
  { "name": "Aracnio", "img": "Aracnio.gif" },
  { "name": "Lil' Acala", "img": "Lil'_Acala.png" },
  { "name": "Honmaguro-taisho", "img": "Honmaguro-taisho.gif" },
  { "name": "Semicolon", "img": "Semicolon.gif" },
  { "name": "Komasan", "img": "Komasan.gif" },
  { "name": "Komajiro", "img": "Komajiro.gif" },
  { "name": "Banchou", "img": "Banchou.gif" },
  { "name": "Noko", "img": "Noko.gif" },
  { "name": "Dragon Azur", "img": "Dragon_Azur.gif" },
  { "name": "Fuu-kun", "img": "Fuu-kun.gif" },
  { "name": "Rai-chan", "img": "Rai-chan.gif" },
  { "name": "Eleganfibio", "img": "Eleganfibio.gif" },
  { "name": "Jibanyan", "img": "Jibanyan.gif" },
  { "name": "Uribou", "img": "Uribou.gif" },
  { "name": "Hamham", "img": "Hamham.gif" },
  { "name": "Doyapon", "img": "Doyapon.gif" },
  { "name": "Kyubi", "img": "Kyubi.gif" },
  { "name": "Nievacolas", "img": "Nievacolas.gif" },
  { "name": "Charlie", "img": "Charlie.gif" },
  { "name": "Kezurin", "img": "Kezurin.gif" },
  { "name": "Hot Pot", "img": "Hot_Pot.gif" },
  { "name": "Telespejo", "img": "Telespejo.gif" },
  { "name": "Jinta", "img": "Jinta.gif" },
  { "name": "Kantaro", "img": "Kantaro.gif" },
  { "name": "Tidynator", "img": "Tidynator.gif" },
  { "name": "Kiborikkuma", "img": "Kiborikkuma.gif" },
  { "name": "Junior", "img": "Junior.gif" },
  { "name": "Whisper", "img": "Whisper_2040.png" },
  { "name": "Sly", "img": "Sly.gif" },
  { "name": "Becchan", "img": "Becchan.gif" },
  { "name": "Dameboy", "img": "Dameboy.gif" },
  { "name": "Fukurou", "img": "Fukurou.png" },
  { "name": "Intelecto", "img": "Intelecto.gif" },
  { "name": "Ogu Togu Mogu", "img": "Ogu_Togu_Mogu.png" },
  { "name": "Voidera", "img": "Voidera.png" },
  { "name": "Shutendouji", "img": "Shutendouji.png" },
  { "name": "Juno", "img": "Juno.png" },
  { "name": "Boreas", "img": "Boreas.png" },
  { "name": "Eurus", "img": "Eurus.png" },
  { "name": "Saros", "img": "Saros.png" },
  { "name": "Enma Demoniaco", "img": "Yasha_Enma.gif" },
  { "name": "Yamanbaa", "img": "Yamanbaa.png" },
  { "name": "Kenshin Amaterasu", "img": "Kenshin_Amaterasu.png" },
  { "name": "Suu-San", "img": "Suu-San.png" },
  { "name": "Gnomey", "img": "Gnomey.png" },
  { "name": "Yamanbaa", "img": "Yamanbaa_LS.png" },
  { "name": "Kukuri-Hime", "img": "Kukuri-Hime.png" },
  { "name": "Gesshin Tsukuyomi", "img": "Gesshin_Tsukuyomi.png" },
  { "name": "Gusto", "img": "Gusto.gif" },
  { "name": "Kawauso", "img": "Kawauso.png" },
  { "name": "Tamamo", "img": "Tamamo.gif" },
  { "name": "Gyuuki", "img": "Gyuuki.png" },
  { "name": "Narigama", "img": "Narigama.png" },
  { "name": "Blobgoblin", "img": "Blobgoblin.png" },
  { "name": "Azukiarai", "img": "Azukiarai.png" },
  { "name": "Kappa", "img": "Kappa.gif" },
  { "name": "Shien", "img": "Shien.png" },
  { "name": "Gran Enma Gouen", "img": "Gran_Enma_Gouen.png" },
  { "name": "Naviwan", "img": "Naviwan.png" },
  { "name": "Konsaru", "img": "Konsaru.png" },
  { "name": "Dron", "img": "Dron.png" },
  { "name": "Alienigena", "img": "Miembro_Mikakunin.png" },
  { "name": "Kitaro", "img": "Kitaro.png" },
  { "name": "Papa Ojo", "img": "Papa_Ojo.png" },
  { "name": "Babamandra", "img": "Babamandra_SS.png" },
  { "name": "Medamanbou", "img": "Medamanbou.png" },    
  { "name": "Jingeki", "img": "Jingeki.png" },
  { "name": "Yamanbaa", "img": "Yamamnbaa_Boss.png" },
  { "name": "Shinmagunshin Fukurou", "img": "Shinmagunshin_Fukurou.png" },
  { "name": "Lady Aracne", "img": "Lady_Aracne.png" },
  { "name": "Tamamo-no-mae", "img": "Tamamo-no-mae.png" },
  { "name": "Shinma Voidera", "img": "Voidera_Boss.png" },
  { "name": "Shien", "img": "Shien.png" },
  { "name": "Shinma_Ananta", "img": "Ananta_Boss.png" },
  { "name": "Overseer", "img": "Overseer.png" },
  { "name": "Maten Overseer", "img": "Maten_Overseer.png" },
  { "name": "Raidenryu", "img": "Raidenryu.png" },
  { "name": "Ananta Oscuro", "img": "Ananta_Oscuro.png" },
  { "name": "Acala Celestial", "img": "Acala_Celestial.png" },
  { "name": "Acala Exaltado", "img": "Acala_Exaltado.png" },
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
  { "name": "Gunshin Susanoo", "img": "Gunshin_Susanoo.png" }
]

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
            if (yoKaiImg && yoKaiImg.src.includes("no-kai.png")) {
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

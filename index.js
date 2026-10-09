
async function hentKarakterer() {
    try {
        const response = await fetch(
            'https://whoa.onrender.com/whoas/random'
        );
        const data = await response.json();
        const film = data[0];

        document.getElementById("tittel").textContent = film.movie;
        document.getElementById("plakat").src = film.poster;
        document.getElementById("aar").textContent = film.year;
        document.getElementById("regissor").textContent = film.director;
        document.getElementById("rollefigur").textContent = film.character;
        document.getElementById("sitat").textContent = film.full_line;
        document.getElementById("tidspunkt").textContent = film.timestamp;

        document.getElementById("video").src = film.video["720p"];

    } catch (error) {
        console.log("Feil:", error);
    }
}

hentKarakterer();

document.getElementById("ny-film").addEventListener("click", hentKarakterer);


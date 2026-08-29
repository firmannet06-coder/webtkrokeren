// =========================
// X TKRO SKARISA SCRIPT
// =========================

// Tombol MASUK WEBSITE
function startWebsite() {

    // Sembunyikan popup
    document.getElementById("welcomePopup").style.display = "none";

    // Putar audio
    const audio = document.getElementById("welcomeAudio");

    if (audio) {
        audio.play().catch(() => {});
    }

    // Tampilkan loading
    document.getElementById("loader").style.display = "flex";

    // Tunggu audio sebentar sebelum loading
    setTimeout(() => {
        startLoading();
    }, 500);

}
const track = document.getElementById('carouselTrack');

function slideLeft() {
  track.scrollBy({ left: -250, behavior: 'smooth' });
}

function slideRight() {
  track.scrollBy({ left: 250, behavior: 'smooth' });
}

// Loading
function startLoading() {

    let progress = 0;

    const loader = document.getElementById("loader");
    const bar = document.getElementById("progressBar");
    const percent = document.getElementById("percent");

    const loading = setInterval(() => {

        progress++;

        bar.style.width = progress + "%";
        percent.textContent = progress + "%";

        if (progress >= 100) {

            clearInterval(loading);

            loader.style.opacity = "0";

            setTimeout(() => {

                loader.style.display = "none";
                document.body.style.overflow = "auto";

                // Animasi reveal
                document.querySelectorAll(".reveal").forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add("active");
                    }, index * 250);
                });

            }, 500);

        }

    }, 25);

}
// Koyu modu etkinleştir veya devre dışı bırak
function toggleDarkMode() {
  var darkModeEnabled = localStorage.getItem("darkModeEnabled") === "true";
  darkModeEnabled = !darkModeEnabled;
  localStorage.setItem("darkModeEnabled", darkModeEnabled.toString());

  var element = document.body;
  var darkModeIcon = document.getElementById("darkModeIcon");

  if (darkModeEnabled) {
    element.classList.add("dark-mode");
    darkModeIcon.src = "/image/moon-icon.png";
  } else {
    element.classList.remove("dark-mode");
    darkModeIcon.src = "/image/sun-icon.png";
  }

  updateDarkModeImages(darkModeEnabled);
}

// Koyu modda görüntüleri güncelle
function updateDarkModeImages(darkModeEnabled) {
  var sosyalmedyaImgGithub = document.getElementById("sosyalmedyaImgGithub");
  var sosyalmedyaImgTiktok = document.getElementById("sosyalmedyaImgTiktok");

  if (darkModeEnabled) {
    sosyalmedyaImgGithub.src = "image/github-dark.png";
    sosyalmedyaImgTiktok.src = "image/tiktok-dark.png";
  } else {
    sosyalmedyaImgGithub.src = "image/github.png";
    sosyalmedyaImgTiktok.src = "image/tiktok.png";
  }
}

// Sayfa yüklendiğinde görüntüleri güncelle ve koyu mod tercihini kontrol et
document.addEventListener("DOMContentLoaded", function() {
  var darkModeEnabled = localStorage.getItem("darkModeEnabled") === "true";
  var darkModeIcon = document.getElementById("darkModeIcon");

  if (darkModeEnabled) {
    document.body.classList.add("dark-mode");
    darkModeIcon.src = "/image/moon-icon.png";
    updateDarkModeImages(true);
  } else {
    document.body.classList.remove("dark-mode");
    darkModeIcon.src = "/image/sun-icon.png";
    updateDarkModeImages(false);
  }

  var darkModeButton = document.querySelector(".btn");
  darkModeButton.style.visibility = "visible";
});


const body = document.querySelector('body');
const darkModeToggle = document.querySelector('#dark-mode-toggle');

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});



// Inicjalizuje wartość highscore, sprawdzając, czy istnieje zapisany highscore w localStorage.
// Jeśli istnieje, ustawia wartość highscore na ten zapis i aktualizuje interfejs użytkownika.
// Jeśli nie istnieje, ustawia highscore na 0, zapisuje go w localStorage i aktualizuje interfejs użytkownika.
// Wywołanie funkcji od razu przy załadowaniu strony.
(function () {
  if (localStorage.getItem("highscore") != null) {
    document.querySelector(".high-score-value").innerHTML = localStorage.getItem("highscore");
  }
  else {
    localStorage.setItem("highscore", 0);
    document.querySelector(".high-score-value").innerHTML = localStorage.getItem("highscore");
  }
})();

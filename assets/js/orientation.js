/**
 * Verifica a orientação do dispositivo e exibe um alerta quando necessário
 * @function checkOrientation
 */
function checkOrientation() {
  const orientationAlert = document.querySelector(".orientation-alert");
  const periodicTable = document.querySelector(".periodic-table");

  // Verifica se é um dispositivo móvel
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  // Verifica se é um dispositivo com tela pequena
  const isSmallScreen = window.innerWidth < 768;

  if (isMobile && isSmallScreen) {
    // Verifica a orientação atual
    if (window.innerHeight > window.innerWidth) {
      // Modo retrato
      orientationAlert.style.display = "block";
      periodicTable.style.display = "none";

      // Tenta forçar a orientação paisagem se landscape estiver disponível
      try {
        if (screen.orientation && screen.orientation.lock) {
          screen.orientation.lock("landscape").catch(function (error) {
            console.log(
              "Não foi possível forçar a orientação paisagem:",
              error
            );
          });
        }
      } catch (e) {
        console.log("Orientação landscape não suportada");
      }
    } else {
      // Modo paisagem
      orientationAlert.style.display = "none";
      periodicTable.style.display = "grid";
    }
  } else {
    // Não é um dispositivo móvel pequeno, esconde o alerta
    orientationAlert.style.display = "none";
    periodicTable.style.display = "grid";
  }
}

// Event Listeners para verificação de orientação
window.addEventListener("load", checkOrientation);
window.addEventListener("resize", checkOrientation);
window.addEventListener("orientationchange", checkOrientation);

//your code here
document.addEventListener("DOMContentLoaded", function() {
      var openModalButton = document.getElementById("open-modal");
      var newtonModal = new bootstrap.Modal(document.getElementById("newton-modal"));

      openModalButton.addEventListener("click", function() {
        newtonModal.show();
      });
    });
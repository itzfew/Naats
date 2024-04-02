document.addEventListener("DOMContentLoaded", function () {
  const naatItems = document.querySelectorAll(".naat-item");
  const popups = document.querySelectorAll(".popup");

  naatItems.forEach((item) => {
    item.addEventListener("click", function () {
      const popupId = this.getAttribute("data-popup");
      const popup = document.getElementById(popupId);
      popup.style.display = "block";
    });
  });

  popups.forEach((popup) => {
    const closeBtn = popup.querySelector(".close-btn");
    closeBtn.addEventListener("click", function () {
      popup.style.display = "none";
    });
  });
});

// Main JavaScript for Pet Adoption System

document.addEventListener("DOMContentLoaded", function () {
  // Tab functionality
  const tabs = document.querySelectorAll(".tab");
  const tabContents = document.querySelectorAll(".tab-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      // Remove active class from all tabs and contents
      tabs.forEach((t) => t.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));

      // Add active class to current tab
      this.classList.add("active");

      // Show corresponding content
      const target = this.getAttribute("data-target");
      document.getElementById(target).classList.add("active");
    });
  });

  // Pet filter functionality
  const filterForm = document.getElementById("pet-filter-form");
  if (filterForm) {
    filterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      // In a real app, this would filter the pets based on criteria
      alert(
        "Filtering functionality would be implemented in a real application"
      );
    });
  }

  // Form validation
  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      const requiredFields = form.querySelectorAll("[required]");
      let valid = true;

      requiredFields.forEach((field) => {
        if (!field.value.trim()) {
          valid = false;
          field.classList.add("error");
        } else {
          field.classList.remove("error");
        }
      });

      if (!valid) {
        e.preventDefault();
        alert("请填写所有必填字段");
      }
    });
  });

  // Toggle mobile menu (in a real app)
  const menuToggle = document.querySelector(".menu-toggle");
  if (menuToggle) {
    menuToggle.addEventListener("click", function () {
      const navLinks = document.querySelector(".nav-links");
      navLinks.classList.toggle("show");
    });
  }

  // Canvas signature (for adoption application)
  const canvas = document.getElementById("signature-canvas");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    let drawing = false;

    // Set canvas dimensions
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Drawing functions
    function startDrawing(e) {
      drawing = true;
      draw(e);
    }

    function stopDrawing() {
      drawing = false;
      ctx.beginPath();
    }

    function draw(e) {
      if (!drawing) return;

      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX || e.touches[0].clientX) - rect.left;
      const y = (e.clientY || e.touches[0].clientY) - rect.top;

      ctx.lineWidth = 2;
      ctx.lineCap = "round";
      ctx.strokeStyle = "#000";

      ctx.lineTo(x, y);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x, y);
    }

    // Event listeners
    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("touchstart", startDrawing);
    canvas.addEventListener("touchend", stopDrawing);
    canvas.addEventListener("touchmove", draw);

    // Clear signature button
    const clearButton = document.getElementById("clear-signature");
    if (clearButton) {
      clearButton.addEventListener("click", function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      });
    }
  }

  // Modal functionality
  const modalTriggers = document.querySelectorAll("[data-modal]");
  modalTriggers.forEach((trigger) => {
    trigger.addEventListener("click", function () {
      const modalId = this.getAttribute("data-modal");
      const modal = document.getElementById(modalId);
      modal.classList.add("show");
    });
  });

  const closeButtons = document.querySelectorAll(".close-modal");
  closeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const modal = this.closest(".modal");
      modal.classList.remove("show");
    });
  });
});

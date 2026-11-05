
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
const themeToggle = document.getElementById("themeToggle");

const searchForm = document.getElementById("searchForm");
const carGrid = document.getElementById("carGrid");
const noResults = document.getElementById("noResults");

const toast = document.getElementById("toast");
const dialog = document.getElementById("carDialog");

let toastTimer;

// TELEFON MENYUSI
menuToggle.addEventListener("click", () => {
  const opened = nav.classList.toggle("open");

  menuToggle.textContent = opened ? "×" : "☰";
});

// Menyu bosilganda yopiladi
nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.textContent = "☰";
  });
});

// DARK MODE
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");

  themeToggle.textContent = isDark ? "☀" : "☾";
});

// AVTOMOBIL QIDIRISH
searchForm.addEventListener("submit", event => {
  event.preventDefault();

  const brand = document.getElementById("brandFilter").value;
  const type = document.getElementById("typeFilter").value;
  const price = document.getElementById("priceFilter").value;

  let visible = 0;

  carGrid.querySelectorAll(".car-card").forEach(card => {
    const matchBrand =
      brand === "all" || card.dataset.brand === brand;

    const matchType =
      type === "all" || card.dataset.type === type;

    const matchPrice =
      price === "all" || card.dataset.price === price;

    const show = matchBrand && matchType && matchPrice;

    card.hidden = !show;

    if (show) {
      visible++;
    }
  });

  noResults.hidden = visible !== 0;

  if (visible > 0) {
    showToast(`${visible} ta avtomobil topildi`);
  }
});

// SEVIMLILARGA QO‘SHISH
document.querySelectorAll(".heart").forEach(button => {
  button.addEventListener("click", () => {
    button.classList.toggle("saved");

    button.textContent =
      button.classList.contains("saved") ? "♥" : "♡";

    showToast(
      button.classList.contains("saved")
        ? "Sevimlilarga qo‘shildi"
        : "Sevimlilardan olib tashlandi"
    );
  });
});

// AVTOMOBIL TAFSILOTLARI
document.querySelectorAll(".details-btn").forEach(button => {
  button.addEventListener("click", () => {
    document.getElementById("dialogTitle").textContent =
      button.dataset.car;

    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      showToast(button.dataset.car);
    }
  });
});

// OYNANI YOPISH
document.getElementById("dialogClose").addEventListener("click", () => {
  dialog.close();
});

document.getElementById("contactFromDialog").addEventListener("click", () => {
  dialog.close();
});

// Oyna tashqarisiga bosilganda yopiladi
dialog.addEventListener("click", event => {
  if (event.target === dialog) {
    dialog.close();
  }
});

// EMAIL OBUNASI
document.getElementById("subscribeForm").addEventListener("submit", event => {
  event.preventDefault();

  document.getElementById("subscribeMessage").textContent =
    "Rahmat! Obunangiz qabul qilindi.";

  event.target.reset();
});

// XABAR CHIQARISH
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

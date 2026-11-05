

const tabs = document.querySelectorAll(".tab");
const makeSelect = document.getElementById("make");
const modelSelect = document.getElementById("model");

const minPrice = document.getElementById("minPrice");
const maxPrice = document.getElementById("maxPrice");
const minLabel = document.getElementById("minLabel");
const maxLabel = document.getElementById("maxLabel");

const searchBtn = document.getElementById("searchBtn");
const resultMessage = document.getElementById("resultMessage");

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

let carType = "New";

const carModels = {
  Audi: ["Q7", "A4", "A6", "Q5"],
  BMW: ["X5", "X7", "M3", "i7"],
  "Mercedes-Benz": ["C-Class", "E-Class", "GLE", "S-Class"],
  Toyota: ["Camry", "Corolla", "RAV4", "Land Cruiser"],
  Tesla: ["Model S", "Model 3", "Model X", "Model Y"],
  Chevrolet: ["Malibu", "Cobalt", "Tahoe", "Equinox"]
};

// New va Used tugmalari
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");

    carType = tab.dataset.type;
    resultMessage.textContent = "";
  });
});

// Marka tanlanganda modellarni o'zgartirish
makeSelect.addEventListener("change", () => {
  const models = carModels[makeSelect.value] || [];

  modelSelect.innerHTML = "";

  models.forEach((model) => {
    const option = document.createElement("option");
    option.value = model;
    option.textContent = model;
    modelSelect.appendChild(option);
  });
});

// Narxni formatlash
function formatPrice(price) {
  return "$" + Number(price).toLocaleString("en-US");
}

// Narx qiymatlarini ko'rsatish
function updatePrices(changedInput) {
  let min = Number(minPrice.value);
  let max = Number(maxPrice.value);

  if (min > max) {
    if (changedInput === minPrice) {
      minPrice.value = max;
      min = max;
    } else {
      maxPrice.value = min;
      max = min;
    }
  }

  minLabel.textContent = formatPrice(min);
  maxLabel.textContent = formatPrice(max);
}

minPrice.addEventListener("input", () => updatePrices(minPrice));
maxPrice.addEventListener("input", () => updatePrices(maxPrice));

// Qidiruv tugmasi
searchBtn.addEventListener("click", () => {
  const make = makeSelect.value;
  const model = modelSelect.value;
  const min = formatPrice(minPrice.value);
  const max = formatPrice(maxPrice.value);

  resultMessage.textContent =
    `${carType} ${make} ${model} avtomobili: ${min} – ${max}.`;
});

// Telefon menyusi
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("show");

  menuToggle.innerHTML = isOpen
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
});

// Menyudagi havolani bosganda menyuni yopish
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  });
});

const signInBtn = document.getElementById("signInBtn");
const signInModal = document.getElementById("signInModal");
const modalClose = document.getElementById("modalClose");
const signInForm = document.getElementById("signInForm");
const loginMessage = document.getElementById("loginMessage");

// Modalni ochish
signInBtn.addEventListener("click", () => {
  signInModal.classList.add("active");
  loginMessage.textContent = "";
});

// X tugmasi bilan yopish
modalClose.addEventListener("click", () => {
  signInModal.classList.remove("active");
});

// Modal tashqarisini bosganda yopish
signInModal.addEventListener("click", (event) => {
  if (event.target === signInModal) {
    signInModal.classList.remove("active");
  }
});

// Escape tugmasi bilan yopish
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    signInModal.classList.remove("active");
  }
});

// Forma yuborilganda
signInForm.addEventListener("submit", (event) => {
  event.preventDefault();

  loginMessage.textContent =
    "Forma tayyor! Haqiqiy login uchun server kerak.";
});

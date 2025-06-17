const images = ["images/1.jpg", "images/2.jpg", "images/3.jpg"];
let current = 0;

const imgElement = document.getElementById("slide");
const counter = document.getElementById("counter");

//Вывод порядкового номера изображения
function updateSlide() {
  imgElement.src = images[current];
  imgElement.alt = `Изображение ${current + 1}`;
  counter.textContent = `Изображение ${current + 1} из ${images.length}`;
}

//Кнопка "Вперёд"
document.getElementById("next").addEventListener("click", () => {
  current = (current + 1) % images.length;
  updateSlide();
});

//Кнопка "Назад"
document.getElementById("prev").addEventListener("click", () => {
  current = (current - 1 + images.length) % images.length;
  updateSlide();
});

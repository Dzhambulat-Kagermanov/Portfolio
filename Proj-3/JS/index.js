// POPUP MENU SCRIPT
const orderFormHalf2 = document.querySelector(".oF-half-2");
const container = document.querySelector(".container-10");
const orderFormBtn = document.querySelector(".oF-btn");
const orderFormInput = document.querySelectorAll(".oF-input");
const popupBackground = document.querySelector("#popup-background");

const btn = document.querySelectorAll(".website-btn");
btn.forEach((el) => {
  el.onclick = () => {
    container.classList.add("popup-active");
    popupBackground.style.display = "block";
  };
});
popupBackground.addEventListener("click", () => {
  container.classList.remove("popup-active");
  popupBackground.style.display = "none";
});

orderFormBtn.addEventListener("click", () => {
  // ЕСЛИ INPUTS НЕ ПУСТЫЕ (IF INPUTS NO EMPTY)
  if (
    inp1.value != "" &&
    inp1.value != " " &&
    inp2.value != "" &&
    inp2.value != " " &&
    inp3.value != "" &&
    inp3.value != " " &&
    inp4.value != "" &&
    inp4.value != " "
  ) {
    orderFormHalf2.outerHTML = `
    <div class="orderForm-block__half oF-half-2">
      <div class="orderForm-block__title orderForm-block__title-1">
        <h2>Спасибо за ваш<br />заказ!</h2>
      </div>
      <div class="orderForm-block__text">
        <h2>
          В самое ближайшее время мы<br />
          свяжемся с Вами и обсудим заказ!
        </h2>
        <h2>
          С уважением,<br />
          команда ТРИУМФ
        </h2>
      </div>
    </div>`;
  }
  // ЕСЛИ INPUTS ПУСТЫЕ (IF INPUTS EMPTY)
  else {
    orderFormInput.forEach((el) => {
      if (el.value == "" || el.value == " ") {
        el.style.borderColor = "red";
        setTimeout(() => {
          el.style.borderColor = "white";
        }, "400");
      } else if (el.value != "" || el.value != " ") {
        el.style.borderColor = "green";
        setTimeout(() => {
          el.style.borderColor = "white";
        }, "400");
      }
    });
  }
});

// ПРОВЕРКА: ЕСТЬ ЛИ В INPUT КАКОЕ ТО ЗНАЧЕНИЕ (CHECKING: IF INPUT HAS SOME VALUE)
const inp1 = document.querySelector(".oF-form__inps-1>input");
const inp2 = document.querySelector(".oF-form__inps-2>input");
const inp3 = document.querySelector(".oF-form__inps-3>input");
const inp4 = document.querySelector(".oF-form__inps-4>input");

inp1.addEventListener("input", check);
inp2.addEventListener("input", check);
inp3.addEventListener("input", check);
inp4.addEventListener("input", check);

function check(element) {
  if (this.value == "" || this.value == " ") {
    this.parentNode.classList.add("oF-form__inp");
  } else if (this.parentNode.classList.contains("oF-form__inp")) {
    if (this.value != "" || this.value != " ") {
      this.closest(".oF-form__inp").classList.remove("oF-form__inp");
    }
  }
}

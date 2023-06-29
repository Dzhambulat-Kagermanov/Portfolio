// ABOUT SLIDER JS

const aboutSliderLine = document.querySelector(".about-slider__line-wrapper");
const aboutSliderBtnLeft = document.querySelector(".about__slider-left");
const aboutSliderBtnRight = document.querySelector(".about__slider-right");

let aboutOffset = 0;
let aboutItemWidth = 350 + 35;

aboutCheckPosition();
console.log(aboutOffset);

aboutSliderBtnLeft.addEventListener("click", () => {
  aboutLeftPosition();
  console.log(aboutOffset);
});
aboutSliderBtnRight.addEventListener("click", () => {
  aboutRightPosition();
  console.log(aboutOffset);
});

function aboutLeftPosition() {
  if (aboutSliderLine.offsetWidth > 385) {
    if (aboutOffset > 0) {
      aboutOffset -= 1;
      aboutCheckPosition();
    } else if (aboutOffset <= 0) {
      aboutOffset = 2;
      aboutCheckPosition();
    }
  }
}
function aboutRightPosition() {
  if (aboutSliderLine.offsetWidth > 385) {
    if (aboutOffset < 2) {
      aboutOffset += 1;
      aboutCheckPosition();
    } else if (aboutOffset >= 2) {
      aboutOffset = 0;
      aboutCheckPosition();
    }
  }
}
function aboutCheckPosition() {
  if (aboutOffset == 0) {
    aboutSliderLine.style.right = 0;
  } else if (aboutOffset == 1) {
    aboutSliderLine.style.right = aboutItemWidth + "px";
  } else if (aboutOffset == 2) {
    aboutSliderLine.style.right = aboutItemWidth * 2 + "px";
  }
}

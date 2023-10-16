const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

function scrollItems(){
  
  items.forEach((item) => item.classList.remove("current"));
  
  items[currentItem].scrollIntoView({
    behavior: "smooth",
    inline: "center",
    block: "nearest"
  });

  items[currentItem].classList.add("current");
}

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-right");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    scrollItems();    

  });
});

const navHeight = document.querySelector('header').offsetHeight;

//Scrool Padrão

document.documentElement.style.setProperty('--scroll-padding', navHeight + "px");

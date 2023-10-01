let msgCards = [...document.querySelectorAll(".msg-card")];
let msgUnreadCards = [...document.querySelectorAll(".msg-card.unread")];
let notiNum = document.querySelector("#noti-num");
let btn = document.querySelector("button");

msgCards.forEach((ele) => {
  ele.addEventListener("click", () => {
    ele.classList.toggle("unread");
  });
});

btn.addEventListener("click", () => {
  msgCards.forEach((ele) => {
    ele.classList.remove("unread");
    notiNum.textContent = 0;
  });
});

notiNum.textContent = msgUnreadCards.length;

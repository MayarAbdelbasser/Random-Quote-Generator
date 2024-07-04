//Declerations
let quoteContent = document.querySelector(".quote-content");
let quoteAuthor = document.querySelector(".quote-author");
let coptText = document.querySelector(".quote-controls span");
let btn = document.querySelector("button");
//get new quote onload
window.onload = async () => {
  let data = await fetch("https://api.quotable.io/random");
  let mydata = await data.json();
  quoteContent.textContent = mydata.content;
  quoteAuthor.textContent = mydata.authorSlug;
};

//copytext
coptText.addEventListener("click", () => {
  navigator.clipboard.writeText(
    `${quoteContent.textContent} - ${quoteAuthor.textContent}`
  );
  saberToast.success({
    title: "Success",
    text: "Quote has been copied to clipboard successfully",
    delay: 200,
    duration: 26000,
    rtl: false,
    position: "top-right",
  });
});

//change on click
btn.onclick = async () => {
  let data = await fetch("https://api.quotable.io/random");
  let mydata = await data.json();
  quoteContent.textContent = mydata.content;
  quoteAuthor.textContent = mydata.authorSlug;
};

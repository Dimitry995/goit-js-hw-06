
   let add = document.querySelector("[data-action='increment']");
   let del = document.querySelector("[data-action='decrement']");
   let span = document.querySelector("#value");
  let counterValue = 0;
  const increment = () => {
    counterValue += 1;
   span.textContent = counterValue;
  };
  const decrement = () => {
    counterValue -= 1;
    span.textContent = counterValue;
  };
  add.addEventListener("click", increment);
  del.addEventListener("click", decrement);

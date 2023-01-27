// Select all list items
const listItems = document.querySelectorAll("li");

// Loop through each list item and add a hover effect
listItems.forEach(item => {
  item.addEventListener("mouseover", () => {
    item.style.backgroundColor = "lightgray";
    item.style.cursor = "pointer";
  });
  item.addEventListener("mouseout", () => {
    item.style.backgroundColor = "white";
    item.style.cursor = "default";
  });
});


// Select heading
const heading = document.querySelector("h1");

// Add hover effect
heading.addEventListener("mouseover", () => {
  heading.style.color = "red";
});
heading.addEventListener("mouseout", () => {
  heading.style.color = "black";
});

// input

let inputFilter = document.querySelector("#fillter-input");
// ul
let ul = document.querySelector("#name");
// li
let li = ul.querySelectorAll("li.collection-item");

// function  to inputFilter
inputFilter.addEventListener("keyup", () => {
  let filterValue = document
    .querySelector("#fillter-input")
    .value.toUpperCase();

  // for loop to all links
  for (let i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName("a")[0];
    // console.log(a);
    console.log(a.innerHTML.toUpperCase().indexOf(filterValue));

    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
});

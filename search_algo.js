// let obj = JSON.parse(localStorage.getItem("Note")) || [];



function searchAlgo(){
let obj = JSON.parse(localStorage.getItem("Note")) || [];
    
    let str=document.getElementById("search_in_input").value;
    str=str.toLowerCase();
    let search = [];
for (let key in obj) {
  if (obj[key].title.toLowerCase().includes(str)) {
    search.push(obj[key]);
  }
}
const display_on_this = document.getElementById("main_display");
display_on_this.innerHTML = "";

main_algo(search,undefined);
}
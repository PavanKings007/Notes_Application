function search_box(){
   let search_div= document.getElementById("search_Bar");
//    let contains_in_search_box=search_div.querySelectorAll();
let img_t=document.getElementById("search_in_img");
let inpu_t=document.getElementById("search_in_input");

   search_div.style.boxShadow="3px 6px 10px rgb(45, 45, 45), -3px 2px 10px rgb(45, 45, 45)";
   img_t.style.backgroundColor="aliceblue";
   inpu_t.style.backgroundColor="aliceblue";

//    search_div.forEach((color)=>{
//     contains_in_search_box[color].style.backgroundColor="#d2dbe3";
//    })
   function clickHandler(event) {
    if (!search_div.contains(event.target)) {
       search_div.style.boxShadow = "";
       img_t.style.backgroundColor="";
       inpu_t.style.backgroundColor="";
    }
 }
 document.addEventListener("click", clickHandler);
}
function hide_side_bar() {
    let hide_side_info = document.getElementById("side_Liner");
    let inner_sandwich_div = document.getElementById("inner_sandwich_div");
    let p_tag=hide_side_info.querySelectorAll("p");
    

    if(hide_side_info.style.width !="4%"){
    hide_side_info.style.width="4%";
    p_tag.forEach((p_tag)=> {p_tag.style.display="none"});
    hide_side_info.style.justifyContent="space-around"
    }
    else{
    hide_side_info.style.width="15vw";
    p_tag.forEach((p_tag)=> {p_tag.style.display="block"});
    }


    inner_sandwich_div.classList.add("shrink");
        setTimeout(function() {
            inner_sandwich_div.classList.remove("shrink");
        }, 100);
}
function side_info_div(){
    let hide_side = document.getElementById("side_Liner");
    let div_tags = hide_side.querySelectorAll("div");

    div_tags.forEach((div_tag) => {
        
        div_tag.addEventListener("click", function() {
            div_tag.classList.add("shrink");

            setTimeout(function() {
                div_tag.classList.remove("shrink");
            }, 100);
        });
    });
    
}

function addDiv(){
    let add_Note=document.getElementById("add_New_Note");
    
    add_Note.classList.add("shrink_Note");
        setTimeout(function() {
            add_Note.classList.remove("shrink_Note");
        }, 100 );
        add_Note.classList.add("shrink_Note");

        add_fresh_note();
        
}


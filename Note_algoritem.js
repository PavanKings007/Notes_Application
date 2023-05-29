
let obj = JSON.parse(localStorage.getItem("Note")) ||[];

let archive_obj=JSON.parse(localStorage.getItem("Archive")) || [] ;

let delet_obj=JSON.parse(localStorage.getItem("Trash")) || [];

// function display_all_created_notes(){
//     let main_down_button=document.getElementById("main_Note");
//     main_down_button.style.display="none";
//     let dis=document.getElementById("main_display");
//     // dis.append(note_algo());

    
// }


function display_all_created_notes(){

   
    const display_on_this = document.getElementById("main_display");
    display_on_this.innerHTML = "";
    
        note_algo(obj,"Note");
        
        

        // get_details_from_form();



}
// document.addEventListener("click", remove_Note);
function remove_Note(event){
    let blur_Effect=document.getElementById("main_display");
    let side_info_div=document.getElementById("side_Liner");
    let form_display=document.getElementById("main_Note");
    let header_tag=document.getElementById("header_tag");
    if (!event.target.closest("#add_New_Note")) {
       form_display.style.display="none";
        blur_Effect.style.filter = "none";
        side_info_div.style.filter="none";
        header_tag.style.filter="none";
    }
}


function note_algo(objj,objj_name) {

    let side_box=document.getElementById("side_Liner");
        side_box.style.height="100vh";
        
        
    
    // remove_Note();
    main_algo(objj, objj_name);

   
    // console.log(main_algo(obj, "Note"));
}

// console.log(note_algo);
function arch_algo() {
let archive_obj=JSON.parse(localStorage.getItem("Archive")) || [] ;
   
let side_box=document.getElementById("side_Liner");
side_box.style.height="auto";

    const display_on_this = document.getElementById("main_display");
    display_on_this.innerHTML = "";
    main_algo(archive_obj, "Archive");
    // console.log(main_algo(archive_obj, "Archive"));

}

function trash_algo() {
    
    let delet_obj=JSON.parse(localStorage.getItem("Trash")) || [];

    let side_box=document.getElementById("side_Liner");
    side_box.style.height="100vh";

    const display_on_this = document.getElementById("main_display");
    display_on_this.innerHTML = "";
    main_algo(delet_obj,"Trash");
    // console.log(main_algo(delet_obj, "Trash"));

}
    function all_() {
        
        let side_box=document.getElementById("side_Liner");
        side_box.style.height="auto";

    const display_on_this = document.getElementById("main_display");
    display_on_this.innerHTML = "";
    display_on_this.style.display="block"
    let h1_tag=document.createElement("h1");
    display_on_this.append(h1_tag);

    h1_tag.innerHTML="Note ";

        main_algo(obj, "Note");
        display_on_this.innerHTML += "<br>"; 

    let h1_tag_2=document.createElement("h1");
    display_on_this.append(h1_tag_2);

    h1_tag_2.innerHTML="Archive";
        main_algo(archive_obj, "Archive");
        display_on_this.innerHTML += "<br>"; 

    let h1_tag_3=document.createElement("h1");
    display_on_this.append(h1_tag_3);

    h1_tag_3.innerHTML="Trash";

        main_algo(delet_obj, "Trash");
        

    }


    // document.getElementById("form_").addEventListener("submit", function(event) {
    //     event.preventDefault(); 

function get_details_from_form(){
    let input_title=document.getElementById("input_title").value;
    let input_note=document.getElementById("input_note").value;
    let date=new Date();
    let date_now=date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear()+"  "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    if(color_id==undefined){
        color_id="#96DFD0";
    }
    let id_number=obj.length;
    let newObj={
        id: id_number+1,
        title: input_title,
        note: input_note,
        color: color_id,
        date:date_now,
        check_box:check_box
    };
    obj.push(newObj);
    localStorage.setItem("Note",JSON.stringify(obj));
    display_all_created_notes();
    // document.addEventListener("click", remove_Note);

    // dele();
    // localStorage.clear();
    // count=-1;
    // console.log();
    // localStorage.setItem("demo", obj[1].title)
  }
// })
// function dele(){
//     let obj = JSON.parse(localStorage.getItem("Note")) || [];
//     obj.splice(1,1);
//     localStorage.setItem("Note", JSON.stringify(obj));
// }
function change_bg(color) {
    let main_Note = document.getElementById("main_Note");
    main_Note.style.backgroundColor = color;
    color_id = color;
}

function reset_change_bg(){
    let main_Note = document.getElementById("main_Note");
    main_Note.style.backgroundColor = "";
}



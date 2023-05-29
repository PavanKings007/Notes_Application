display_all_created_notes();

let color_id;
let check_box;
function main_algo(object_,obj_name){
    // get_details_from_form();
    let display_on_this=document.getElementById("main_display");
    let innner_div=document.createElement("div")
    innner_div.id="innner_div";
    if(object_.length==0){
      let emty=document.createElement("h1");
      emty.textContent="No data to show........";
      innner_div.append(emty);
    }
    for(let i=0;i<object_.length;i++){


    let note_display_div=document.createElement("div");
    note_display_div.id="note_algo_div";
    note_display_div.setAttribute("name",object_[i].id);
    note_display_div.style.backgroundColor=object_[i].color;


    let note_display_title=document.createElement("h2");
    note_display_title.id="note_algo_title";
    note_display_title.innerHTML=object_[i].title ;


    let note_display_note=document.createElement("p");
    note_display_note.id="note_algo_note";
    note_display_note.innerHTML=object_[i].note;

    let time_div=document.createElement("div");
    time_div.id="time_div";
    let note_display_time=document.createElement("p");
    note_display_time.id="note_algo_time";
    note_display_time.innerHTML=object_[i].date;

    let check_box_containts=document.createElement("div");
    check_box_containts.id="check_box_containts"

    let edit_note=document.createElement("button");
    edit_note.id="edit_note";
    let edit_icon=document.createElement("img");
    edit_icon.src="icons/icons8-edit-note.png";
    edit_icon.id="edit_icon";
    edit_note.append(edit_icon);

    let archive_note=document.createElement("button");
    archive_note.id="archive_note";
    let archive_icon=document.createElement("img");

    if(obj_name==="Archive"){
      archive_icon.src="icons/icons8-upload-70.png";
      archive_icon.id="archive_icon";
      archive_note.append(archive_icon);
      archive_note.onclick=function(){
        archive_upload(i);
        note_display_div.remove();
    }
  }
  else if(obj_name==="Trash"){
    archive_icon.src="icons/icons8-upload-70.png";
      archive_icon.id="archive_icon";
      archive_note.append(archive_icon);
      archive_note.onclick=function(){
        delete_upload(i);
        note_display_div.remove();
    }
  }
  else{
    archive_icon.src="icons/icons8-archive_edit.png";
    archive_icon.id="archive_icon";
    archive_note.append(archive_icon);
    archive_note.onclick=function(){
      archive_(i);
      note_display_div.remove();
  }
}
// ...........delete........................................
    let delet_note=document.createElement("button");
    delet_note.id="delet_note";
    let delet_icon=document.createElement("img");

    delet_icon.src="icons/icons8-trash-edit.png";
    delet_icon.id="delet_icon";
    delet_note.append(delet_icon);
    // delet_note.addEventListener('click',delete_,function(){ document.removeChild(note_algo_div)});
    // delet_note.onclick=delete_;
    delet_note.addEventListener("click", function(){
        delete_(i);
        note_display_div.remove();
    })

    // localStorage.setItem(obj_name, JSON.stringify(object_));
// .....................check  Box.................................
let note_display_check_box = document.createElement("input");
note_display_check_box.id = "note_display_check_box";
note_display_check_box.type = "checkbox";



note_display_check_box.addEventListener("change", function() {
  object_[i].check_box = this.checked; // Update the check_box property
  let header_tag = document.getElementById("header_tag");
  let over_header = document.getElementById("over_header");
  let on_check_click = document.getElementById("on_check_click");
  let on_check_click_archive = document.getElementById("on_check_click_archive");
  let on_check_click_cross = document.getElementById("on_check_click_cross");
  let anyCheckBoxChecked = false;

  for (let j = 0; j < object_.length; j++) {
    if (object_[j].check_box) {
      anyCheckBoxChecked = true;
      break;
    }
  }



  


  if (anyCheckBoxChecked) {
    header_tag.style.display = "none";
    over_header.style.display = "flex";

    if (!on_check_click) {
      on_check_click = document.createElement("button");
      on_check_click.textContent = "Delete";
      on_check_click.id = "on_check_click";
      on_check_click.classList.remove("shrink_check_box_archive_delete_buttons");

      on_check_click.addEventListener("click", function() {
    // display_on_this.innerHTML = '';
        on_check_click.classList.add("shrink_check_box_archive_delete_buttons");
        
        
        setTimeout(function() {
          on_check_click.classList.remove("shrink_check_box_archive_delete_buttons");
          if(obj_name==="Trash" || obj_name==="Archive"){
          deleteCheckedItems_to_note();
        }
        else{
        deleteCheckedItems();
        }
        }, 100);
        
  localStorage.setItem(obj_name, JSON.stringify(object_));

      });

      over_header.appendChild(on_check_click);
    }

    if (!on_check_click_archive) {
      on_check_click_archive = document.createElement("button");
      on_check_click_archive.textContent = "Archive";
      on_check_click_archive.id = "on_check_click_archive";
      on_check_click_archive.classList.remove("shrink_check_box_archive_delete_buttons");

      on_check_click_archive.addEventListener("click", function() {
        on_check_click_archive.classList.add("shrink_check_box_archive_delete_buttons");
        
        setTimeout(function() {
          on_check_click_archive.classList.remove("shrink_check_box_archive_delete_buttons");
          if(obj_name==="Archive" || obj_name==="Trash"){
          archiveCheckedItems_to_note();
        }
        else{
        archiveCheckedItems();
        }
        }, 100);

        localStorage.setItem(obj_name, JSON.stringify(object_));
        
      });

      over_header.appendChild(on_check_click_archive);
    }

    if (!on_check_click_cross) {
      on_check_click_cross = document.createElement("button");
      on_check_click_cross.textContent = "X";
      on_check_click_cross.id = "on_check_click_cross";
      on_check_click_cross.classList.remove("shrink_check_box_archive_delete_buttons");

      on_check_click_cross.addEventListener("click", function() {
        on_check_click_cross.classList.add("shrink_check_box_archive_delete_buttons");
        setTimeout(function() {
          on_check_click_cross.classList.remove("shrink_check_box_archive_delete_buttons");
        }, 100);
      });

      over_header.appendChild(on_check_click_cross);
    }
  } else {
    over_header.style.display = "none";

    if (on_check_click) {
      on_check_click.remove();
    }
    if (on_check_click_archive) {
      on_check_click_archive.remove();
    }
    if (on_check_click_cross) {
      on_check_click_cross.remove();
    }

    header_tag.style.display = "flex";
  }

  // Save the updated object_ to localStorage
  localStorage.setItem(obj_name, JSON.stringify(object_));
});

    
   


// ......................add to trash or archive....................

  
// ................................................................
    note_display_div.append(note_display_title);

    note_display_div.append(note_display_note);
    
    time_div.append(note_display_time);
    note_display_div.append(time_div);
    
    // note_display_div.append(note_display_check_box);
    check_box_containts.append(edit_note);
    check_box_containts.append(archive_note);
    check_box_containts.append(delet_note);
    note_display_div.append(check_box_containts);
check_box_containts.append(note_display_check_box);
    
    innner_div.append(note_display_div);

    }
    display_on_this.append(innner_div);
    localStorage.setItem(obj_name, JSON.stringify(object_));
}
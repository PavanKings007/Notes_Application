






function sider_fix() {
    let sider_tags_color_fix = document.getElementById("side_Liner");
    let fields_in_sider = sider_tags_color_fix.querySelectorAll("div");


    

    fields_in_sider.forEach((n) => {
        n.addEventListener('click', function () {
            fields_in_sider.forEach((div) => {
                if (div === n) {
                    div.style.backgroundColor = "#ffe600";
                    let imgTags = div.querySelectorAll("img");
                    let pTags = div.querySelectorAll("p");
                    imgTags.forEach((img) => {
                        img.style.filter = "brightness(0%)";
                    });
                    pTags.forEach((p) => {
                        p.style.color = "black";
                    });
                } else {
                    div.style.backgroundColor = "";
                    let imgTags = div.querySelectorAll("img");
                    let pTags = div.querySelectorAll("p");
                    imgTags.forEach((img) => {
                        img.style.filter = "";
                    });
                    pTags.forEach((p) => {
                        p.style.color = "";
                    });
                }
            });
        });
    });


}

sider_fix();


// .................................................................................



    function archive_upload(index){
        let noteItem = archive_obj.splice(index, 1)[0];
        obj.push(noteItem);
          localStorage.setItem("Note", JSON.stringify(obj));
          localStorage.setItem("Archive",JSON.stringify(archive_obj));

      }
      function archiveCheckedItems_to_note(){
          let noteItems = [];
          let remainingItems = [];
          for (let j = 0; j <archive_obj.length; j++) {
            if (archive_obj[j].check_box) {
              noteItems.push(archive_obj[j]);
            } else {
              remainingItems.push(archive_obj[j]);
            }
          }
        console.log(archivedItems);
          archive_obj = remainingItems;
          localStorage.setItem("Archive", JSON.stringify(archive_obj));
          multi_archive(noteItems);
          // localStorage.setItem("Archive", JSON.stringify(archive_obj));
      
          remove_items_in_html(noteItems);
      
        }
      
      
      
        function remove_items_in_html(noteItems){
          // let delete_in_html=document.getElementById("note_algo_div");
      
          for(let i=0;i<archivedItems.length;i++){
            let id_=noteItems[i].id;
            let note_in_html=document.getElementsByName(id_);
           
          note_in_html[0].remove();
          }
          document.getElementById("over_header").style.display="none";
          document.getElementById("header_tag").style.display="flex";
        }
        
        
        function multi_archive(noteItems) {
          if (!localStorage.getItem("Note")) {
            localStorage.setItem("Note", JSON.stringify([]));
          }
        
          let note = JSON.parse(localStorage.getItem("Note"));
          note.push(...noteItems);
          localStorage.setItem("Note", JSON.stringify(note));
          
        }
        

// .............................................................................


function delete_upload(index){
    let note=delet_obj.splice(index,1)[0];
    obj.push(note);
    localStorage.setItem("Note", JSON.stringify(obj));
    localStorage.setItem("Trash",JSON.stringify(delet_obj));
  }
  
  function deleteCheckedItems_to_note() {
    let noteItems = [];
    let remainingItems = [];
    for (let j = 0; j < delet_obj.length; j++) {

      if (delet_obj[j].check_box) {
        noteItems.push(delet_obj[j]);
      } else {
        remainingItems.push(delet_obj[j]);
      }
    }
    console.log(noteItems);
    delet_obj = remainingItems;
    localStorage.setItem("Trash", JSON.stringify(delet_obj));
    multi_delete(noteItems);
    remove_items_in_html(noteItems);
  }
  function remove_items_in_html(noteItems){
  
    for(let i=0;i<noteItems.length;i++){
      let id_=noteItems[i].id;
      let delete_in_html=document.getElementsByName(id_);
      
    delete_in_html[0].remove();
  
    }
    document.getElementById("over_header").style.display="none";
    document.getElementById("header_tag").style.display="flex";
  }
  
  
  function multi_delete(noteItems) {
    if (!localStorage.getItem("Note")) {
      localStorage.setItem("Note", JSON.stringify([]));
    }
  
    let note = JSON.parse(localStorage.getItem("Note"));
    note.push(...noteItems);
    localStorage.setItem("Note", JSON.stringify(note));
    
  }
function archive_(index){
  let archivedItem = obj.splice(index, 1)[0];
  archive_obj.push(archivedItem);
    localStorage.setItem("Archive",JSON.stringify(archive_obj));
    localStorage.setItem("Note", JSON.stringify(obj));
}
function archiveCheckedItems(){
    let archivedItems = [];
    let remainingItems = [];
    for (let j = 0; j < obj.length; j++) {
      if (obj[j].check_box) {
        archivedItems.push(obj[j]);
      } else {
        remainingItems.push(obj[j]);
      }
    }
  console.log(archivedItems);
    obj = remainingItems;
    localStorage.setItem("Note", JSON.stringify(obj));
    multi_archive(archivedItems);
    // localStorage.setItem("Archive", JSON.stringify(archive_obj));

    remove_items_in_html(archivedItems);

  }



  function remove_items_in_html(archivedItems){
    // let delete_in_html=document.getElementById("note_algo_div");

    for(let i=0;i<archivedItems.length;i++){
      let id_=archivedItems[i].id;
      let archive_in_html=document.getElementsByName(id_);
     
    archive_in_html[0].remove();
    }
    document.getElementById("over_header").style.display="none";
    document.getElementById("header_tag").style.display="flex";
  }
  
  
  function multi_archive(archivedItems) {
    if (!localStorage.getItem("Archive")) {
      localStorage.setItem("Archive", JSON.stringify([]));
    }
  
    let archive = JSON.parse(localStorage.getItem("Archive"));
    archive.push(...archivedItems);
    localStorage.setItem("Archive", JSON.stringify(archive));
    
  }
  
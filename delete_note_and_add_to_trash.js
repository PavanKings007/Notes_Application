function delete_(index){
  let del=obj.splice(index,1)[0];
  console.log(del);
  delet_obj.push(del)
  localStorage.setItem("Trash",JSON.stringify(delet_obj));
  localStorage.setItem("Note", JSON.stringify(obj));
}

function deleteCheckedItems() {
  let deletedItems = [];
  let remainingItems = [];
  for (let j = 0; j < obj.length; j++) {
    if (obj[j].check_box) {
      deletedItems.push(obj[j]);
    } else {
      remainingItems.push(obj[j]);
    }
  }
  obj = remainingItems;
  localStorage.setItem("Note", JSON.stringify(obj));
  multi_delete(deletedItems);
  remove_items_in_html(deletedItems);
}
function remove_items_in_html(deletedItems){

  for(let i=0;i<deletedItems.length;i++){
    let id_=deletedItems[i].id;
    let delete_in_html=document.getElementsByName(id_);
    
  delete_in_html[0].remove();

  }
  document.getElementById("over_header").style.display="none";
  document.getElementById("header_tag").style.display="flex";
}


function multi_delete(deletedItems) {
  if (!localStorage.getItem("Trash")) {
    localStorage.setItem("Trash", JSON.stringify([]));
  }

  let trash = JSON.parse(localStorage.getItem("Trash"));
  trash.push(...deletedItems);
  localStorage.setItem("Trash", JSON.stringify(trash));
  
}




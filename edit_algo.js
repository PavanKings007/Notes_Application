function editNote(index) {
    let title_ = obj[index].title;
    let description = obj[index].note;
  
    // Assuming addDiv() and add_fresh_no() functions are defined and working correctly
    addDiv();
  
    document.getElementById("input_title").value = title_;
    document.getElementById("input_note").value = description;
  
    console.log(index);

    let tile=document.getElementById("input_title").value
    let dis=document.getElementById("input_note").value;
  
    obj[index].title = tile;
    obj[index].note = dis;

    obj.splice(index,1)[0]
    localStorage.setItem("Note", JSON.stringify(obj));
  }
  
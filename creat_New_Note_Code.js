function add_fresh_note(){
    let blur_Effect=document.getElementById("main_display");
    let side_info_div=document.getElementById("side_Liner");
    let form_display=document.getElementById("main_Note");
    let header_tag=document.getElementById("header_tag");
    let size_resize=document.getElementById("color_button");
    
    if(form_display.style.display !== "block"){
        form_display.style.display="block";
        blur_Effect.style.filter="blur(4px)";
        side_info_div.style.filter="blur(4px)";
        header_tag.style.filter="blur(4px)";
        form_display.style.backgroundColor="#96DFD0";
        size_resize.style.width="10%";

    }
    else {
        form_display.style.display="none";
        blur_Effect.style.filter = "none";
        side_info_div.style.filter="none";
        header_tag.style.filter="none";
    }
}

function extend_color_section(){
    let arow=document.getElementById("arrow_butt");
    let size_resize=document.getElementById("color_button");
    if(size_resize.style.width !=="90%"){
        size_resize.style.transition = "width 1s";
    size_resize.style.width="90%";
    size_resize.style.paddingRight="7px";
    arow.style.transform = "rotate(-180deg)";

    }else{
        size_resize.style.transition = "width 1s";
    size_resize.style.width="10%";
    size_resize.style.paddingRight="4px";
    arow.style.transform = "rotate(0deg)";
    }
}










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




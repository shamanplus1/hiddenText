// let content = document.querySelector(".SEO-content");
let content = document.getElementsByClassName("Seo-content");
let tegP = content[0].querySelectorAll("p");
let buttonSeo = content[0].querySelector("#button-seo-content-hidden");
let containerButtonSeo = document.getElementsByClassName("button-seo");

for (let i = 0; i < tegP.lenght; i++) {
    console.log(tegP[i]);
}

//СКРЫТИЕ ЭЛЕМЕНТОВ

function ofsetText(tegP) {
    tegP.classList.toggle("hidden-seo")
}

function ofsetTextShow(tegP) {
    tegP.classList.toggle("hidden-seo")
}

for (let i = 1; i < tegP.length; i++) {

    ofsetText(tegP[i]);
       
}


buttonSeo.onclick = function () {

    containerButtonSeo[0].classList.toggle("icon-button-seo");


    for (let i = 1; i < tegP.length; i++) {

        ofsetTextShow(tegP[i]);
           
    }
    if (tegP[1].classList.contains("hidden-seo") == true) {
        tegP[0].classList.toggle("text-gradient");
    } else {
        tegP[0].classList.remove("text-gradient");
    }
    
    
};


// console.log(content);
// // document.createElement(content);
// console.log(tegP);


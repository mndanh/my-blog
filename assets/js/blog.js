const blogForm = document.querySelector("form");
const themeSwitcher = document.querySelector("#theme-switcher")

let screenMode = "dark";

if( themeSwitcher ){
    themeSwitcher.addEventListener("click", function(){
        // see what value of screen mode is and toggle it

        screenMode = (screenMode === "dark") ? "light" : "dark";
        document.querySelector("body").classList.replace(screenMode)
    })
}

if(blogForm){
blogForm.addEventListener("submit", function(event){
    event.preventDefault();

    window.location.href = `./article.html`
    })
}

// mini project is helpful. take time and write down a lot of these steps and see what happens
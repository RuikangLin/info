// fetch("https://api.github.com/users/RuikangRPI")
//     .then(res => res.json())
//     .then((json) => {
//         document.getElementById("root").innerHTML = JSON.stringify(json);
//     });

// Animated Tab Inspiration
// https://www.youtube.com/watch?v=zflSDW8gvWc
const tab_btns = document.querySelectorAll(".tab_btn");
const tab_panels = document.querySelectorAll(".tab_panel");
const tab_indicator = document.getElementById("tab_indicator");
let active_tab;

tab_indicator.style.width = tab_btns[0].getBoundingClientRect().width + "px";
tab_indicator.style.left = tab_btns[0].getBoundingClientRect().left - tab_btns[0].parentElement.getBoundingClientRect().left + "px";

tab_btns.forEach(tab_btn => {
    tab_btn.addEventListener("click", () => {
        let tab_target = tab_btn.getAttribute("aria-controls");
        tab_indicator.style.width = tab_btn.getBoundingClientRect().width + "px";
        tab_indicator.style.left = tab_btn.getBoundingClientRect().left - tab_btn.parentElement.getBoundingClientRect().left + "px";
        tab_panels.forEach(tab_panel => {
            if(tab_target === tab_panel.getAttribute("id")) {
                tab_panel.classList.remove("hidden")
            } else {
                tab_panel.classList.add("hidden")
            }
        });
        active_tab = tab_btn;
        console.log(active_tab);
    });
});

// fix the indictor size on orientation change on mobile devices
window.addEventListener("orientationchange", function() {
    setTimeout(function(){
        tab_indicator.style.width = active_tab.getBoundingClientRect().width + "px";
        tab_indicator.style.left = active_tab.getBoundingClientRect().left - active_tab.parentElement.getBoundingClientRect().left + "px";
    }, 5);
	
}, false);
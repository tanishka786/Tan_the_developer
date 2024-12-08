//script for my work section
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

//script for hambudger
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

//    script for google excel sheet
const scriptURL =
    "https://script.google.com/macros/s/AKfycbw50AhA9enVWR-4e2VJ_eKFUEYVp5RKHtzG0q43OpVVKlKf5QRPQDSHRP4HyOG-dydMhw/exec";
const form = document.getElementById("gform");
const msg = document.getElementById("msg");

form.addEventListener("submit", e => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then(response => {
            msg.innerHTML =
                "Messeage sent successfully, Thank you for your kind response";
            setTimeout(function () {
                msg.innerHTML = "";
            }, 5000);
            form.reset();
        })
        .catch(error => console.error("Error!", error.message));
});

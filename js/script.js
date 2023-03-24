/* ============================== typing animation ============================ */
var typed = new Typed(".typing", {
    strings: ["", "Web Designer", "Digital Marketer", "Web Developer", "S.E.O/Specialist"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})
/* ============================== Aside ============================ */
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        removeBackSection();
        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                addBackSection(j);
                // allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    })
}
function removeBackSection() {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section");
    }
}
function addBackSection(num) {
    allSection[num].classList.add("back-section");
}
function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
}
function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}
document.querySelector(".hire-me").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");
    //console.log(sectionIndex);
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})
const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
})
function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}


// this are the changes that i have added my self for the form submite


let simonisubmit_btn = document.getElementById("simon_submit")
simonisubmit_btn.addEventListener("click", (e) => {
    e.preventDefault()
    let simoni_name = document.getElementById("simoni_name").value;
    let simoni_email = document.getElementById("simoni_email").value;
    let simoni_subject = document.getElementById("simoni_subject").value;
    let simoni_message = document.getElementById("simoni_message").value;

    let simoni_body = `simoni_name ${simoni_name} <br/> simoni_email ${simoni_email}<br/> simoni_subject ${simoni_subject}<br/> simoni_message ${simoni_message}`


    Email.send({
        Host: "smtp.gmail.com",
        Username: "ndesimoniche@gmail.com",
        Password: "vohknuxmrukyocwf",
        To: 'ndesimoniche@gmail.com',
        From: simoni_email,
        Subject: simoni_subject,
        Body: simoni_body
    }).then(
        message => alert(`thanks for contacting  ${simoni_name} please use the email NDESIMONICHE@GMAIL.COM the form has some tehnical issues our team is working on it`)
    );

    // Email.send({
    //     SecureToken: "c65a88e8-bb23-41a8-995e-607de04269a8",
    //     To: 'ndesimoniche@gmail.com',
    //     From: simoni_email,
    //     Subject: simoni_subject,
    //     Body: simoni_body
    // }).then(
    //     message => alert(message)
    // );

})

// vohknuxmrukyocwf

// smpt password
// D4CBCE2C6BEB9FD0EF62C0D92CF09C051FC7


// security key

// c65a88e8-bb23-41a8-995e-607de04269a8 
// ================= PAGE NAVIGATION =================

const navItems = document.querySelectorAll(".nav-item");
const pages = document.querySelectorAll(".page");

function showPage(pageId) {

    pages.forEach(page => {
        page.classList.remove("active-page");
    });

    navItems.forEach(item => {
        item.classList.remove("active");
    });

    const selectedPage = document.getElementById(pageId);
    const selectedNav = document.querySelector(
        `.nav-item[data-page="${pageId}"]`
    );

    if (selectedPage) {
        selectedPage.classList.add("active-page");
    }

    if (selectedNav) {
        selectedNav.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


navItems.forEach(item => {

    item.addEventListener("click", () => {

        const page = item.dataset.page;

        showPage(page);

    });

});


// ================= PROFILE EDIT =================

const editBtn = document.getElementById("editBtn");
const cancelBtn = document.getElementById("cancelBtn");
const formActions = document.getElementById("formActions");
const profileForm = document.getElementById("profileForm");

const editableFields = [
    document.getElementById("fullName"),
    document.getElementById("email"),
    document.getElementById("phone"),
    document.getElementById("about")
];


// Store original values
let originalValues = {};


function enableEditing() {

    editableFields.forEach(field => {

        originalValues[field.id] = field.value;

        field.disabled = false;

    });

    editBtn.style.display = "none";

    formActions.classList.add("show");

}


function cancelEditing() {

    editableFields.forEach(field => {

        field.value = originalValues[field.id];

        field.disabled = true;

    });

    editBtn.style.display = "inline-block";

    formActions.classList.remove("show");

}


editBtn.addEventListener("click", enableEditing);

cancelBtn.addEventListener("click", cancelEditing);


// ================= SAVE PROFILE =================

profileForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("fullName").value;

    editableFields.forEach(field => {

        field.disabled = true;

    });

    editBtn.style.display = "inline-block";

    formActions.classList.remove("show");

    // Update visible username
    document.querySelectorAll(".top-user strong, .mini-user strong")
        .forEach(element => {
            element.textContent = name;
        });

    alert("Profile updated successfully!");

});


// ================= QUICK ACTIONS =================

function continueLearning() {

    alert(
        "Your learning module will open here. " +
        "This can later be connected with the LMS course module."
    );

}


function viewCertificates() {

    alert(
        "Certificate section will be connected with the LMS certificate module."
    );

}

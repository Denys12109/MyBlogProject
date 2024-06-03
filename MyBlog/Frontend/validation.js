document.addEventListener("DOMContentLoaded", function() {
    var postTitleInput = document.getElementById("postTitleInput");
    var postDescInput = document.getElementById("postDescInput");

    postTitleInput.addEventListener("blur", function() {
        if (postTitleInput.value.trim() === "") {
            postTitleInput.style.borderColor = "red";
        } else {
            postTitleInput.style.borderColor = "#ccc";
        }
    });

    postDescInput.addEventListener("blur", function() {
        if (postDescInput.value.trim() === "") {
            postDescInput.style.borderColor = "red";
        } else {
            postDescInput.style.borderColor = "#ccc";
        }
    });
});
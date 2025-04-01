document.addEventListener("DOMContentLoaded", function () {
    function loadPage(page) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", page, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                document.getElementById("content").innerHTML = xhr.responseText;
            }
        };
        xhr.send();
    }

    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const page = this.getAttribute("data-page");
            loadPage(page);
        });
    });

    loadPage("presentacion.html");
});

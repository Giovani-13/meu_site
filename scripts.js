document.addEventListener("DOMContentLoaded", function() {
    const abas = document.querySelectorAll(".aba");

    function mostrarAba(id) {
        abas.forEach(function(aba) {
            if (aba.id === id) {
                aba.style.display = "block";
            } else {
                aba.style.display = "none";
            }
        });
    }

    mostrarAba("home");

    document.querySelectorAll("nav a").forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const id = this.getAttribute("href").substring(1);
            mostrarAba(id);
        });
    });
});

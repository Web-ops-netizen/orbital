const select = document.getElementById('menu-select');
        select.addEventListener('change', function() {
            const target = this.value;
            if (target) {
                document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
            }
        });
function toggleMenu() {
    document.querySelector("nav ul").classList.toggle("active");
}


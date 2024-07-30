    var navLinks=document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click',function(e){
            navLinks.forEach(nav => {
                nav.classList.remove('active');
            });
            this.classList.add('active')
        })
    });

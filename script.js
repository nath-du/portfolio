// # Controllo Menu Mobile
        (function() {
            var pulsanteMenu = document.getElementById('pulsanteMenu');
            var menuMobile = document.getElementById('menuMobile');
            var icona = pulsanteMenu.querySelector('i');

            function toggleMenu() {
                var aperto = menuMobile.classList.toggle('aperto');
                if (aperto) {
                    icona.className = 'fas fa-times';
                } else {
                    icona.className = 'fas fa-bars';
                }
            }

            pulsanteMenu.addEventListener('click', toggleMenu);

            var linkMenu = menuMobile.querySelectorAll('a');
            for (var i = 0; i < linkMenu.length; i++) {
                linkMenu[i].addEventListener('click', function() {
                    menuMobile.classList.remove('aperto');
                    icona.className = 'fas fa-bars';
                });
            }
        })();
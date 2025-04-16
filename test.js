document.addEventListener("DOMContentLoaded", () => {
    const liens = document.querySelectorAll(".droite a");
    const overlay = document.getElementById("overlay");

    liens.forEach(a => {
        a.addEventListener('click', (e) => {
            e.preventDefault();

            const num = a.id.split('-')[1];
            const vignette = document.getElementById("vignette-" + num);

            // Cache toutes les vignettes
            document.querySelectorAll(".vignette").forEach(v => {
                v.classList.remove("visible");
            });

            // Active overlay
            overlay.classList.add("visible");

            // Active vignette après un petit délai pour transition fluide
            setTimeout(() => {
                vignette.classList.add("visible");
            }, 10); // Delay court pour que le CSS capte la transition

            // Ajoute la croix une seule fois
            if (!document.querySelector(".close-btn")) {
                const close = document.createElement("div");
                close.classList.add("close-btn");
                close.innerHTML = "&times;";
                overlay.appendChild(close);

                close.addEventListener("click", () => {
                    // Retire vignette avec transition
                    document.querySelectorAll(".vignette.visible").forEach(v => {
                        v.classList.remove("visible");
                    });

                    // Attend la fin de l’animation pour cacher l’overlay
                    setTimeout(() => {
                        overlay.classList.remove("visible");
                    }, 400); // doit correspondre au `transition` CSS
                });
            }
        });
    });
});

document.querySelectorAll('.close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const overlay = document.getElementById('overlay');
        overlay.classList.remove('visible');
        document.querySelectorAll('.vignette').forEach(vignette => {
            vignette.classList.remove('visible');
        });
    });
});

document.querySelectorAll('.droite a').forEach(a => {
    a.addEventListener('click', () => {
        const num = a.id.split('-')[1];
        const vignette = document.querySelector("#vignette-" + num);
        const overlay = document.getElementById('overlay');

        // Affiche la vignette et l'overlay
        overlay.classList.add('visible');
        vignette.classList.add('visible');

        // Désactive le scroll de la page
        document.body.classList.add('no-scroll');
    });
});

document.querySelectorAll('.close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const overlay = document.getElementById('overlay');

        // Masque la vignette et l'overlay
        overlay.classList.remove('visible');
        document.querySelectorAll('.vignette').forEach(vignette => {
            vignette.classList.remove('visible');
        });

        // Restaure le scroll de la page
        document.body.classList.remove('no-scroll');
    });
});

const text = document.querySelector(".sec-text");

        const textLoad = () => {
            setTimeout(() => {
                text.textContent = " Hola ";
            }, 0);
            setTimeout(() => {
                text.textContent = " I'm Rajnandani and I'm a full Stack Web Developer";
            }, 4000);
        }

        textLoad();
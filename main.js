const nav_btn = document.querySelector('.nav-btn');
const navbar = document.querySelector('.navbar');
const link = document.querySelectorAll('.link');
const body_content = document.querySelector('.body-content');
const container_fluid = document.querySelector('.container-fluid');
const dinamic_content = document.querySelector('.dinamic-content');
const dinamic_content_body_h1 = document.querySelector('.dinamic-content-body h1');

const item = document.querySelectorAll('.item');
const popup_btn = document.querySelector('.popup-btn');
const popup = document.querySelector('.popup');


class Main {
    constructor() {

    }

    router(route) {
        switch (route) {
            case '#':
                dinamic_content.style.display = 'none';
                container_fluid.style.position = 'absolute';
                break;
            case '#Programs':
                dinamic_content.style.display = 'block';
                dinamic_content_body_h1.innerText = 'Programs';
                body_content.innerHTML = `<p> Programs Whoever is designing for a living or even if it is a side job, create a cutting-edge online presence with designer website templates. No matter what niche you are in, these tools will take care of your websites with ease. While you can use them all as they are, feel free to add your personal touch to the preferred one and customize it. We all know how important having a unique and original approach is.</p>`;;
                container_fluid.style.position = 'fixed';
                break;

            case '#Plugins':
                dinamic_content.style.display = 'block';
                dinamic_content_body_h1.innerText = 'Plugins';
                let body = `<p>Plugins  they are, feel free to add your personal touch to the preferred one and customize it. We all know how important having a unique and original approach is.</p>`;
                body_content.innerHTML = body;
                container_fluid.style.position = 'fixed';
                break;

            case '#Scripts':
                dinamic_content.style.display = 'block';
                dinamic_content_body_h1.innerText = 'Scripts';
                body_content.innerHTML = `<p>  they are, feel free to add your personal touch to the preferred one and customize it. We all know how important having a unique and original approach is.</p>`;
                container_fluid.style.position = 'fixed';
                break;

            case '#Contact':
                dinamic_content.style.display = 'block';
                dinamic_content_body_h1.innerText = 'Contact';
                container_fluid.style.position = 'fixed';
                body_content.innerHTML = `
                <input type="text" placeholder="email..."/><br /><br />
                <textarea placeholder="message..."></textarea><br /><br />
<button>Send message</button>

                `;
                break;
        }
    }

    run() {
        nav_btn.addEventListener('click', (e) => {
            if (e.target.className == 'nav-btn') {
                e.target.classList.add('nav-btn-open');
                navbar.classList.add('navbar-open');
            } else {
                e.target.classList.remove('nav-btn-open');
                navbar.classList.remove('navbar-open');
            }

        }, false);

        link.forEach(item => {
            item.addEventListener('click', (e) => {
                this.router(e.target.getAttribute('href'));
            }, false);
        });



        popup_btn.addEventListener('click', (e) => {

            if (e.target.className !== 'popup-btn-open') {
                 e.target.classList.remove('popup-btn-open');
                 popup.classList.remove('popup-add')

               
            }

        }, false);

        window.addEventListener('load', () => {
            this.router(window.location.hash);
        }, false);

        item.forEach(res => {
            res.addEventListener('click', (e) => {
                console.log(e.target.getAttribute('data-img'))
                e.target.classList.add('popup-btn-open');
                popup.classList.add('popup-add')
                popup.style.backgroundImage = `url(${e.target.getAttribute('data-img')})`;
                popup.style.backgroundSize = '50%';
                popup.style.backgroundPosition = 'center';
                popup.style.backgroundRepeat = 'no-repeat';
            }, false);
        });

    }
}
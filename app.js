import { render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { navBar } from './views/8navBar.js';
import { homeView } from './views/1homeView.js';
import { dashView } from './views/2dashbordView.js';
import { registerView } from './views/3registerView.js';
import { loginView } from './views/4loginView.js';
import { createView } from './views/5createView.js';
import { detailsView } from './views/6ditailsView.js';
import { editView } from './views/7editView.js';


const nav = document.querySelector('nav');
nav.querySelector('.user').remove()
nav.querySelector('.guest').remove()
nav.appendChild(navBar())

const main = document.querySelector('main');
main.querySelectorAll('section').forEach(s => s.remove());

page(decorateContext);
page('/', homeView);
page('/index.html', homeView);
page('/register', registerView);
page('/dashboard', dashView);
page('/login', loginView);
page('/create', createView);
page('/details', detailsView);
page('/edit', editView);
page('/logout', homeView);

page.start()

function myrender(templateResult) {
    render(templateResult, main);
}


function decorateContext(ctx, next) {
    ctx.render = myrender;
    next();
}


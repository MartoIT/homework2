import { html } from '../../node_modules/lit-html/lit-html.js';
import { registerFetchRequest } from '../requests/registerRequest.js';

export const registerTamplete = () => html`<section id="register">
<div class="form">
  <h2>Register</h2>
  <form class="login-form">
    <input type="text" name="email" id="register-email" placeholder="email" />
    <input type="password" name="password" id="register-password" placeholder="password" />
    <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
    <button type="submit" @click="${registerFetchRequest}">register</button>
    <p class="message">Already registered? <a href="#">Login</a></p>
  </form>
</div>
</section>`

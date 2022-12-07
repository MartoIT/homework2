import { html, render } from '../../node_modules/lit-html/lit-html.js';

export function dashTemplate(data) {

  return html`<section id="dashboard">
  <h2>Job Offers</h2>

  ${data.map(d => html`<div class="offer"> <img src=".././${d.imageUrl}" alt="example1" />
    <p>
      <strong>Title: </strong><span class="title">${d.title}</span>
    </p>
    <p><strong>Salary:</strong><span class="salary">${d.salary}</span></p>
    <a class="details-btn" href="">Details</a>`)}
  </div>
</section>
 `
}

export function dashTemplateempty() {

  return html`<section id="dashboard">
  <h2>No offers yet.</h2>
</section>
`
}

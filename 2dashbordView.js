import { dashTemplate, dashTemplateempty } from '../HTMLTamplets/dashTamplete.js';
import { dashRequiest } from '../requests/dashRequiest.js';


export async function dashView(ctx) {
    const data = await dashRequiest()
    console.log(data)
    let arr = [];

    if (data.length > 0) {

        arr = dashTemplate(data)
    }

    if (data.length < 1) {

        arr = dashTemplateempty(data)
    }
    



    ctx.render(arr)


}
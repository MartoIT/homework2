export async function registerFetchRequest(e) {
    e.preventDefault();
    const form = new FormData(e.target.parentElement);
    const email = form.get('email');
    const password = form.get('password');
    const rePass = form.get('re-password');
    const data = {
        email,
        password,
        rePass
    }

    try {
        if (email == '' || password == '') {

            throw new Error(`all filds are requiered!`);
        }

        if (password != rePass) {

            throw new Error(`passwords dosen\'t match!`);
        }

        const response = await fetch('http://localhost:3030/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'aplication/json'
            },
            body: JSON.stringify(data)

        })

        if(response.ok != true){
            const error = await response.json();
            throw new Error (error.message);
        }

        const result = await response.json();
        console.log(result);
        const token = result.accessToken;
        localStorage.setItem('token', token);
        window.location = '/index.html'

    } catch (error) {
        alert(error.message)
    }


   




}
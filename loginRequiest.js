export async function loginFetchRequiest(e) {
    e.preventDefault();
    const form = new FormData(e.target.parentElement);
    const email = form.get('email');
    const password = form.get('password');
    const data = {
        email,
        password
    }

    try {
        if (email == '' || password == '') {
            throw new Error('All fileds are requierd!');
        }
        const response = await fetch(`http://localhost:3030/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'aplication/json'
            },
            body: JSON.stringify(data)
        })

        if (response.ok != true) {
            const error = await response.json();
            throw new Error(error.message);
        }
        const result = await response.json();
        const token = result.accessToken;
        localStorage.setItem('token', token)
        window.location = '/index.html'
        

    } catch (err) {
        alert(err.message);
    }

}
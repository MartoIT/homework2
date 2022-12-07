const navBarUser = document.querySelector('.user')
const navBarGuest = document.querySelector('.guest')

export function navBar(){
    if(localStorage.length > 0){
        return navBarUser
    }

    return navBarGuest

}
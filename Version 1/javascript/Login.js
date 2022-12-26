
let saved_password_1 = 'nickaccess';
let saved_username_1 = 'Nick@centralfloridatapping.com';
let saved_password_2 = 'rickaccess';
let saved_username_2 = 'Rick@centralfloridatapping.com';
let saved_password_3 = 'maryaccess';
let saved_username_3 = 'Mary@centralfloridatapping.com';
let saved_password_4 = 'vinceaccess';
let saved_username_4 = 'Vinson@centralfloridatapping.com';

Swal.fire({
    title: 'Enter your CFT Username & Password',
    html: `<input type="text" id="login" class="swal2-input" placeholder="Username">
    <input type="password" id="password" class="swal2-input" placeholder="Password">`,
    confirmButtonText: 'Sign in',
    focusConfirm: false,
    backdrop: `rgba(0,0,123,1)`,
    preConfirm: () => {
        const login = Swal.getPopup().querySelector('#login').value
        const password = Swal.getPopup().querySelector('#password').value
        if (!login || !password) {
            Swal.showValidationMessage(`Please enter login and password`)
        }

        do {
            if (password === saved_password_1 && login === saved_username_1)
            window.location = "../pages/applicationshidden.html";
            else if(password === saved_password_2 && login === saved_username_2)
            window.location = "../pages/applicationshidden.html";
            else if(password === saved_password_3 && login === saved_username_3)
            window.location = "../pages/applicationshidden.html";
            else if(password === saved_password_4 && login === saved_username_4)
            window.location = "../pages/applicationshidden.html";
            else
                window.location = "../index.html"
            break;


        }
        while (EnterPassword != saved_password)
    }
})
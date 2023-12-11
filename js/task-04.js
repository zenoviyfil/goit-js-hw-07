const form = document.querySelector('.login-form')

form.addEventListener("submit", event => {
    event.preventDefault();

    const login = event.target.elements.email.value.trim();
    const password = event.target.elements.password.value.trim();
    const userData = {};

    if (login === "" || password === "") {
        return alert(`All fields must be filled in`)
    };

    userData.email = login;
    userData.password = password;
    console.log(userData);

    form.reset();
});


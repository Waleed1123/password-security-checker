const inputValue = document.querySelector("#password");
const output = document.querySelector("#output");

inputValue.addEventListener("input", () => {
    let password = inputValue.value;

    if (password.length < 8) {
        output.innerHTML = "Password is too short";
        output.style.color = "red";
    } else {
        
        // a-z
        // A-Z
        // 0-9
        // special cherators !@#$%^&*():?>.,+_-<;

        console.log(password.search(/[a-z]/) == -1);

        if (password.search(/[a-z]/) == -1) {
            output.innerHTML = "Password is missing a lowercase Letter";
            output.style.color = "red";
        } else if (password.search(/[A-Z]/) == -1) {
            output.innerHTML = "Password is missing a Uppercase Letter";
            output.style.color = "red";
        } else if (password.search(/[0-9]/) == -1) {
            output.innerHTML = "Password is missing a Number";
            output.style.color = "red";
        } else if (
            password.search(/[\!\@\#\$\%\^\&\*\(\)\:\?\>\.\,\+\<\{\_\}]/) == -1
        ) {
            output.innerHTML = "Password is missing a Special Character";
            output.style.color = "red";
        }
        else if (
            password.search(/[ ]/) !== -1
        ) {
            output.innerHTML = "Password Can't have a space";
            output.style.color = "red";
        }
        else {
            output.innerHTML = "Password is Strong";
            output.style.color = "green";
        }
    }
});

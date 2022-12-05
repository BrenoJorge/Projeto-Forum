const user = document.querySelector("#usuario");
const psw = document.querySelector("#password");
const form = document.querySelector(".card")

function login(event) {
    let info = {
        "email": user.value,
        "senha": psw.value
    }

    fetch("http://10.87.207.21:3000/login/forum", {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(info)
        })

        .then(res => {
            return res.json()
        })

        .then(data => {
            console.log(data)
        })

}

 form.addEventListener("submit", login)
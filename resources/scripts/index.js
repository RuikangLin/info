fetch("https://api.github.com/users/RuikangRPI")
    .then(res => res.json())
    .then((json) => {
        document.getElementById("root").innerHTML = JSON.stringify(json);
    });

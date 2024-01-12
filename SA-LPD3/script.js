buttonSelect = document.getElementById("button");
valueSelect = document.getElementById("input");
showValue = document.getElementById("show-result");

buttonSelect.addEventListener("click", () => {
    let factorial = parseInt(valueSelect.value);
    let result = 1;

    for (let i = 1; i <= factorial; i++) {
        result *= i;
    }

    showValue.innerHTML = result;
});


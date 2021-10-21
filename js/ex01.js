

function convertCelsiusFahrenheit(){
    let celsius = parseInt(document.getElementById("numCelsius").value)
    let resp = document.getElementById("resp")

    let numFahrenheit = (1.8*celsius + 32)

    resp.innerHTML = numFahrenheit
}
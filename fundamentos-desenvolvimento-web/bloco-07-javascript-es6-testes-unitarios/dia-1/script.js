window.onload = () => {
    const contaClick = () => {
        let texto = document.querySelector('#click').innerText
        textoInt = parseInt(texto)
        textoInt += 1
        textoInt = `${textoInt}`
        document.querySelector('#click').innerText = textoInt
    }
    document.querySelector('button').addEventListener('click', contaClick)
} 
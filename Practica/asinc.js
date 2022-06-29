const fin = () => console.log('Termine')

function mostrarLetras(string,cb) {
    let i = 0
    const imprime = setInterval(() => {
        if (i < string.length) {
            console.log(string[i])
            i++
        }else{
            clearInterval(imprime)
            cb()
        }
    }, 1000);
}
aaa


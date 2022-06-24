const obj = {}
for (let i = 0; i < 10000; i++) {
    const numero = Math.floor(Math.random()*21)
    if(numero in obj) obj[numero]++
    else obj[numero] = 1
}

console.log(obj);
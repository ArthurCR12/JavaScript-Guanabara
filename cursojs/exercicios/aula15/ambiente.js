let num = [5,20,13,54]

console.log(`O nosso vetor é o ${num} \ne tem ${num.length} itens`)
num[4] = 60
num.push(7)
num.push(8)
console.log(num.sort())
num.sort((a, b) => a - b) //Chat GPT
console.log(num)

for(i = 0;i < num.length; i++)
    console.log(`A posição ${i} tem valor: ${num[i]}`)

let comidas = ['Hamburguer', 'Arroz', 'Feijão', 'Rabanete', 'Marrom Glace']
console.log('')

for(let i in comidas)
    console.log(`${comidas[i]} é muito bom`)

console.log('')
let pos = num.indexOf(54)
console.log(`O valor 54 esta na posição: ${pos}`)
console.log(num)
pos = comidas.indexOf('Arroz')
console.log(`O Arroz esta na posição: ${pos}`)
console.log(num)

var idade = prompt("Digite sua idade:") 
console.log(`Você tem, ${idade} anos.`)
if(idade< 16){
    console.log('Você Não vota')
}else if(idade < 16|| idade > 65 ){
    console.log('Voto opcional')
}else{
    console.log('Voto Obrigatório!')
}


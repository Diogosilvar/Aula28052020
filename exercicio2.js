
    // Exercicio 01

    var receitadebolo = {
        titulo: "receita de familia",
        porcoes: 1,
        ingradientes:['cacau','leite','manteira'],
    }
    
    console.log(titulo);
    console.log(porcoes);
    for(i=0;i<ingradientes.length; i++){
    console.log(receitadebolo.ingradientes[i])
    }
    
    
    
    // exercicio 02 //
    
    var livrosloucos = [
    {
        id:1,
    titulo: "A fuga das galinhas",
    autor: "Xavier o peixe",
    livroLido: true, 
    },
    {
    id:2,
    titulo: "O peixe e o dragão",
    autor: "Loucos por aventura",
    livroLido: false,
    },
    {
    id:3,
    titulo: "Procurando nemo",
    autor: "Dory, eu esqueci",
    livroLido: false,
    },
    {
    id:4,
    titulo: "A cronicas de João hespanhol",
    autor: "mãe do joão",
    livroLido: true,
    }
    ]
    
    console.log(livrosloucos[0].titulo)
    console.log(livrosloucos[0].autor)
    console.log(livrosloucos[1].titulo)
    console.log(livrosloucos[1].autor)
    console.log(livrosloucos[2].titulo)
    console.log(livrosloucos[2].autor)
    console.log(livrosloucos[3].titulo)
    console.log(livrosloucos[3].autor)
    console.log(livrosloucos[4].titulo)
    console.log(livrosloucos[4].autor)
    
    for (i=0; i<livrosloucos.length; i++){
    if(livrosloucos[i].livroLido){
    console.log(livrosloucos[i].titulo);
    console.log(livrosloucos[i].autor);
    console.log("Você já leu esse livro doido");
    
    }else{
        console.log(livrosloucos[i].titulo);
        console.log(livrosloucos[i].autor);
        console.log("você não leu esse livro");
    
    }
    
        
    }

var teste = fetch('https://api.github.com/users/KrunalLathiya')
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => console.error(error))




var teste2 = fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => console.error(error))


var teste3 = fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
        console.log("   <img src=" + data.message + " alt='Random Photo of a Dog' />")
    })
    .catch(error => console.error(error))

var teste4 = fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
        var imagem = document.createElement("img");
        imagem.src = data.message;
        document.body.appendChild(imagem);

    })
    .catch(error => console.error(error))


function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fAno = document.getElementById('txtano')
    let resposta = document.getElementById('res')
    if (fAno.value.length == 0 || fAno.value > ano) {
        alert('[ERRO] Digite seus dados e tente novamente!')
    } else {
        let idade = ano - Number(fAno.value)
        let fSex = document.getElementsByName('radsex')
        let genero = ''
        let imagem = document.createElement('img')
        imagem.setAttribute('id', 'foto')
        if (fSex[0].checked) {
            if (idade >= 0 && idade < 10) {
                //Criança
                genero = 'um Menino'
                imagem.setAttribute('src', 'imagens/fotomenino.png')
            } else if (idade < 21) {
                //Jovem
                genero = 'um Moço'
                imagem.setAttribute('src', 'imagens/fotomoço.png')
            } else if (idade < 50) {
                //Adulto
                genero = 'um Homem'
                imagem.setAttribute('src', 'imagens/fotohomem.png')
            } else {
                //Idoso
                genero = 'um Idoso'
                imagem.setAttribute('src', 'imagens/fotoidoso.png')
            }
        } else if (fSex[1].checked) {
            if (idade >= 0 && idade < 10) {
                //Criança
                genero = 'uma Menina'
                imagem.setAttribute('src', 'imagens/fotomenina.png')
            } else if (idade < 21) {
                //Jovem
                genero = 'uma Moço'
                imagem.setAttribute('src', 'imagens/fotomoça.png')
            } else if (idade < 50) {
                //Adulto
                genero = 'uma Mulher'
                imagem.setAttribute('src', 'imagens/fotomulher.png')
            } else {
                //Idoso
                genero = 'uma Idosa'
                imagem.setAttribute('src', 'imagens/fotoidosa.png')
            }
        }
        resposta.style.textAlign = 'center'
        resposta.innerHTML = `Detectamos ${genero} de ${idade} anos`
        resposta.appendChild(imagem)
    }
}
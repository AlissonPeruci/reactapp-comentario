// Passando url para Api e pegando os comentarios 
const GetComentarios = (url) => {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

export default GetComentarios;

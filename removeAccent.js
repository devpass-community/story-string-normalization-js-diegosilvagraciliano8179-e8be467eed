function removeAccent(str) {
const regex = /[^a-zA-Z0-9]/g;
let novoTexto = str.replace(regex,'')
return novoTexto
}


module.exports = removeAccent;

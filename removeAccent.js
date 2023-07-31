function removeAccent(str) {
const regex = /[^a-zA-Z0-9]/g;

return str.replace(regex,'')
}


module.exports = removeAccent;

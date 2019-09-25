const express = require("express");
const app = express()
const axios = require("axios");
/*var dados;

function retornadados() {
	return axios.get("https://swapi.co/api/films/").then(function(resposta) {
	console.log(resposta.data)})}

dados = retornadados();*/
/* consegui exibir no http://localhost:3000/star-wars-films apenas os dados crus do site, não consegui separar só o nome dos filmes.
Pensei em fazer um loop que procura a palavra 'title' (com a função indexOf) e então selecionar o filme com a função substring
(selecionando 3 posições após o title e copiando até a próxima aspas), mas não consegui descobrir aonde inserir esse código:
var obt;
function seleciona (x) {
	var a = 0;
	var cont = 0;
	var posicao = 0;
	while (a != -1) {
		a = dados.indexOf("title", a);
		obt[cont] = dados.substring(a+7, dados.indexOf(""", a+7));
		cont++;
	}	//obt armazenaria a relação de filmes como um array de strings, aí era mostrar pelo res.send
} */	
app.get('/', function (req, res) {
	res.send('Hello World')
})
app.get('/star-wars-films', function (req, res) { 
	axios.get("https://swapi.co/api/films/").then(function(resposta) {
	res.send(resposta.data.results[1]);
	 })})

app.use(express.static('public'));
app.listen(3000);

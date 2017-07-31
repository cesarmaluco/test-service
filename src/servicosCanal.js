// IMPORTS /////////////////////////////////////////////////////////////////////

let DynamicServer = require("./modules/server/dynamic-server");
let Mensagem = require("./modules/mensagem");
let Config = require("./util/config");
let referenceData = require("./modules/reference-data");



// DERIVED IMPORTS /////////////////////////////////////////////////////////////
let dataBaseAcess = referenceData.dataBaseAcess;
let criarMensagem = Mensagem.criarMensagem;
let consultarMensagem =  Mensagem.consultarMensagem;
let atualizarMensagem = Mensagem.atualizarMensagem;
let excluirMensagem = Mensagem.excluirMensagem;


// DECLARATIONS ////////////////////////////////////////////////////////////////

const apiServer = new DynamicServer("apiServer", Config.portaAplicacao);

dataBaseAcess.connect();


// IMPLEMENTATION /////////////////////////////////////////////////////////////////////////

//Leitura de rotas para serviços de mensagem
apiServer.addEndpoint("criarUsuario", criarMensagem);
apiServer.addEndpoint("atualizarUsuario", atualizarMensagem);
apiServer.addEndpoint("excluirUsuario", excluirMensagem);
apiServer.addEndpoint("consultarUsuario", consultarMensagem);
//LoginUsuario
//*******************************************


apiServer.start(() =>{
	
	console.log("inicializado");
});


// EXPORTS /////////////////////////////////////////////////////////////////////

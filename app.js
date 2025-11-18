
// Banco de dados unificado
const STORAGE_KEY = 'cunhaReparosDB';

let DB = {
    orcamentos: [],
    clientes: [],
    colaboradores: [],
    despesas: []
};

// Carregar do localStorage
function loadDB(){
    const data = localStorage.getItem(STORAGE_KEY);
    if(data){
        DB = JSON.parse(data);
    }
}

// Salvar no localStorage
function saveDB(){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(DB));
}

// Inicialização
loadDB();

// Funções de criação
function adicionarOrcamento(obj){
    DB.orcamentos.push(obj);
    saveDB();
}

function adicionarCliente(obj){
    DB.clientes.push(obj);
    saveDB();
}

function adicionarColaborador(obj){
    DB.colaboradores.push(obj);
    saveDB();
}

function adicionarDespesa(obj){
    DB.despesas.push(obj);
    saveDB();
}


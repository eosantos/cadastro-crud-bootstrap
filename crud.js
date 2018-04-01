var app = angular.module('CrudApp', []);

app.controller('CrudController', function($scope){

	$scope.listaProdutos = [
		{codigo: '1', nome: '1', qtde: '1', valor: '1'},
		{codigo: '2', nome: '2', qtde: '2', valor: '2'},
		{codigo: '3', nome: '3', qtde: '3', valor: '3'},
		{codigo: '4', nome: '4', qtde: '4', valor: '4'}
	];
	
	$scope.remove = function(codigo){
		var resposta  = confirm("Confirma a exclusão do produto de código " + codigo);
		if (resposta == true){
			var posicao = retornaPosicao(codigo);
			$scope.listaProdutos.splice(posicao, 1);
			alert("Remoção com sucesso");	
		}
	}
	$scope.insere = function(){
		// verifica se já existe
		var posicao = retornaPosicao($scope.codigo);
		if (posicao == -1){ // insere novo
			$scope.listaProdutos.push(
				{
					codigo: $scope.codigo,
					nome: $scope.nome,
					qtde: $scope.qtde,
					valor: $scope.valor
				}
			);
			alert("Produto inserido com sucesso");
		}
		else {
			// já existe - atualiza a lista
			$scope.listaProdutos[posicao].nome = $scope.nome;
			$scope.listaProdutos[posicao].qtde = $scope.qtde;
			$scope.listaProdutos[posicao].valor = $scope.valor;
			alert("Produto atualizado com sucesso");
		}
	}
	
	$scope.atualiza = function(codigo){
		// recupera a posição do produto
		var posicao = retornaPosicao(codigo);
		// passa o produto para o formulário
		$scope.codigo = parseInt($scope.listaProdutos[posicao].codigo);
		$scope.nome = $scope.listaProdutos[posicao].nome;
		$scope.qtde = parseInt($scope.listaProdutos[posicao].qtde);
		$scope.valor = parseInt($scope.listaProdutos[posicao].valor);
	}
	
	function retornaPosicao(codigo){
			var i;
			for(i=0; i<$scope.listaProdutos.length;i++){
				if ($scope.listaProdutos[i].codigo == codigo){
					return i; // retorna posição
				}
			}
			return -1;
	}
	
});
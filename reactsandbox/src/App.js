import React from 'react'

// const luana = {
// 	cliente: 'Luana',
// 	idade: 27,
// 	compras: [
// 		{ nome: 'Notebook', preco: 'R$ 2500' },
// 		{ nome: 'Geladeira', preco: 'R$ 3000' },
// 		{ nome: 'Smartphone', preco: 'R$ 1500' },
// 	],
// 	ativa: true,
// }

const mario = {
	cliente: 'Mario',
	idade: 31,
	compras: [
		{ nome: 'Notebook', preco: 'R$ 2500' },
		{ nome: 'Geladeira', preco: 'R$ 3000' },
		{ nome: 'Smartphone', preco: 'R$ 1500' },
		{ nome: 'Guitarra', preco: 'R$ 3500' },
	],
	ativa: false,
}

const App = () => {
	const dados = mario
	const comprasTotal = dados.compras.reduce(
		(acc, curr) => Number(acc) + Number(curr.preco.substring(3))
	)
	console.log(comprasTotal)

	return (
		<>
			<div>Nome: {dados.cliente}</div>
			<div>Idade: {dados.idade}</div>
			<div>Situação: {dados.ativa}</div>
			<div>Total gasto: {comprasTotal}</div>
		</>
	)
}
export default App

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

const produtos = [
	{
		id: 1,
		nome: 'Smartphone',
		preco: 'R$ 2000',
		cores: ['#29d8d5', '#252a34', '#fc3766'],
	},
	{
		id: 2,
		nome: 'Notebook',
		preco: 'R$ 3000',
		cores: ['#ffd045', '#d4394b', '#f37c59'],
	},
	{
		id: 3,
		nome: 'Tablet',
		preco: 'R$ 1500',
		cores: ['#365069', '#47c1c8', '#f95786'],
	},
]

const App = () => {
	return (
		<section>
			<ul>Olá!</ul>
		</section>
	)
}

// const App = () => {
// 	const dados = mario
// 	const comprasTotal = dados.compras.reduce(
// 		(acc, curr) => Number(acc) + Number(curr.preco.substring(3))
// 	)
// 	console.log(comprasTotal)

// 	return (
// 		<>
// 			<div>Nome: {dados.cliente}</div>
// 			<div>Idade: {dados.idade}</div>
// 			<div>Situação: {dados.ativa}</div>
// 			<div>Total gasto: {comprasTotal}</div>
// 		</>
// 	)
// }
export default App

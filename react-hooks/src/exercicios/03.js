import * as React from 'react'
export default function Exercicio02({initialName = ''}) {
  // 🐨 initialize the state to the value from localStorage
  // 💰 window.localStorage.getItem('name') || initialName
  const [name, setName] = React.useState(
      //Recuperando de um valor previamente salvo no localStorage.
      //Ou usa o valor de initialName, caso o Ítem do localStorage
      //não exista.

      //retornando uma função para criar um lazy initializer, que é executado apenas uma vez, no carregamento inicial da página.
      () =>readStorage() ||initialName)

    const [count, setCount] = React.useState(() => 0)
    
    function readStorage() {
        console.count('Lido localStorage')
        return window.localStorage.getItem('name')
    }

  // 🐨 Here's where you'll use `React.useEffect`.
  // The callback should set the `name` in localStorage.
  // 💰 window.localStorage.setItem('name', name)
  // Armazenando em um ítem do localStorage chamado "name" o valor
  // da variável de estado name
  React.useEffect(() => {
      window.localStorage.setItem('name', name)
      setCount(count + 1)
    }, [name])

    //UseEffect() tem dois parâmetros:
    //1) É uma função que será atualizada depois de uma atualização do componente.
    //2) É um vetor de dependências: qual ou quais as variáveis de estado que serão monitoradas para a execussão do useEffect().
    //O segundo parâmetro é funcional, mas faz muita diferença ele ser usado.


  function handleChange(event) {
    // Atualização da variável de estado "name" vai desencadear
    // uma atualização do componente. Após a atualização ter sido processada, será executado o useEffect().
    setName(event.target.value)

  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Olá {name}! Seja bem vindo.</strong> : 'Por favor, digite seu nome'}
      <div>Quantidade de atualizações: {count} !</div>
    </div>
  )
}
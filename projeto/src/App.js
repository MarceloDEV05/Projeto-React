
import './App.css';
import { useRef, useState } from "react"
import { v4 } from "uuid"




function App() {
  const inputRef = useRef()
  const [tarefa, setTarefa] = useState([])



  function addTarefa() {
    setTarefa([
      { id: v4(), nome: inputRef.current.value, }, ...tarefa])
    inputRef.current.value = "";
   
   
  }

  if (setTarefa === "") {
    inputRef.current.value = 'nova tarefa...'
  }

  function deletaTarefa(id) {
    const listaTarefa = tarefa.filter(t => t.id !== id);
    setTarefa(listaTarefa)
  }


  return (
    <div className="App">

      <h1>Lista de Tarefas</h1>
      <input placeholder="Nova Tarefa..." ref={inputRef}></input>
      <button onClick={addTarefa}>+</button>


      {tarefa.map((tarefa) => (
       
        <div key={tarefa.id} style={{display:'flex', alignItems:'center', paddingTop:'5  0px'}}>
           <div className='bord'>
          <input id='check' type='checkbox'></input><p>{tarefa.nome}</p>
           <button id='del' onClick={() => deletaTarefa(tarefa.id)}>apagar</button>
        </div>
        </div>
      ))}
    </div>
  );
}

export default App;

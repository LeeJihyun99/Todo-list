import {useState, useEffect} from "react";
import Card from "./Card";
import styles from './App.module.css';

function App() {
  const[value, setValue] = useState('');
  const [tasklist, setTasklist] = useState([]);
  
  const onChange = (event)=> {
    setValue(event.target.value);
  };

  const removeTask = (id)=> {
    setTasklist(tasklist.filter((task)=>task.id !==id));
  };

  const onClick = ()=> {
    if(value.trim()){
      setTasklist([...tasklist, {id:Date.now(), task:value}]);
      setValue('');
    }
  };

  return (
    <div className={styles.body}>
      <h2>To do list</h2>
      <div>
        <input className={styles.input} type="text" value={value} onChange={onChange} placeholder="write your to do.."></input>
        <button onClick={onClick}>+</button>
      </div>
      <div>
      {tasklist.map((taskCard)=> (
        <Card key= {taskCard.id} task={taskCard.task} onRemove = {()=> removeTask(taskCard.id)} />
  ))}
      </div>
      
    </div>
  );
};

export default App;

import axios from 'axios';
import react, { useEffect, useState, navigate } from 'react'
import TodoService from '../Service/TodoService';

export default function TodoUpdate() {

    //STATE
    const [todo, setTodo] = useState([]);
    const [id, setID] = useState(null);
    //const [isCompleted, setIsCompleted] = useState(null);

    //USE EFFECT
    useEffect(() => {
        //1.YOL (ID)
        setID(localStorage.getItem("todo_select_id"))

    }); //end EFFECT

    // POST
    const todoUpdate= async (event)=>{
    // Browser'ın post için durmasını istiyorum
    event.preventDefault();

    //NEW TODO OBJECT
    const newTodo={
        id: id,
        todo,
        //isCompleted
    }
    console.log(newTodo);

    // API 
    try {
        const response= await axios.post("http://localhost:8080/update",newTodo)
        if (response.status===200){
          navigate("http://localhost:3000/");
        }
     } catch (err) {
      console.error(err);
     }
    }//END POST

    //RETURN
    return (
        <>
      <form>
        <h2 className="display-3 mt-4"></h2>
        <div className="form-group">
          <input 
          type="text" 
          className="form-control" 
          placeholder="Todo giriniz"
          required={true}
          autoFocus={true}
          id="newtodo_data"
          name="newtodo_data"
          onChange={(event)=>{setTodo(event.target.value);}}
          value={todo}
          />
          </div>
          <button type='submit' className="btn btn-primary mt-3"  onClick={todoUpdate}> {('Update')} </button>
      </form>
      <br /><br /><br /><br /><br /><br /><br /><br />
    </>
    )
}
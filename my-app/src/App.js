import './App.css'
import { useEffect, useState } from 'react'; 
import axios from "axios"
import Style from './components/Style';



function App() {
  const [title,setTitle]=useState([])
  
  const car=()=>{
    axios.get('https://dummyjson.com/products')
    .then(function(response){
      
      setTitle(response.data.products)
      console.log(response.data)
    })
    .catch(function(error){
      console.log(error)
    })
  }

  return (
    <div>
      <Style />

      <div> <button className='button' onClick={car} > ძიება </button> </div>
      <ul>
              <li className='li1' key={title.id}  > Brand{title.map( title => ( <p> {title.brand} </p>))}  </li>     
              <li className='li2' key={title.id}  > Title {title.map( title => ( <p> {title.title} </p>))}  </li> 
              <li className='li3' key={title.id}  > Price {title.map( title => ( <p> {title.price} </p>))}  </li> 
      </ul>

             
             
    </div>
  );
}

export default App;

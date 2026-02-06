import { useState } from 'react'
import '../App.css'
import fotoCachorro from '../img/cachorrinho.png'
import { useNavigate } from 'react-router-dom'

function Dog() {
  
  const [busca, setBusca] = useState ('') 
 const navigate = useNavigate()

  function pesquisar(){
    if (busca.trim() !== "" ) {
        navigate(`/resultado/${busca}`)
    }
}


  return (
    
    

  <div className="pesquisa">
  <h1> Dogs.com </h1>
  <img src= {fotoCachorro} alt="cachorro" style={{maxWidth: "300px"}} />
  <div className="busca">
  <input type="text" 
   placeholder='digite aqui..' 
   value={busca} 
   onChange={(e) => setBusca(e.target.value)}/>

  <button onClick={pesquisar}>Pesquisar</button>
  </div>
      
      
    </div>
  ) 
}

    export default Dog

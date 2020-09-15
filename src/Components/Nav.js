import React , { useEffect, useState} from 'react';
import '../CSS/dashboard.css'
import { getUserData } from '../api/apiCalls'
import { useHistory } from "react-router-dom";

const Nav = (props) => {
 console.log(props)
   const history = useHistory();
   const [data, setData] = useState('')

    // useEffect(() => {
    //     const getDashboard = async () => {
    //       const result =  await getUserData(props.match.params.userId);
          
    //         setData(result.data);
           
    //     };

    //     getDashboard()
    // }, [props.match.params.userId]);
    
 
    const handleClickLogout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        history.push('/');
        document.location.reload()
    
      }
      const [menuOpen, setMenuOpen] = useState(true);

      const handleStateChange = () => {
          setMenuOpen(!menuOpen)
      }
      const closeMenuHandler = () => {
          setMenuOpen(false)
      }
    return (
        <div data-test='app-component'>
             <button onClick={handleClickLogout}>Cerrar Sesión</button>
            <div >
                <img className='logo' src='/list-2389219_640-removebg-preview.png' alt='pic' data-test='image-logo' />
                            <h2 className='h2-name'>Hola {data.nickName}</h2>
                            <p className='p-title-tasks'>Estas son tus últimas tareas.</p>        
            </div>
            
        </div>
    )
}

export default Nav
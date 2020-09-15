import React , { useEffect, useState} from 'react';
import '../CSS/dashboard.css'
import { getUserData } from '../api/apiCalls'
// import { useHistory } from "react-router-dom";

const Dashboard = (props) => {
 
//    const history = useHistory();
   const [data, setData] = useState('')
   const [userTasks, setUserTasks] = useState([])
   
    useEffect(() => {
        const getDashboard = async () => {
          const result =  await getUserData(props.match.params.userId);
          
            setData(result.data);
            setUserTasks(result.data.tasks)
        };

        getDashboard()
    }, [props.match.params.userId]);
    
    
    return (
        <div  className='bg-component' data-test='app-component'>
        
                            <div className='div-tasks'> {
                                userTasks.map((task, index) => {
                                    return (
                                        <div key={index}>
                                        <p>{task.name}</p>
                                        </div>
                                    )
                                })
                            }
                            </div>
                                
                            
            </div>
    )
}

export default Dashboard
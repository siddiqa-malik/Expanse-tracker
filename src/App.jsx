import reactDom from 'react-dom';
import {RouterProvider} from 'react-router-dom';
import router from './router/Router';
import {ExpenseProvider} from './context/ExpenseContext';
import './index.css';

function App() {
 return(
  
    <RouterProvider router={router} />
 
 )
}

export default App;
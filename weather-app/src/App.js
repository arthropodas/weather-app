import logo from './logo.svg';
import './App.css';

import current from './services/Services';
import { getKey } from './axiosInstance';
import Country from './components/country/Country';
import { RouterProvider } from 'react-router-dom';
import router from './router';
                                                                                                                    
function App() {
  
  return (
    <div>
   

  
 
  
     <RouterProvider router={router} />
    </div>
  );
}

export default App;

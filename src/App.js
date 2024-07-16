import logo from './logo.svg';
import './App.css';


import SearchAppBar from './components/appBar/AppBar';
import Home from './Pages/Home/Home';
import './components/i18next'
                                                                                                                    
function App() {
  
  return (
    <div>
      <SearchAppBar/>
      <Home/>
   
    </div>
  );
}

export default App;

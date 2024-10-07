import './assets/sass/app.scss'
import Main from './layout/Main';
import { ToastContainer } from 'react-toastify';



function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Main />
    </div>
  );
}

export default App;

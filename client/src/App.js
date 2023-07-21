import { Outlet } from 'react-router-dom';
import './App.css';
import Headers from './components/Headers';
import toast , { Toaster} from 'react-hot-toast'

function App() {
  return (
    <>
    <Toaster/>
      <Headers/>
        <main className='pt-16 bg-slate-200 min-h-[calc(100vh)]'>
          <Outlet/> 
        </main>
    </>
  );
}

export default App;

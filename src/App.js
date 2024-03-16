import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { Dec, Inc } from './states/reducers';

function App() {
  
  const curState = useSelector((state)=> state.number)
  const dispatch = useDispatch();
  return (
    <>
    <div className=""style={{width:'100%', left:'40%',top:'40vh',position:'relative' , height:'100vh' }}>
    <h1 >React Redux Tutorial</h1>
    <div>
      <h1 style={{width:'25%',display:'flex', justifyContent:'center' }}>{curState}</h1>
      <div style={{width:'25%',display:'flex', justifyContent:'space-between' }}>
      <button onClick={()=> dispatch(Inc(10))}>Increment</button>
      <button onClick={()=> dispatch(Dec(2))}>Decrement</button>
      </div>
    </div>
    </div>
    </>
  );
}

export default App;

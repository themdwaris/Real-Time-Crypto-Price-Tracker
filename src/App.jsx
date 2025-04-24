import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { simulateWebSocket } from './features/cryptoAPI';
import { updatePrices } from './features/cryptoSlice';
import CryptoTable from './components/CryptoTable';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    simulateWebSocket(dispatch, updatePrices);
  }, [dispatch]);

  return (
    <div className="p-4 bg-gray-900 text-slate-100 min-h-screen">
      <h1 className="text-2xl font-bold py-6 ">Real-Time Crypto Price Tracker</h1>
      <CryptoTable />
    </div>
  );
}

export default App;

import { useSelector } from 'react-redux';
import CryptoRow from './CryptoRow';

export default function CryptoTable() {
  const data = useSelector(state => state.crypto);

  return (
    <div className="overflow-auto">
      <table className="min-w-full text-sm text-left">
        <thead className="bg-gray-800 p-3">
          <tr>
            <th>#</th><th className='p-4'>Name</th><th>Price</th>
            <th>1h %</th><th>24h %</th><th>7d %</th><th>Market Cap</th>
            <th>Volume(24h)</th><th className='pr-3 md:pr-0'>Circulating Supply</th><th>7D Chart</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => <CryptoRow key={item.symbol} index={idx+1} asset={item} />)}
        </tbody>
      </table>
    </div>
  );
}

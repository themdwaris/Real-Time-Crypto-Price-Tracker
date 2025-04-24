

export default function CryptoRow({ index, asset }) {
  const formatNum = (num) => num.toLocaleString();

  const getColor = (value) => (value >= 0 ? "text-green-500" : "text-red-500");

  return (
    <tr className="border-b border-gray-600">
      <td className="py-5">{index}</td>
      <td className="flex items-center gap-3 py-5 ml-1 mr-6 md:m-0">
        <img
          src={asset?.logo}
          className="w-8 h-8 rounded-full object-contain p-1 bg-white/20"
        />
        <span className="flex flex-col">
          <span className="text-[16px] font-medium">{asset.name}</span>
          <span>{asset.symbol}</span>
        </span>
      </td>

      <td>${formatNum(asset.price)}</td>
      <td className={`${getColor(asset.percentChange1h)} px-3 md:px-0 `}>
        {asset.percentChange1h}%
      </td>
      <td className={`${getColor(asset.percentChange24h)} px-3 md:px-0`}>
        {asset.percentChange24h}%
      </td>
      <td className="text-green-500 px-3 md:px-0">{asset.percentChange7d}%</td>
      <td>${formatNum(asset.marketCap)}</td>
      <td>${formatNum(asset.volume24h)}</td>
      <td>{asset.circulatingSupply}</td>
      <td className="">
        <img src={asset.chart7d} alt="chart" className="w-24 h-24 object-contain " />
      </td>
    </tr>
  );
}

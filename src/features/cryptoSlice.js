import { createSlice } from '@reduxjs/toolkit';
import { data } from './sampleData'; // use your dummy crypto JSON

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: data,
  reducers: {
    updatePrices: (state) => {
      state.forEach(asset => {
        const changeFactor = (Math.random() - 0.5) * 0.02; // -1% to +1%
        asset.price = +(asset.price * (1 + changeFactor)).toFixed(2);
        asset.percentChange1h = +(asset.percentChange1h + changeFactor * 100).toFixed(2);
        asset.percentChange24h = +(asset.percentChange24h + changeFactor * 100).toFixed(2);
        asset.volume24h = +(asset.volume24h * (1 + changeFactor)).toFixed(2);
      });
    }
  },
});

export const { updatePrices } = cryptoSlice.actions;
export default cryptoSlice.reducer;

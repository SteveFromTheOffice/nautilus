import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosRequestConfig } from 'axios';

export const fetchBitcoinPrice = createAsyncThunk('calculator/fetchBitcoinPrice', async () => {
  const config: AxiosRequestConfig = {
    method: 'get',
    url: 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/btc.json',
  };

  const response = await axios.request(config);

  return response.data.btc;
});

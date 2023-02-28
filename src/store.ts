import {useProxy} from '@tylerlong/use-proxy';

export class Store {
  totalCost = 1000000;
  downPayment = 300000;
  interest = 6;
}

const store = useProxy(new Store());

export default store;

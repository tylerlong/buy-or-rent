import {useProxy} from '@tylerlong/use-proxy';

export class Store {
  totalCost = 1000000;
  outOfPocket = 100000;
  investmentInterest = 4.15;
  mortgageInterest = 2.25;
  propertyTax = 1000;
  hoa = 500;
  insurance = 150;
  rent = 3300;
}

const store = useProxy(new Store());

export default store;

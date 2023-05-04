import {manage} from 'manate';

export class Store {
  totalCost = 1500000;
  outOfPocket = 500000;
  investmentInterest = 4.65;
  mortgageInterest = 8.25;
  propertyTax = 1500;
  hoa = 700;
  insurance = 200;
  rent = 5000;
}

const store = manage(new Store());

export default store;

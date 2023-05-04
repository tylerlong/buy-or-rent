import React from 'react';
import {Component} from 'manate/react';

import {Store} from './store';
import {Typography} from 'antd';

const {Title} = Typography;

class Result extends Component<{store: Store}> {
  render() {
    const {store} = this.props;
    const cost = Number(
      (
        (store.outOfPocket * store.investmentInterest) / 100.0 / 12 +
        ((store.totalCost - store.outOfPocket) * store.mortgageInterest) /
          100.0 /
          12 +
        store.propertyTax +
        store.hoa +
        store.insurance
      ).toFixed(2)
    );
    const moneyWord = store.rent < cost ? 'lose' : 'make';
    return (
      <>
        <Title level={2}>Total monthly cost</Title>
        <div>
          <code>
            = (outOfPocket * investmentInterest + (totalCost - outOfPocket) *
            mortgageInterest) / 12 + propertyTax + hoa + insurance
          </code>
        </div>
        <div>
          <code>
            = ({store.outOfPocket} * {store.investmentInterest}% + (
            {store.totalCost} - {store.outOfPocket}) * {store.mortgageInterest}
            %) / 12 + {store.propertyTax} + {store.hoa} + {store.insurance}
          </code>
        </div>
        <Title level={3}>= {cost} per month</Title>
        <Title level={2}>Total monthly income</Title>
        <div>
          <code>= rent</code>
        </div>
        <Title level={3}>= {store.rent} per month</Title>
        <Title level={2}>
          You will {moneyWord} {store.rent - cost > 0 ? store.rent : cost} -{' '}
          {store.rent - cost > 0 ? cost : store.rent} ={' '}
          {Math.abs(store.rent - cost).toFixed(2)} per month if you buy this
          property.
        </Title>
      </>
    );
  }
}

export default Result;

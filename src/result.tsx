import React from 'react';
import {Component} from '@tylerlong/use-proxy/build/react';

import {Store} from './store';
import {Typography} from 'antd';

const {Title} = Typography;

class Result extends Component<{store: Store}> {
  render() {
    const {store} = this.props;
    return (
      <>
        <Title level={2}>Total monthly extra cost</Title>
        <div>
          <code>
            = (totalCost - downPayment) * interest / 12 + propertyTax + hoa +
            insurance
          </code>
        </div>
        <div>
          <code>
            = ({store.totalCost} - {store.downPayment}) * {store.interest}% / 12
            + {store.propertyTax} + {store.hoa} + {store.insurance}
          </code>
        </div>
        <div>
          <Title level={3}>
            ={' '}
            {(
              ((store.totalCost - store.downPayment) * store.interest) /
                100.0 /
                12 +
              store.propertyTax +
              store.hoa +
              store.insurance
            ).toFixed(2)}
          </Title>
        </div>
      </>
    );
  }
}

export default Result;

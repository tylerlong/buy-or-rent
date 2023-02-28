import {Form, InputNumber} from 'antd';
import React from 'react';
import {createRoot} from 'react-dom/client';
import {Component} from '@tylerlong/use-proxy/build/react';

import store, {Store} from './store';

class App extends Component<{store: Store}> {
  render() {
    const {store} = this.props;
    return (
      <>
        <h1>Buy or Rent</h1>
        <Form labelCol={{span: 8}} wrapperCol={{span: 8}} initialValues={store}>
          <Form.Item
            label="Total cost"
            name="totalCost"
            rules={[{required: true, message: 'Please specify total cost!'}]}
          >
            <InputNumber
              min={0}
              onChange={value => (store.totalCost = value!)}
            />
          </Form.Item>
          <Form.Item
            label="Down payment"
            name="downPayment"
            rules={[{required: true, message: 'Please specify down payment!'}]}
          >
            <InputNumber
              min={0}
              onChange={value => (store.downPayment = value!)}
            />
          </Form.Item>
          <Form.Item
            label="Interest"
            name="interest"
            rules={[{required: true, message: 'Please specify interest!'}]}
          >
            <InputNumber
              min={0}
              formatter={value => `${value}%`}
              step="0.05"
              onChange={value => (store.interest = value!)}
            />
          </Form.Item>
        </Form>
      </>
    );
  }
}

const container = document.createElement('div');
document.body.appendChild(container);
const root = createRoot(container);
root.render(<App store={store} />);

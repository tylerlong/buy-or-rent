import {Form, InputNumber} from 'antd';
import React from 'react';
import {createRoot} from 'react-dom/client';
import {Component} from '@tylerlong/use-proxy/build/react';
import {Typography} from 'antd';
import 'antd/dist/reset.css';

import store, {Store} from './store';
import './index.css';
import Result from './result';

const {Title} = Typography;

class App extends Component<{store: Store}> {
  render() {
    const {store} = this.props;
    return (
      <>
        <Title>Buy or Rent</Title>
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
          <Form.Item
            label="Property tax"
            name="propertyTax"
            rules={[{required: true, message: 'Please specify property tax!'}]}
          >
            <InputNumber
              min={0}
              onChange={value => (store.propertyTax = value!)}
            />
          </Form.Item>
          <Form.Item
            label="HOA"
            name="hoa"
            rules={[{required: true, message: 'Please specify HOA!'}]}
          >
            <InputNumber min={0} onChange={value => (store.hoa = value!)} />
          </Form.Item>
          <Form.Item
            label="Insurance"
            name="insurance"
            rules={[{required: true, message: 'Please specify insurance!'}]}
          >
            <InputNumber
              min={0}
              onChange={value => (store.insurance = value!)}
            />
          </Form.Item>
        </Form>
        <Result store={store} />
      </>
    );
  }
}

const root = createRoot(document.getElementById('root'));
root.render(<App store={store} />);

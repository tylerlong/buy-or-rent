import {Form, InputNumber} from 'antd';
import React from 'react';
import {createRoot} from 'react-dom/client';
import {Component} from 'manate/react';
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
        <Form
          labelCol={{span: 16}}
          wrapperCol={{span: 8}}
          initialValues={store}
        >
          <Form.Item
            label="What's the total cost to buy this property? (including property price, agent fee, tax...etc)"
            name="totalCost"
            rules={[{required: true, message: 'Please specify total cost!'}]}
          >
            <InputNumber
              min={0}
              formatter={value =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              }
              style={{width: 128}}
              onChange={value => (store.totalCost = value!)}
            />
          </Form.Item>
          <Form.Item
            label="How much out-of-pocket cash are you going to pay? (including down payment, agent fee...etc)"
            name="outOfPocket"
            rules={[
              {required: true, message: 'Please specify out-of-pocket cash!'},
            ]}
          >
            <InputNumber
              min={0}
              formatter={value =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              }
              style={{width: 128}}
              onChange={value => (store.outOfPocket = value!)}
            />
          </Form.Item>
          <Form.Item
            label="If you don't buy this house, what is the estimated investment interest with your out-of-pocket cash?"
            name="investmentInterest"
            rules={[
              {required: true, message: 'Please specify investment interest!'},
            ]}
          >
            <InputNumber
              min={0}
              formatter={value => `${value}%`}
              step="0.05"
              style={{width: 128}}
              onChange={value => (store.investmentInterest = value!)}
            />
          </Form.Item>
          <Form.Item
            label="What is the mortgage interest?"
            name="mortgageInterest"
            rules={[
              {
                required: true,
                message: 'Please specify the mortgage interest!',
              },
            ]}
          >
            <InputNumber
              min={0}
              formatter={value => `${value}%`}
              step="0.05"
              style={{width: 128}}
              onChange={value => (store.mortgageInterest = value!)}
            />
          </Form.Item>
          <Form.Item
            label="What is the estimated monthly property tax?"
            name="propertyTax"
            rules={[
              {
                required: true,
                message: 'Please specify estimated property tax!',
              },
            ]}
          >
            <InputNumber
              min={0}
              style={{width: 128}}
              onChange={value => (store.propertyTax = value!)}
            />
          </Form.Item>
          <Form.Item
            label="What is the estimated monthly HOA"
            name="hoa"
            rules={[
              {
                required: true,
                message: 'Please specify the estimated monthly HOA!',
              },
            ]}
          >
            <InputNumber
              min={0}
              style={{width: 128}}
              onChange={value => (store.hoa = value!)}
            />
          </Form.Item>
          <Form.Item
            label="What is the estimated monthly home insurance?"
            name="insurance"
            rules={[
              {
                required: true,
                message: 'Please specify the estimated monthly home insurance!',
              },
            ]}
          >
            <InputNumber
              min={0}
              style={{width: 128}}
              onChange={value => (store.insurance = value!)}
            />
          </Form.Item>
          <Form.Item
            label="What is the estimated monthly rent for this property?"
            name="rent"
            rules={[
              {
                required: true,
                message: 'Please specify the estimated monthly rent!',
              },
            ]}
          >
            <InputNumber
              min={0}
              style={{width: 128}}
              onChange={value => (store.rent = value!)}
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

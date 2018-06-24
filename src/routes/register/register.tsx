import * as React from "react";

import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

const residences = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
      value: 'hangzhou',
      label: 'Hangzhou',
      children: [{
        value: 'xihu',
        label: 'West Lake',
      }],
    }],
  }, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
      value: 'nanjing',
      label: 'Nanjing',
      children: [{
        value: 'zhonghuamen',
        label: 'Zhong Hua Men',
      }],
    }],
  }];

class Register extends React.Component<any, any> {
    constructor(props:any){
        super(props)
    }
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
      };
      handleSubmit = (e:any) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err:any, values:any) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      }
      handleConfirmBlur = (e:any) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
      }
      checkPassword = (rule:any, value:any, callback:any) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
          callback('Two passwords that you enter is inconsistent!');
        } else {
          callback();
        }
      }
      checkConfirm = (rule:any, value:any, callback:any) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
          form.validateFields(['confirm'], { force: true });
        }
        callback();
      }
    
      handleWebsiteChange = (value:any) => {
        let autoCompleteResult :any;
        if (!value) {
          autoCompleteResult = [];
        } else {
          autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
        }
        this.setState({ autoCompleteResult });
      }
    
      render() {
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;
    
        const formItemLayout = {
          labelCol: {
            xs: { span: 24 },
            sm: { span: 4 },
          },
          wrapperCol: {
            xs: { span: 24 },
            sm: { span: 20 },
          },
        };
        const tailFormItemLayout = {
          wrapperCol: {
            xs: {
              span: 24,
              offset: 0,
            },
            sm: {
              span: 16,
              offset: 8,
            },
          },
        };
        const prefixSelector = getFieldDecorator('prefix', {
          initialValue: '86',
        })(
          <Select style={{ width: 80 }}>
            <Option value="86">+86</Option>
            <Option value="87">+87</Option>
          </Select>
        );
    
        const websiteOptions = autoCompleteResult.map(website => (
          <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
        ));
    
        return (
          <Form onSubmit={this.handleSubmit} style={{width:`40%`,margin:`auto`,marginTop:20}}>
            <FormItem
              {...formItemLayout}
              label="邮箱"
            >
              {getFieldDecorator('email', {
                rules: [{
                  type: 'email', message: '請輸入有效的郵箱!',
                }, {
                  required: true, message: '請輸入您的郵箱!',
                }],
              })(
                <Input />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="密碼"
            >
              {getFieldDecorator('password', {
                rules: [{
                  required: true, message: '請輸入您的密碼!',
                }, {
                  validator: this.checkConfirm,
                }],
              })(
                <Input type="password" />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="確認密碼"
            >
              {getFieldDecorator('confirm', {
                rules: [{
                  required: true, message: '請確認您的密碼!',
                }, {
                  validator: this.checkPassword,
                }],
              })(
                <Input type="password" onBlur={this.handleConfirmBlur} />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label={(
                <span>
                  暱稱&nbsp;
                  <Tooltip title="你希望別人如何稱呼您?">
                    <Icon type="question-circle-o" />
                  </Tooltip>
                </span>
              )}
            >
              {getFieldDecorator('nickname', {
                rules: [{ required: true, message: '請輸入您的暱稱!', whitespace: true }],
              })(
                <Input />
              )}
            </FormItem>
   
            <FormItem
              {...formItemLayout}
              label="電話"
            >
              {getFieldDecorator('phone', {
                rules: [{ required: true, message: '請輸入您的電話號碼!' }],
              })(
                <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
              )}
            </FormItem>
          
            <FormItem
              {...formItemLayout}
              label="驗證碼"
              extra="We must make sure that your are a human."
            >
              <Row gutter={8}>
                <Col span={12}>
                  {getFieldDecorator('captcha', {
                    rules: [{ required: true, message: '請輸入你收到的驗證碼!' }],
                  })(
                    <Input />
                  )}
                </Col>
                <Col span={12}>
                  <Button>獲取驗證碼</Button>
                </Col>
              </Row>
            </FormItem>
      
            <FormItem {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">註冊</Button>
            </FormItem>
          </Form>
        );
      }
}

export default  Form.create()(Register);
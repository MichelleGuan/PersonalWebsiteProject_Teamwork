import * as React from "react";


import { Form, Input, Select,   Button, AutoComplete,message } from 'antd';
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

class Login extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
    }
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };
    handleSubmit = (e: any) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err: any, values: any) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    checkConfirm = (rule: any, value: any, callback: any) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
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
            <Form onSubmit={this.handleSubmit} style={{ width: `40%`, margin: `auto`, marginTop: 20 }}>
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

                <FormItem {...tailFormItemLayout} style={{ textAlign: 'right' }}>
                    <Button type="primary" style={{ marginRight: 50, width: 120 }}
                        onClick={() => { location.href = './#/register' }}>註冊</Button>

                    <Button type="primary" style={{ width: 120 }} htmlType="button"  onClick={()=>{message.error('登入失敗 !!');}} >登入</Button>
                </FormItem>
            </Form>
        );
    }
}

export default Form.create()(Login);
import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import "../assets/css/login.css";
import { getUsers } from '../redux/actions/userActions';

const Login = () => {
     const navigate = useNavigate();
     const [error, setError] = useState(false)
     const dispatch = useDispatch();

     useEffect(() => {
          dispatch(getUsers())
     }, []);

     const users = useSelector((state) => state.users.users);

     const onFinish = (values) => {
          users.find(user => {
               if (user.email === values.email && user.password === values.password) {

                    return navigate('/admin');
               } else {
                    return setError(true)
               }
          });
     };
     const onFinishFailed = (errorInfo) => {
          console.log('Failed:', errorInfo);
     };

     return (
          <>
               <div className="myLogin" style={{ marginTop: "5rem" }}>
                    {error &&
                         <p className='myAlert'>User Credentials doesn't match</p>
                    }
                    <Form
                         name="basic"
                         labelCol={{
                              span: 8,
                         }}
                         wrapperCol={{
                              span: 16,
                         }}
                         style={{
                              maxWidth: 600,
                         }}
                         initialValues={{
                              remember: true,
                         }}
                         onFinish={onFinish}
                         onFinishFailed={onFinishFailed}
                         autoComplete="off"
                    >
                         <Form.Item
                              label="email"
                              name="email"
                              rules={[
                                   {
                                        required: true,
                                        message: 'Please enter your email address!',
                                   },
                              ]}
                         >
                              <Input />
                         </Form.Item>

                         <Form.Item
                              label="Password"
                              name="password"
                              rules={[
                                   {
                                        required: true,
                                        message: 'Please enter your password!',
                                   },
                              ]}
                         >
                              <Input.Password />
                         </Form.Item>

                         <Form.Item
                              name="remember"
                              valuePropName="checked"
                              wrapperCol={{
                                   offset: 8,
                                   span: 16,
                              }}

                         >
                              <Checkbox>Remember me</Checkbox>
                         </Form.Item>

                         <Form.Item
                              wrapperCol={{
                                   offset: 8,
                                   span: 16,
                              }}
                         >
                              <Button type="primary" htmlType="submit">
                                   Submit
                              </Button>
                         </Form.Item>
                    </Form>
               </div>
          </>
     )
}

export default Login
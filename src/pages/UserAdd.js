import React from 'react';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import api from "../api/user";

const UserAdd = () => {
     const navigate = useNavigate();

     const onFinish = async (values) => {
          console.log(values)
          const newItem = {
               id: values.id,
               firstName: values.firstName,
               lastName: values.lastName,
               email: values.email,
               phone: values.phone,
               password: values.password,
               isActive: values.isActive,
               role: values.role
          }
          await api.post("/users", newItem);
          navigate("/admin")
     };
     const onFinishFailed = (errorInfo) => {
          console.log('Failed:', errorInfo);
     };

     const goBack = () => {
          navigate("/admin")
     }

     return (
          <>
               <Button type="primary" style={{ textAlign: "center", marginLeft: "35rem", marginTop: "2rem", marginBottom: "1.5rem" }} onClick={goBack}>GO Back</Button>
               <div className="myLogin">

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
                              label="id"
                              name="id"
                              rules={[
                                   {
                                        required: true,
                                        message: 'id cannot be empty!',
                                   },
                              ]}
                         >
                              <Input />
                         </Form.Item>

                         <Form.Item
                              label="firstName"
                              name="firstName"
                              rules={[
                                   {
                                        required: true,
                                        message: 'firstname cannot be empty',
                                   },
                              ]}
                         >
                              <Input />
                         </Form.Item>

                         <Form.Item
                              label="lastName"
                              name="lastName"
                              rules={[
                                   {
                                        required: true,
                                        message: 'lastname cannot be empty',
                                   },
                              ]}
                         >
                              <Input />
                         </Form.Item>

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
                              label="phone"
                              name="phone"
                              rules={[
                                   {
                                        required: true,
                                        message: 'phone number cannot be empty',
                                   },
                              ]}
                         >
                              <Input />
                         </Form.Item>

                         <Form.Item
                              label="isActive"
                              name="isActive"
                              rules={[
                                   {
                                        required: true,
                                        message: 'this field cannot be empty',
                                   },
                              ]}
                         >
                              <Input />
                         </Form.Item>

                         <Form.Item
                              label="role"
                              name="role"
                              rules={[
                                   {
                                        required: true,
                                        message: 'role cannot be empty',
                                   },
                              ]}
                         >
                              <Input />
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

export default UserAdd
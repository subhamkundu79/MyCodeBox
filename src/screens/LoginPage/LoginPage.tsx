import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useDispatch } from "react-redux";
import { Dispatch } from "redux"
import { useNavigate } from "react-router-dom";
import { login } from "../../actions/userLogin";

 const Login:React.FC = () => {
    const [user, setUser] = useState(""); 
    const dispatch: Dispatch<any> = useDispatch();
    const history = useNavigate();

    const onFinish = (values: any) => {
    };
      
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const submitHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(login(user));
        if(!sessionStorage.getItem("userName")) return null
        const loggeeduser = sessionStorage.getItem("userName");
        if(loggeeduser && loggeeduser === user) {
            history("/home");
            const view = "board";
            sessionStorage.setItem("viewState",view);
        }
    };
    

    return (
        <div className="loginForm">
           <Form onSubmitCapture={submitHandler}
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                label="Username"
                name="username"
                initialValue={user}
                rules={[{ required: true, message: 'Please input your username!' }]}
                >
                <Input prefix={<UserOutlined/>} 
                       value={user} 
                       onChange={(e) => setUser(e.target.value)}/>
                </Form.Item>
                

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Login
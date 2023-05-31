import { Button, Form, Input, Select } from 'antd';
import axios from 'axios';
import React, { useState } from 'react';
import {useLocation, Link} from 'react-router-dom'
import { useDispatch } from "react-redux";
import { Dispatch } from "redux"
import TextArea from 'antd/es/input/TextArea';
import { editPost } from '../../actions/editPost';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const EditPage: React.FC = () => {
  const data = useLocation();
  const {form} = data.state;
  const [title,setTitle] = useState(form[1]);
  const [body,setBody] = useState(form[2]);
  
  const dispatch: Dispatch<any> = useDispatch();

  const onFinish = (values: any) => {
    console.log(values);
  };

  const onDelete = () => {};

 const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(editPost(form));
};
  

  return (
        <div className="editForm">
        
        <Form onSubmitCapture={submitHandler}
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="Title"
                    name="title"
                    initialValue={title}
                    rules={[{ required: true, message: '' }]}
                >
                <Input 
                       value={title} 
                       onChange={(e) => setTitle(e.target.value)}/>
                </Form.Item>

                <Form.Item
                    label="Body"
                    name="body"
                    initialValue={body}
                    rules={[{ required: true, message: '' }]}
                >
                <TextArea 
                       value={body} 
                       onChange={(e) => setBody(e.target.value)}/>
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                    Edit
                    </Button>
                    <Button htmlType="button" onClick={onDelete}>
                    Delete
                    </Button>
                    
                </Form.Item>
            </Form>
            <Link to="/home">Home</Link>
          </div>
  );
};

export default EditPage;


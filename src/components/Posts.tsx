import React from 'react';
import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';


export const Posts = (post:any) => {
    const title = post.title;
    const body = post.body;
    const id = post.id;
    const data = [id,title,body]
    return (
        <>
        <Row>
            <Col span={8}><img src="images/post.jpg" width="229" height="163"/></Col>
            <Col span={8}>
                <div className='title'>{post.title}</div>
                <div className='postbody'>{post.body}</div>
                <br/>
                <div className='linkStyle'>
                <Link to={`/edit?${id}`} state={{form:data}}>Read More</Link></div>
            </Col>
            <Col span={8}>May 31, 2023</Col>
         </Row>
         
        </>
    )
}
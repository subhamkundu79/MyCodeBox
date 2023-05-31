import React, { useEffect, useState } from "react";
import { Layout, Menu, theme } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux"
import { getAllblogPosts } from "../../actions/getAllPosts"; 
import { RootState } from '../../reducers/index'
import { Posts } from "../../components/Posts";
import { PaginationComp } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { HeaderComp } from "../../components/HeaderComp";


 const LandingPage:React.FunctionComponent = () => {
    const { Header, Content, Footer, Sider } = Layout;
    const [view,setView] = useState(sessionStorage.getItem("viewState"))
    const dispatch: Dispatch<any> = useDispatch();
    useEffect(() => {
        dispatch(getAllblogPosts())
    }, []);

    const allposts = useSelector((state: RootState) => state.allPosts.posts);
    if(!allposts) return null
    const blogPosts = allposts;
    const NoOfPosts = blogPosts.length;

    const showView = (view:string) => {
        setView(view);
    }
    
    
    return (
        <Layout>
            <Sider className="sidebar">
                <img src="images/Logo.jpg" width={200}/>
                <img src="images/userBig.jpg" />
                <Sidebar showView={showView}/> 
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: "white" }}>
                   <HeaderComp/> 
                </Header>
                {(view==="blog")?
                   <>
                   <Content style={{ margin: '24px 16px 0' }}>
                   {blogPosts.map((post:any,indx:number) => <Posts key={blogPosts[indx].id} 
                                                           title={blogPosts[indx].title} 
                                                           body={blogPosts[indx].body}
                                                           id={blogPosts[indx].id}/>
                   )}
                   </Content>
                   <Footer style={{ textAlign: 'center' }}><PaginationComp totalpages={NoOfPosts}/></Footer></>
                   :<>
                   <Content style={{ margin: '24px 16px 0' }}>
                       <div>Welcome to Dashboard</div>
                   </Content>
                   <Footer style={{ textAlign: 'center' }}></Footer></>
                    
                }
               
            </Layout>
            </Layout>
    )
}

export default LandingPage
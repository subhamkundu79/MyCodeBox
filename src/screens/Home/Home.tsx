import React, { useEffect, useMemo, useState } from "react";
import { Layout, Menu, theme } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux"
import { getAllblogPosts } from "../../actions/getAllPosts"; 
import { RootState } from '../../reducers/index'
import { Posts } from "../../components/Posts";
import  PaginationComp  from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { HeaderComp } from "../../components/HeaderComp";
import { Link } from "react-router-dom";

let PageSize = 3; 

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
    
    const [currentPage, setCurrentPage] = useState(1);
    
    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return blogPosts.slice(firstPageIndex, lastPageIndex);
    }, [currentPage,blogPosts]);
        
    return (
        <Layout>
            <Sider className="sidebar">
                <img src="images/Logo.jpg" width={200}/>
                <img src="images/userBig.jpg" />
                <Sidebar showView={showView}/> 
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: "white" }}>
                   <HeaderComp viewPort={view}/> 
                </Header>
                {(view==="blog")?
                   <>
                   <div className="post-header">
                     <a>All Posts</a>
                     <span className='hello'>Latest Posts</span>
                     <span className='hello'>Archived</span>
                   </div>
                   <Content style={{ margin: '24px 16px 0' }}>
                   
                   {currentTableData.map((post:any,indx:number) => <Posts key={currentTableData[indx].id} 
                                                           title={currentTableData[indx].title} 
                                                           body={currentTableData[indx].body}
                                                           id={currentTableData[indx].id}/>
                   )}
                   </Content>
                   <Footer style={{ textAlign: 'center' }}>
                        <div className="pagination-bar">
                            <PaginationComp
                                currentPage={currentPage}
                                totalCount={NoOfPosts}
                                pageSize={PageSize}
                                onPageChange={(page:any) => setCurrentPage(page)}
                            />
                        </div>
                   </Footer></>
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
import React from 'react';
import { Pagination } from 'antd';

export const PaginationComp = (totalpages:any) => {
    return(
       <div>
        <Pagination defaultCurrent={1} total={totalpages.totalpages} pageSize={4}/>
       </div>
    )
}

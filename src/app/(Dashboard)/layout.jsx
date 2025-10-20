import React from 'react';

const Dashlayout = ({children}) => {
    return (
        <div className='grid grid-cols-3'>
            <div>
                user list
            </div>
            <div>
                {children}
            </div>
            
            
        </div>
    );
};

export default Dashlayout;
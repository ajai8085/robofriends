import React from 'react';

const Scroll = ({ children }: any) => {
    return (
        <div style={{ overflowY: 'scroll', border: '1px solid blcak', height: '800px' }}>
            {children}
        </div>
    );
}

export default Scroll;
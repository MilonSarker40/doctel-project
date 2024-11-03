import React from 'react';

const CommonHeading = ({title,title1,title2}) => {
    return (
        <div className='common-heading'>
            <h5>{title1}</h5>
            <h2>{title}</h2>
            <p>{title2}</p>
        </div>
    );
};

export default CommonHeading;
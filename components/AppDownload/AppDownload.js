import React from 'react';
import Image from 'next/image';
import AppDownloadImg from '../../public/images/app-download.png';

const AppDownload = () => {
    return (
        <div className='app-download'>
            <Image src={AppDownloadImg} alt='App Download' />
        </div>
    );
};

export default AppDownload;
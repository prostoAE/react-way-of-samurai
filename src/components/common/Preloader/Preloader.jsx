import React from 'react';
import preloader from '../../../assets/images/preloader.svg';

let Preloader = (props) => {
    return (
        <div>
            <img src={preloader} alt="loading icon" style={{width: 40 + 'px', height: 40 + 'px'}}/>
        </div>
    )
};

export default Preloader;

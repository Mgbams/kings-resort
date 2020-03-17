import React from 'react';
import loadingGif from './../assets/gif/loadingGif.jpg'

export const Loading = () => {
    return (
        <div className="loading">
           <h4>Rooms data loading...</h4>
           <img src={loadingGif} alt="" />
        </div>
        
    )
}

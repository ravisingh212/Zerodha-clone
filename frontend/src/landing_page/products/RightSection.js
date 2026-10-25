import React from 'react';

function RightSextion({imageURL, productName, ProductDescription,  learnMore,}) {
    return ( 
        <div className='container'>
            <div className='row'>
            <div className='col-6 p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p className='mt-4 text-muted'>{ProductDescription}</p>
                    <div className='my-4'>
                        <a href={learnMore} style={{ textDecoration: "none"}}>Learn More <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>
                <div className='col-6  '>
                    <img src={imageURL}/>
                </div>
            </div>    
        </div> 
     );
}

export default RightSextion;
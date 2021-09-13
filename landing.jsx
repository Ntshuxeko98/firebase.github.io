import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Landing = () => {
    const [ data, setData ] = useState([])

    useEffect(() => {
        fetch('https://api.graphql.jobs/')
        .then((res) => { 'Updated'})
        .catch((err) => {console.log(err)})
    })
    return (
        <>
            <div className="container-fluid mt-4">
                {
                    console.log(data)
                }
                <div className="card"></div>
                <div className="list-group">
                
                {
                    data.map((action) => {
                        <div>
                        <a href className="list-group-item list-group-item-action"key={action.id}>
                    
                            {action.title}
                            </a>
                        </div>
                     }  )
                }
            </div>
            </div>
            
        </>
    )
}

export default Landing
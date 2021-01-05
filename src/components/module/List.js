import React, { useState, useEffect } from 'react'
import axios from 'axios'

const List = () => {
    const [data, setData] = useState([])


    useEffect(async () => {
        const result = await axios('https://gist.githubusercontent.com/Justinkarso/1da68ddf3998b050d66e5c848f32aab2/raw/257442d0644ecf1d8ec7c8c30bd04f2d48b53081/database',)
        setData(result.data)
    }, [])

    const handleClick = (i) => {
        let test = i
        console.log(test)
    }

    return (
        <div className="list-container">
        {
            data.map((item, i) => {
                return (
                    <div key={i} className="list-card">
                        <img src={item.img} alt=""/>
                        <div className="inner">
                            <div className="left">
                                <h1>{item.name}</h1>
                                <p>{item.age}
                            </p></div>
                            <div className="right">
                                <button onClick={() => handleClick(i)}>inspect</button>
                                <button>Download</button>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        </div>
    )
}

export default List;
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Effect1 = () => {
    const [count, setCount] = useState(0)
    const [arr, setArr] = useState([])
    const handle_count_up = () => {
        setCount(pre => pre + 1)
        setCount(pre => pre + 1)
    }
    const getData = () => {
        const url = 'https://66124e8c95fdb62f24ee62fe.mockapi.io/list'
        axios.get(url)
            .then(function (res) {
                console.log(res)
                setArr(res.data)
            })

    }
    useEffect(() => {
        getData();
        console.log("rerender conponent effect 1 trong")
    }, [])//biến phụ thuộc, có thể khai nhiều biến cách nhau bằng dấu phẩy
    console.log("rerender conponent effect 1 ngoai")
    return (
        <div>
            <p>count: {count}</p>
            <button onClick={handle_count_up}>count up</button>
            {
                arr.map((item,index)=>(
                    <h3 key={index}>{item.name}</h3>
                ))
            }
        </div>
    );
}

export default Effect1;

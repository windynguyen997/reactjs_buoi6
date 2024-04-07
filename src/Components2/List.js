import React, { useEffect, useState } from 'react';
import Header from './Header';
import Todo from './Todo';
import axios from 'axios';

const List = () => {
    const [arr, setArr] = useState([])
    const url = 'https://66124e8c95fdb62f24ee62fe.mockapi.io/list'
    const getData = () => {
        
        axios.get(url)
            .then(function (res) {
                setArr(res.data)
            })
    }

    useEffect(() => {
        getData();
    }, [])
    const remove = (id) => {
        setArr(arr.filter(item => item.id != id))
       axios.delete(url+'/'+id)
       .then(function(res){
        console.log(res)
       })
       .catch(function(error){
        console.log(error)
       })
    }
    const add = (text) => {
        let newtodo={}
        if (arr.length > 0) {
            setArr([...arr, { id: arr[arr.length - 1].id + 1, name: text }])
            newtodo={id: arr[arr.length - 1].id + 1, name: text}
        } else {
            setArr([...arr, { id: 1, name: text }])
            newtodo={id: 1, name: text}
        }
        axios.post(url,newtodo)
        .then(function(res){
            console.log(res);
        })
        .catch(function(error){
            console.log(error)
        })
    }
    return (
        <div className='contain'>
            <Header add={add} />
            <div className='list'>
                {
                    arr.map((item, index) => (
                        <Todo todo={item} key={index} remove={remove} />
                    ))
                }

            </div>
        </div>
    );
}

export default List;

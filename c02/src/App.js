import { useState, useEffect } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
import { v4 as uuidv4 } from 'uuid';
import {filter, includes, orderBy as funcOrderBy, remove, reject } from 'lodash';
// import tasks from './mocks/tasks';

// const uuidv4 = require('uuid/v4');

function App(){
    var rended = 0;
    var [items,setItems]= useState([]);
    const [isShowForm,setIsShowForm]= useState(false);
    const [strSearch,setStrSearch]= useState('');
    const [orderBy,setOrderBy]= useState('name');
    const [orderDir,setOrderDir]= useState('asc');
    const [itemSelected,setItemSelected]= useState(null);


    useEffect( () => {
        if(rended == 0){
            rended = 1;
            let itemsterm = JSON.parse(localStorage.getItem('task')) || [];
            setItems(itemsterm);
        }
    })

    const handleSubmit = (item) => {
        let id      = null;

        if(item.id !== '') { //edit
            items = reject(items, { id: item.id});
            id = item.id;
        } else { // add
            id = uuidv4();
        }

        items.push({
            id      : id,
            name    : item.name,
            level   : +item.level
        })
        setItems(items);
        setIsShowForm(false);

        localStorage.setItem('task', JSON.stringify(items));

    }

    const handleEdit = (item) => {
        setIsShowForm(true);
        setItemSelected(item);
    }

    const handleDelete = (id) => {
        remove(items, (item)=> {
            return item.id === id;
        });
        setItems(items);

        localStorage.setItem('task', JSON.stringify(items));
    }

    const handleSort = (orderBy, orderDir) => {
        setOrderBy(orderBy);
        setOrderDir(orderDir);
    }

    const handleToggleForm = () => {
        setIsShowForm(!isShowForm);
        setItemSelected(null);
    }

    const handleSearh = (value) =>{
        setStrSearch(value);
    }

    const closeForm = () => {
        setIsShowForm(false);
    }

    let elmForm     = null;
    let itemsOrigin = (items !== null) ? [...items] : [];
    
    // Search
    items = filter(itemsOrigin, (item) => {
        return includes(item.name.toLowerCase(), strSearch.toLowerCase());
    });   

    // Sort
    items = funcOrderBy(items, [orderBy], [orderDir]);  

    if(isShowForm) {
        elmForm = <Form 
            itemSelected={itemSelected} 
            onClickSubmit={handleSubmit} 
            onClickCancel={closeForm}
        />;
    }

    return (
        <div>
            {/* TITLE : START */}
            <Title />
            {/* TITLE : END */}

            {/* CONTROL (SEARCH + SORT + ADD) : START */}
            <Control 
                orderBy={orderBy}
                orderDir={orderDir}
                onClickSearchGo={handleSearh}
                onClickSort={handleSort}
                onClickAdd={handleToggleForm} 
                isShowForm={isShowForm}
            />
            {/* CONTROL (SEARCH + SORT + ADD) : END */}

            {/* FORM : START */}
            { elmForm }
            {/* FORM : END */}

            {/* LIST : START */}
            <List 
                onClickEdit={handleEdit}
                onClickDelete={handleDelete}
                items={items} />
            {/* LIST : END */}
        </div>
    );
}

export default App;

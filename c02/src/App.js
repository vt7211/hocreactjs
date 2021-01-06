import { useState, useEffect } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
import { v4 as uuidv4 } from 'uuid';
import {filter, includes, orderBy as funcOrderBy, remove, (reject) } from 'lodash';

import { useSelector, useDispatch } from 'react-redux';
import { actSetIsShowForm, actSetItems, actsetItemSelected, actSetOrderBy, actSetOrderDir, actSetStrSearch } from './store/actions';

// import tasks from './mocks/tasks';

// const uuidv4 = require('uuid/v4');

function App(){
    const dispatch = useDispatch();

    var items = useSelector(state => state.tasks);
    var isShowForm = useSelector(state => state.isShowForm);
    var strSearch = useSelector(state => state.strSearch);
    var orderBy = useSelector(state => state.orderBy);
    var orderDir = useSelector(state => state.orderDir);
    var itemSelected = useSelector(state => state.itemSelected);

    useEffect( () => {
        let itemsterm = JSON.parse(localStorage.getItem('task')) || [];
        dispatch(actSetItems(itemsterm));
    },[])

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
        dispatch(actSetItems(items));

        dispatch(actSetIsShowForm(false));

        localStorage.setItem('task', JSON.stringify(items));

    }

    const handleEdit = (item) => {
        dispatch(actSetIsShowForm(true));
        dispatch(actsetItemSelected(item));
    }

    const handleDelete = (id) => {
        remove(items, (item)=> {
            return item.id === id;
        });
        dispatch(actSetItems(items));
        localStorage.setItem('task', JSON.stringify(items));
    }

    const handleSort = (orderBy, orderDir) => {
        dispatch(actSetOrderBy(orderBy));
        dispatch(actSetOrderDir(orderDir));
    }

    const handleToggleForm = () => {
        dispatch(actSetIsShowForm(!isShowForm));
        dispatch(actsetItemSelected(null));
    }

    const handleSearh = (value) =>{
        dispatch(actSetStrSearch(value));
    }

    const closeForm = () => {
        dispatch(actSetIsShowForm(false));
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

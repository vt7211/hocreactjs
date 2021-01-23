// import { useState, useEffect } from 'react';
import Search from './Search';
import Sort from './Sort';

function Control(props){
    
    const orderBy = props.orderBy;
    const orderDir = props.orderDir;
    const isShowForm = props.isShowForm;
    const onClickAdd = props.onClickAdd;
    const onClickSearchGo = props.onClickSearchGo;
    const onClickSort = props.onClickSort;

    const handleAdd = () => {
        onClickAdd();
    };


    let elmButton = <button onClick={handleAdd} type="button" className="btn btn-info btn-block">Add Task</button>;
    if(isShowForm === true) {
        elmButton = <button onClick={handleAdd} type="button" className="btn btn-success btn-block">Close Form</button>
    }

    return (
        <div className="row">

            {/* SEARCH : START */}
            <Search onClickGo={onClickSearchGo}/>
            {/* SEARCH : END */}

            {/* SORT : START */}
            <Sort 
                onClickSort={onClickSort}
                orderBy={orderBy}
                orderDir={orderDir}
            />
            {/* SORT : END */}

            {/* ADD : START */}
            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                { elmButton }
            </div>
            {/* ADD : END */}
        </div>
    );
}

export default Control;

import { Component } from 'react';

function Item(props){
    const onClickEdit = props.onClickEdit;
    const onClickDelete = props.onClickDelete;
    const item = props.item;
    const index = props.index;
    const handleEdit = (item) => {
       onClickEdit(item);
    }

    const handleDelete = (id) => {
        onClickDelete(id);
    }
    const showElementLevel = (level) => {
        let elmLevel = <span className="label label-default">Small</span>;
        if(level === 1){
            elmLevel = <span className="label label-info">Medium</span>;
        }else if(level === 2){
            elmLevel = <span className="label label-danger">High</span>;
        }
        return elmLevel;
    }

    

    return (
        <tr>
            <td className="text-center">{index + 1}</td>
            <td>{item.name}</td>
            <td className="text-center">{showElementLevel(item.level)}</td>
            <td>
                <button onClick={()=>handleEdit(item)}  type="button" className="btn btn-warning">Edit</button>
                <button onClick={()=>handleDelete(item.id)} type="button" className="btn btn-danger">Delete</button>
            </td>   
        </tr>
    );

    
}

export default Item;

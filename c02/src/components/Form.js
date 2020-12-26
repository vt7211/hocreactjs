import { useState, useEffect } from 'react';

function Form(props) {
    const itemSelected = props.itemSelected;
    const onClickSubmit = props.onClickSubmit;
    const onClickCancel = props.onClickCancel;

    const [task_id, setTask_id] = useState('');
    const [task_name, setTask_name] = useState('');
    const [task_level, setTask_level] = useState('');
    const [name, setName] = useState('');

    
    const updateItem = (item) => {
        if(item !== null) {
            setTask_id(item.id);
            setTask_name(item.name);
            setTask_level(item.level);
        }
    }

    const handleChange = (event) => {
        const target = event.target;    // input selectbox
        const value  = target.type === 'checkbox' ? target.checked : target.value;
        let name   = target.name;
        // console.log(name, value);
        if(name == 'task_name') setTask_name(value);
        else if(name == 'task_level') setTask_level(value);

    }

    const handleSubmit = (event) => {
        let item = {
            name: task_name,
            id: task_id,
            level: task_level,
        };

        onClickSubmit(item);
        // event.preventDefault();
    }

    const handleCancel = () => {
        onClickCancel();
    }
    useEffect(() =>{
        updateItem(itemSelected);
    })
    return (
        <div className="row">
            <div className="col-md-offset-7 col-md-5">
                <form onSubmit={handleSubmit} className="form-inline">

                    <div className="form-group">
                        <label className="sr-only" htmlFor>label</label>
                        <input value={task_name} onChange={handleChange} name="task_name" type="text" className="form-control" placeholder="Task Name" />
                    </div>

                    <div className="form-group">
                        <label className="sr-only" htmlFor>label</label>
                        <select value={task_level} onChange={handleChange}  name="task_level" className="form-control" required="required" >
                    Small
                            <option value={0}>Small</option>
                            <option value={1}>Medium</option>
                            <option value={2}>High</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button onClick={handleCancel} type="button" className="btn btn-default">Cancel</button>
                </form>
            </div>
        </div>
    );
}

export default Form;

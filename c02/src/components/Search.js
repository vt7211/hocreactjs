import { useState } from 'react';

function Search(props) {
    const onClickGo = props.onClickGo;
    const [strSearch, setStrSearch] = useState('');

    
    const handleSearch = () => {
        onClickGo(strSearch);
    }

    const handleClear = () => {
        setStrSearch('');
        onClickGo('');
    }

    const handleChange = (event) => {
        setStrSearch(event.target.value);
    }

    return (
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="input-group">
                <input value={strSearch} onChange={handleChange} type="text" className="form-control" placeholder="Search for..." />
                <span className="input-group-btn">
                    <button onClick={handleSearch} className="btn btn-info" type="button">Go!</button>
                    <button onClick={handleClear} className="btn btn-warning" type="button">Clear</button>
                </span>
            </div>
        </div>
    );
}

export default Search;

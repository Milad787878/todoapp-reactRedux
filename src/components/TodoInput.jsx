import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';
import { v1 as uuid } from 'uuid';

const TodoInput = () => {
    const [name, setName] = useState('');
    const dispatch = useDispatch();
    const handleKeyDown = e => {
        if (e.key === 'Enter') {
            dispatch(addTodo(
                        {
                            id: uuid(),
                            name: name
                        }
                    ))
        setName('')
        }
    }
    return (
        <div>
            <h3 className="mb-5">My Todo App with <strong style={{color: 'red'}}>React-Redux</strong></h3>
            <div className="row m-2">
                <input
                style={{textAlign: 'center'}}
                placeholder="Please Enter your todo ...."
                onKeyDown={(e) => handleKeyDown(e)}
                value={name}
                onChange={e => setName(e.target.value)}
                type="text" className="col form-control" />
                <button className="btn btn-primary mx-2"
                onClick={() => {
                    dispatch(addTodo(
                        {
                            id: uuid(),
                            name: name
                        }
                    ))
                    setName('')
                }
                }
                >Add</button>
            </div>
        </div>
    );
}

export default TodoInput;

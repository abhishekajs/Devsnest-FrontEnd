import React from 'react';
import { useState } from 'react';
import './RenderItem.css';

const RenderItem = ({ updateItem, removeItem, item, index }) => {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <div className='card' style={{ width: '18rem' }}>
            <div>
                {isEditing ? (
                    <input type='text' name='title' id='title'
                        required value={item.title} 
                        onChange={e => updateItem(index, { title: e.target.value })} />
                ) : (
                    <h5>{ item.title }</h5>
                )}
                {isEditing ? (
                    <input type='number' name='calorie' id='calorie'
                        required value={item.calorie}
                        onChange={e => updateItem(index, { calorie: e.target.value })} />
                ) : (
                    <p className='card-text'>{' '} You have consumed {item.calorie} calories</p>
                )}

                <div>
                    <button className='btn-del' onClick={() => removeItem(index)}>
                        Delete
                    </button>
                    <button className='btn-edit' onClick={() => setIsEditing(!isEditing)}>
                        {isEditing ? 'Done' : 'Edit'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RenderItem;
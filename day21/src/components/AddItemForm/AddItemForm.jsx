import { useState } from "react";
import './AddItemForm.css';

const AddItemForm = ({addItem}) => {
    const [title, setTitle] = useState('');
    const [calorie, setCalorie] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        addItem({ title, calorie });
        setTitle('');
        setCalorie('');
    };

    return (
        <form onSubmit={handleSubmit} className="form-frame">
            <div className="form-elements">
                <div className="form-item">
                    <label htmlFor="title"></label>
                    <input type="text" name="title" id="title" 
                        required value= {title} onChange={e => setTitle(e.target.value)}
                        placeholder="Item Name" />
                </div>

                <div className="form-calorie">
                    <label htmlFor="calorie"></label>
                    <input type="number" id="number"
                        required value= {calorie} onChange={e => setCalorie(e.target.value)}
                        placeholder="Calorie Amount" />
                </div>
            </div>

            <button type="submit" className="btn">Add Item</button>
        </form>
    );
}

export default AddItemForm;
import './App.css';
import Header from './components/Header/Header';
import AddItemForm from './components/AddItemForm/AddItemForm';
import RenderItem from './components/RenderItem/RenderItem';
import {useState} from 'react';

function App() {
  const [items, setItems] = useState([]);

  const addItem = item => {
    setItems([...items, item]);
  };

  const updateItem = (index, newItem) => {
    setItems(
      items.map((item, i) => (i === index ? { ...item, ...newItem } : item))
    );
  };

  const removeItem = index => {
    setItems(items.filter((item, i) => i !== index));
  };

  return (
    <div className="app-container">
      <Header />
      <div className="text-container">
        <AddItemForm addItem={addItem} />
        {items.length === 0 ? (
          <h3 className="app-no-items">Start Adding Items</h3>
        ) : (
          items.map((item, index) => (
            <RenderItem
              item={item}
              key={index}
              index={index}
              updateItem={updateItem}
              removeItem={removeItem}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;

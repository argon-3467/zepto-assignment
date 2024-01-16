import { useRef, useState, useEffect, useCallback } from 'react';
import './ChipInput.css';

function ChipInput({ items }) {
  const [selectedItems, setSelectedItems] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);
  let blurTimeoutId = null;

  // add item to the selectedItems and refocus the input element
  const handleItemClick = (itemToAdd) => {
    setSelectedItems([...selectedItems, itemToAdd]);
    setInputValue('');
    inputRef.current?.focus();
  };

  // remove item from the selectedItems and refocus the input element
  // Wrap handleItemRemove in useCallback to avoid running useEffect every time
  const handleItemRemove = useCallback(
    (itemToRemove) => {
      setSelectedItems(
        selectedItems.filter((item) => item.id !== itemToRemove.id)
      );
      inputRef.current?.focus();
    },
    [selectedItems]
  ); // Add selectedItems as a dependency

  // lowerCase input value for filtering the search
  const inputValueLC = inputValue.toLowerCase();
  const filteredItems = items.filter((item) => {
    return (
      !selectedItems.some((i) => i.id === item.id) &&
      (item.name.toLowerCase().includes(inputValueLC) ||
        item.email.toLowerCase().includes(inputValueLC))
    );
  });

  useEffect(() => {
    const chips = document.querySelectorAll('.chip');
    const inputElement = inputRef.current;
    chips.forEach((chip) => {
      chip.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace') {
          const itemId = parseInt(chip.getAttribute('data-id'));
          const itemToRemove = selectedItems.find((item) => item.id === itemId);
          handleItemRemove(itemToRemove);
        }
      });
    });

    // keydown even listner to input which then focuses the last chip
    inputRef.current.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && e.target.value === '') {
        const lastChip = chips[chips.length - 1];
        lastChip?.focus();
      }
    });

    return () => {
      chips.forEach((chip) => {
        removeEventListener('keydown', chip);
      });
      removeEventListener('keydown', inputElement);
    };
  }, [selectedItems, inputRef, handleItemRemove]);

  return (
    <div className="chip-container">
      {selectedItems.map((item) => (
        <div key={item.id} className="chip" tabIndex="0" data-id={item.id}>
          <img src={item.img.imgUrl} alt={item.img.imgAlt} />
          <p style={{ whiteSpace: 'nowrap' }}>{item.name}</p>
          <div className="cross" onClick={() => handleItemRemove(item)}>
            &times;
          </div>
        </div>
      ))}
      <div className="chip-input">
        <input
          placeholder={
            filteredItems.length > 0 ? 'search' : 'all items selected'
          }
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          onFocus={() => {
            clearTimeout(blurTimeoutId);
            setIsOpen(true);
          }}
          onBlur={() => {
            blurTimeoutId = setTimeout(() => {
              setIsOpen(false);
            }, 200);
          }}
        />
        {isOpen && (
          <div className="item-list">
            {filteredItems.map((item) => (
              <div
                className="item"
                key={item.id}
                onClick={() => handleItemClick(item)}
              >
                <img src={item.img.imgUrl} alt={item.img.imgAlt} />
                <p style={{ whiteSpace: 'nowrap' }}>{item.name}</p>
                <p style={{ opacity: 0.7 }}>{item.email}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ChipInput;

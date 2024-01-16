# Chip Input Component

This is a React component that provides a chip input functionality.

## Features

- When you click on the input field, a list of items will appear.
- As you type in the input field, the list filters to show only items that match your input.
- You can add an item to the selected items by clicking on it in the list.
- You can remove a selected item by clicking on the 'x' on the chip.
- The input field refocuses after an item is added or removed.
- If you press 'Backspace' while the input field is empty, the last chip is focused.
- If you press 'Backspace' while a chip is focused, the chip is removed.
- **New**: You can now navigate through the list of items using the 'Tab' key and select an item by pressing 'Enter'.

## Dependencies

This component uses the following hooks from React:

- `useRef`
- `useState`
- `useEffect`
- `useCallback`

## Styles

The component uses the styles defined in `ChipInput.css`.

## Usage

```jsx
import ChipInput from './ChipInput';

// items is an array of objects with id, name, email, and img properties
<ChipInput items={items} />;
```

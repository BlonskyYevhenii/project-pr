export function MyButton({ selectedOption, setSelectedOptions }) {
  return (
    <button
      className="add-button"
      onClick={() => setSelectedOptions((prev) => [...prev, selectedOption])}
    >
      Add
    </button>
  )
}

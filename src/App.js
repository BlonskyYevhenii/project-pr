import './App.css'
import Select from 'react-select'
import { useEffect, useState } from 'react'
import { MyButton } from './MyButton'
import { Card } from './Card'

const API_KEY = '8b78b03979db45aea6bc297be8be00b5'

// const options = [
//   { value: 'cherkasy, UA', label: 'Cherkasy, UA' },
//   { value: 'kyiv, UA', label: 'Kyiv, UA' },
//   { value: 'poltava, UA', label: 'Poltava, UA' },
//   { value: 'chernigiv, UA', label: 'Chernigiv, UA' },
//   { value: 'kharkiv, UA', label: 'Kharkiv, UA' },
// ]

function App() {
  const [selectedOption, setSelectedOption] = useState(null)
  const [selectedOptions, setSelectedOptions] = useState([])
  const [options, setOptions] = useState([])

  const setData = (data) => {
    return setOptions((prev) => [
      ...prev,
      {
        value: data.city.name,
        label: data.city.name,
        degrees: data.list[0].wind.deg,
      },
    ])
  }

  useEffect(() => {
    Array.from({ length: 5 }).forEach((e) => {
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${25}&lon=${35}&appid=${API_KEY}`,
      )
        .then((res) => res.json())
        // .then((res) => console.log(res))
        .then((json) => setData(json))
    })

    //   .then((json) => setOptions(formatData(json)))

    // fetch('https://jsonplaceholder.typicode.com/todos')
    //   .then((response) => response.json())
    //   .then((json) => .log(json))
  }, [])

  const onDeleteCity = (label) =>
    setSelectedOptions((prev) => prev.filter((o) => o.label !== label))

  return (
    <div className="App">
      <header className="App-header">
        <div className="select-container">
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            className="select-element"
          />
          <MyButton
            selectedOption={selectedOption}
            setSelectedOptions={setSelectedOptions}
          />
        </div>
      </header>

      <div className="card-list">
        {selectedOptions.map((card) => {
          return (
            <Card
              city={card.label}
              degrees={card.degrees}
              onDeleteCity={onDeleteCity}
            />
          )
        })}
      </div>
    </div>
  )
}

export default App

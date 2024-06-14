// src/CitySearch.js

import React, { useState } from 'react'
import Autosuggest from 'react-autosuggest'

// Приклад фіктивних даних про міста України
const cities = [
    { name: 'Київ' },
    { name: 'Харків' },
    { name: 'Одеса' },
    { name: 'Дніпро' },
    { name: 'Львів' },
    { name: 'Запоріжжя' },
    { name: 'Вінниця' },
    { name: 'Херсон' },
    { name: 'Полтава' },
    { name: 'Чернігів' },
]

// Функція для пошуку міст
const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase()
    const inputLength = inputValue.length

    return inputLength === 0
        ? []
        : cities.filter(
              (city) =>
                  city.name.toLowerCase().slice(0, inputLength) === inputValue,
          )
}

const getSuggestionValue = (suggestion) => suggestion.name

const renderSuggestion = (suggestion) => <div>{suggestion.name}</div>

const Autocomplete = () => {
    const [value, setValue] = useState('')
    const [suggestions, setSuggestions] = useState([])

    const onChange = (event, { newValue }) => {
        setValue(newValue)
    }

    const onSuggestionsFetchRequested = ({ value }) => {
        setSuggestions(getSuggestions(value))
    }

    const onSuggestionsClearRequested = () => {
        setSuggestions([])
    }

    const inputProps = {
        placeholder: 'Введіть назву міста',
        value,
        onChange,
    }

    return (
        <Autosuggest
            theme={{}}
            suggestions={suggestions}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
        />
    )
}

export default Autocomplete

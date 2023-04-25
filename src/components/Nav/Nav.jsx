import React from 'react'
import SearchBar from './SearchBar/SearchBar'
import style from './Nav.module.css'

export default function Nav(props) {
  return (
    <div className={style.nav}>
        <h1>Rick and Morty</h1>
        <SearchBar onSearch={props.onSearch} />
    </div>
  )
}

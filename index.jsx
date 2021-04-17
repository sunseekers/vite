import React from 'react'
import ReactDOM from 'react-dom'
import style from './style.module.css'
function App() {
  return (
    <div>
      <h2 style={{ color: 'red' }}>我是react生成的东西</h2>
      <p className={style.title}>我的css是css模块生成了</p>
    </div>
  )
}
ReactDOM.render(App(), document.querySelector("#app"))
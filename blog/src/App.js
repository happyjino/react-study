/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
function App() {

  // let post = '강남 우동 맛집'; // 서버에서 받아올 내용
  let [visitor, setVisitor] = useState('남자')
  let [글제목, setTitle] = useState(['어른 코트 추천', '아이 코트 추천', '학생 코트 추천']);
  let [like, setLike] = useState(0);

  return (
    <div className="App"> 
      <div className="black-nav"> 
        <h4>Happyjino's Blog</h4>
      </div>
      <div className="visitor">
        <span onClick={()=>{setVisitor('남자')}}>남자</span>
        <span onClick={()=>{setVisitor('여자')}}>여자</span>
        <span onClick={()=>{ // 5강 숙제!!
          let copy = [...글제목];
          copy.sort();
          setTitle(copy);
        }}>정렬</span>
      </div>
      <div className="list">
        <h4>{ visitor } { 글제목[0] } <span onClick={ ()=>{setLike(like+1)} }>👍</span> {like} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ visitor } { 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ visitor } { 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;

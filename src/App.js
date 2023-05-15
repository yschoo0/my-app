import React from 'react';
import './main.css';

function Book(props) {
  return (
    <li className={`${props.className} book`}>
      <a href={props.link}>
        {props.children}
      </a>
    </li>
  );
}

function Thin(props) {
  return (
    <li className={`${props.className} thin`}>
      <a href={props.link}>
        <p>{props.title}</p>
      </a>
    </li>
  );
}

function BookList(props) {
  return (
    <div className={props.className}>
      <h4>{props.title}</h4>
      <ul>{props.children}</ul>
    </div>
  );
}

function App() {
  return (
    <div>
      <BookList className="new" title="신착도서">
        <Book link="list.html">책 제목 및 저자</Book>
        <Book link="list.html">책 제목 및 저자</Book>
        <Book link="list.html">책 제목 및 저자</Book>
        <Thin link="list.html" title="책 제목" />
        <Book link="list.html">책 제목 및 저자</Book>
        <Book link="list.html">책 제목 및 저자</Book>
        <Book link="list.html">책 제목 및 저자</Book>
      </BookList>
      <BookList className="best" title="인기도서">
        <Book link="list.html">책 제목 및 저자</Book>
        <Thin link="list.html" title="책 제목" />
        <Book link="list.html">책 제목 및 저자</Book>
        <Book link="list.html">책 제목 및 저자</Book>
        <Thin link="list.html" title="책 제목" />
        <Book link="list.html">책 제목 및 저자</Book>
        <Book link="list.html">책 제목 및 저자</Book>
      </BookList>
    </div>
  );
}

export default App;

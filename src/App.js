import React from 'react';
import './main.css';

const Header = () => (
  <header className="home-header">
    <h2>한림대학교 일송기념 도서관</h2>
    <h1>
      <span></span> 신착/인기 도서 <span></span>
    </h1>
    <p>
      awesome place to make oneself <br /> productive and entertained through
      daily updates.
    </p>
  </header>
);

function Book(props) {
  return (
    <li className={`${props.className} book`}>
      <a href={props.link}>{props.children}</a>
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
      <Header /> {}
      <BookList className="new" title="신착도서">
        <Book>책 제목 및 저자</Book>
        <Book>책 제목 및 저자</Book>
        <Book>책 제목 및 저자</Book>
        <Thin title="책 제목" />
        <Book>책 제목 및 저자</Book>
        <Book>책 제목 및 저자</Book>
        <Book>책 제목 및 저자</Book>
      </BookList>
      <BookList className="best" title="인기도서">
        <Book>책 제목 및 저자</Book>
        <Thin title="책 제목" />
        <Book>책 제목 및 저자</Book>
        <Book>책 제목 및 저자</Book>
        <Thin title="책 제목" />
        <Book>책 제목 및 저자</Book>
        <Book>책 제목 및 저자</Book>
      </BookList>
    </div>
  );
}

export default App;

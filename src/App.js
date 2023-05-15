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

// import React, { useEffect, useState } from 'react';
// import './main.css';

// function Book(props) {
//   return (
//     <li className={`${props.className} book`}>
//       <a href={props.link}>
//         {props.children}
//       </a>
//     </li>
//   );
// }

// function Thin(props) {
//   return (
//     <li className={`${props.className} thin`}>
//       <a href={props.link}>
//         <p>{props.title}</p>
//       </a>
//     </li>
//   );
// }

// function BookList(props) {
//   return (
//     <div className={props.className}>
//       <h4>{props.title}</h4>
//       <ul>{props.children}</ul>
//     </div>
//   );
// }

// function App() {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     fetch('/path/to/your/json/file.json') // JSON 파일 경로를 지정해야 합니다.
//       .then(response => response.json())
//       .then(data => {
//         setBooks(data);
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   }, []);

//   return (
//     <div>
//       <BookList className="new" title="신착도서">
      
//       <Book link="list.html">책 제목 및 저자</Book>
//         <Book link="list.html">책 제목 및 저자</Book>
//         <Book link="list.html">책 제목 및 저자</Book>
//         <Thin link="list.html" title="책 제목" />
//         <Book link="list.html">책 제목 및 저자</Book>
//         <Book link="list.html">책 제목 및 저자</Book>
//         {books.map((book, index) => (
//           <Book key={index} link={book.link}>
//             {book.title} - {book.author}
//           </Book>
//         ))}
//       </BookList>
//       <BookList className="best" title="인기도서">
//         <Book link="list.html">책 제목 및 저자</Book>
//         <Thin link="list.html" title="책 제목" />
//         <Book link="list.html">책 제목 및 저자</Book>
//         <Book link="list.html">책 제목 및 저자</Book>
//         <Thin link="list.html" title="책 제목" />
//         <Book link="list.html">책 제목 및 저자</Book>
//         <Book link="list.html">책 제목 및 저자</Book>
//       </BookList>
//     </div>
//   );
// }

// export default App;


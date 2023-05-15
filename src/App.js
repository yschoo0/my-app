// import React, { useState, useEffect } from 'react';
// import { useSpring, animated } from 'react-spring';
// import './main.css';

// function Book(props) {
//   const [showAnimation, setShowAnimation] = useState(false);

//   useEffect(() => {
//     setShowAnimation(true); // 페이지가 처음 로드될 때 애니메이션을 활성화
//   }, []);

//   const animationProps = useSpring({
//     from: { opacity: 0, transform: 'scale(0.8)' },
//     to: { opacity: 1, transform: 'scale(1)' },
//     config: { duration: 500 },
//     immediate: !showAnimation, // 애니메이션을 페이지 새로 고침 시에만 비활성화
//   });

//   return (
//     <animated.li className={`${props.className} book`} style={animationProps}>
//       <a href={props.link}>
//         {props.children}
//       </a>
//     </animated.li>
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
//   return (
//     <div>
//       <BookList className="new" title="신착도서">
//         <Book link="list.html">책 제목 및 저자</Book>
//         <Book link="list.html">책 제목 및 저자</Book>
//         <Book link="list.html">책 제목 및 저자</Book>
//         <Thin link="list.html" title="책 제목" />
//         <Book link="list.html">책 제목 및 저자</Book>
//         <Book link="list.html">책 제목 및 저자</Book>
//         <Book link="list.html">책 제목 및 저자</Book>
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

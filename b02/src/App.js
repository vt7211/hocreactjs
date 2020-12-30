import { useEffect, useState, useRef } from 'react';
import DemoComponents from './components/DemoComponents';

// useEffect luôn luôn chạy sau khi render
// componentWillMount -> hooks không hỗ trợ

// let countRender = 0;

function App() {
  const buttonEl = useRef(null);
  const countRender = useRef(0);
  const [count2, setCount2] = useState(0);
  const [count, setCount] = useState(0);
  console.log("countRender", countRender);
  if (countRender.current === 0) {
    // TRƯỚC KHI Render lần đầu tiên 
    console.log('--- Truoc khi render', document.getElementById('button-click'));
  }

  // componentDidMount + componentDidUpdate
  useEffect(() => {
    console.log('componentDidMount + componentDidUpdate');
  })

  // componentDidMount 
  useEffect(() => {
    countRender.current = 1;
    console.log('run bao nhieu lan??? -> có phụ thuộc bất kỳ biến nào hay không?', count);
    // Nhận diện được danh sách biến và theo doi?
    // Nếu biến đó thay đổi -> Nó mới chạy lại
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    console.log('Chạy khi count hoặc count2 thay đổi', count, count2);
  }, [count, count2])

  useEffect(() => {
    console.log('Chạy khi count thay đổi', count);
  }, [count])

  useEffect(() => {
    console.log('Chạy khi count2 thay đổi', count2);
  }, [count2])
  
  // componentDidMount -> chạy một lần duy nhất khi dữ liệu đã được "mount" vào html
  // componentDidUpdate -> chạy mỗi khi component được cập lại dữ liệu (re-render)

  // Life cycle (Vòng đời của một Component)
  // Khi nào component sinh ra?
  // Khi nào component mất đi?
  // Khi nào component re-render lại

  // Dữ liệu (Blog tin tức) -> Gọi dữ liệu từ Back End trả về 
  //  (Chỉ gọi 1 lần khi component sinh ra)
  
  function handleClick() {
    setCount(count + 1);
    setCount2(count2 + 1);
  }
  function handleClick2() {
    setCount2(count2 + 1);
  }

  console.log('render component');
  console.log('buttonEl', buttonEl);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Count1: {count}</h1>
        <h1>Count2: {count2}</h1>
        <button onClick={handleClick} id="button-click">Click me - Count</button>
        <button onClick={handleClick2}>Click me - Count2</button>
        <DemoComponents />
      </header>
    </div>
  );
}
export default App;

import React, {useState, useEffect} from 'react';

const Counter = (props) => {
  const [count, updateCount] = useState(props.count);
  const [text, setText] = useState('');

  // const [state, setState] = useState({
  //     count : props.count,
  //     text : ''
  // })

  useEffect(() => {
    console.log('Application loaded successfully')
  }, [])

  useEffect(() => {
    console.log('useEffect ran')
    document.title = count;
  }, [count])

  return (
      <div className="Counter">
        <p>Current {text || 'Count'} : {count}</p>
        <button onClick={() => updateCount(count - 1)}>-1</button>
        <button onClick={() => updateCount(0)}>Reset</button>
        <button onClick={() => updateCount(count + 1)}>+1</button>
        <br/><br/>
        <input value={text} onChange={(e) => setText(e.target.value)}/>
      </div>
  );
}

Counter.defaultProps = {
  count : 0
}

export default Counter;


// <p>Current {state.text || 'Count'} : {state.count}</p>
// <button onClick={() => setState({ ...state, count : state.count - 1})}>-1</button>
// <button onClick={() => setState({ ...state, count : props.count})}>Reset</button>
// <button onClick={() => setState({ ...state, count : state.count + 1})}>+1</button>
// <br/><br/>
// <input value={state.text} onChange={(e) => setState({ ...state, text : e.target.value})}/>


import {createStore} from 'redux';

const countReducer = (state = {count : 10}, action) => {
    console.log(action);
    switch(action.type)
    {
        case 'INCREMENT_COUNT':
        {
            return {
                count : state.count + action.incrementBy
            }       
        }
        case 'DECREMENT_COUNT':
        {
            return {
                count : state.count - action.decrementBy
            } 
        }
        case 'SET':
        {
            return {
                count : action.count
            }
        }
        case 'RESET':
        {
            return {
                count : 0
            } 
        }
        default:
        {
            return state;
        }
    }
};

const store = createStore(countReducer);

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type : 'INCREMENT_COUNT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type : 'DECREMENT_COUNT',
    decrementBy
});

const setCount = ({count = 10 } = {}) => ({
    type : 'SET',
    count
});

const resetCount = () => ({
    type : 'RESET'
});

console.log('Redux 101');

const unsubscribe = store.subscribe(() =>{
    console.log(store.getState());
})

store.dispatch(incrementCount({incrementBy : 4}));
store.dispatch(incrementCount());

store.dispatch(decrementCount({decrementBy : 3}));
store.dispatch(decrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(setCount({count : 11}));
store.dispatch(setCount());



// store.dispatch({
//     type : 'INCREMENT_COUNT',
//     incrementBy : 5
// });

// store.dispatch({
//     type : 'INCREMENT_COUNT'
// });

// unsubscribe();

// store.dispatch({
//     type : 'DECREMENT_COUNT'
// });
// store.dispatch({
//     type : 'SET',
//     count : 56
// })
// store.dispatch({
//     type : 'RESET'
// });
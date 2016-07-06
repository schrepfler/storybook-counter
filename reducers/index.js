export default function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT': {
    	console.log('INCREMENT');
    	console.log(state);
    	return state + 1;
    }
      
    case 'DECREMENT': {
    	console.log('DECREMENT');
    	console.log(state);
    	return state - 1;
    }
    default: {
    	console.log('default');	
    	console.log(state);
    	return state;
    }
  }
}

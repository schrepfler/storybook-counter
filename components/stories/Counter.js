import React from 'react';
import Counter from '../Counter'; // This is our component
import { storiesOf, action } from '@kadira/storybook';
import { createStore } from 'redux';
import counter from '../../reducers';

var store = createStore(counter);

storiesOf('Counter', module)
	.add('with default initial value', () => (
	    <Counter
	      value={store.getState()}
	      onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
	      onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
	    />
    ))
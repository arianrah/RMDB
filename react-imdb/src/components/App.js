import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './elements/Header';
import Home from './Home';
import { GlobalStyle } from '../styles/GlobalStyle';

const App = () => (
	<>
		<Header />
		<Home />
		<GlobalStyle />
	</>
);

export default App;

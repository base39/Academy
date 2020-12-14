import React from 'react';
import {} from './style';
import Sort from '../Sort/index';
import Filter from '../Filter/index';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';

function Form() {
	return (
		<>
			<FormControl>
				<Sort />
				<Filter />
				<Button variant="contained" color="primary" type="submit">
					Pesquisar
				</Button>
			</FormControl>
		</>
	);
}

export default Form;

import { render } from 'react-dom';
import { GifItem } from '../../src/components/';
// import { ImagesData } from '../../src/interfaces/images.interfaces';

describe( 'Prueba de <GifItem/>', () => {

	const img= {
		url: 'https://one-punch.com/saitama.jpg',
		title: 'saitama',
		id: '1',
	}

	test ('debe hacer match con el snapshot', () => {
		const { container } = render( < GifItem img = { img } />, );
		console.log( container );
	});

});

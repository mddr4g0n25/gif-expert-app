import { ImagesData } from "../interfaces/images.interfaces";

interface Iprops {
	img: ImagesData;
}

export const GifItem = ( { img: {title, url} }: Iprops ) => {

	return (
		<div className="card">
			<img src={ url } alt={ title } />
			<p>{ title }</p>
		</div>
	)
	
}


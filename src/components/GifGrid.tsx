
import { GifItem } from "./GifItem";

import { useFetchGifs } from "../hooks/useFetchGifs";
import { ImagesData } from "../interfaces/images.interfaces";

interface IProps {
	category: string;
}
interface FetchProp {
	images: ImagesData[];
	isLoading: boolean;
}

export const GifGrid = ( { category }: IProps ): JSX.Element => {

	const { images, isLoading }:FetchProp = useFetchGifs( category );

	return (
		<>
			<h3>{ category }</h3>
			{
				isLoading && ( <h2>Cargando...</h2> )
			}
			<div className="card-grid">
				{
					images.map( ( image ) => (
						<GifItem 
							key = { image.id }
							img = { image }
						/>
					))
				}
			</div>
		</>
	)

}

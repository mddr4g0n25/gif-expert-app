import { useEffect, useState } from "react";
import { ImagesData } from "../interfaces/images.interfaces";
import { getGifs } from "../helpers/getGif";

export const useFetchGifs = ( category: string ) => {

	const [ images, setImages ] = useState<ImagesData[]>( [] );
	const [ isLoading, setIsLoading ] = useState<boolean>( true );

	useEffect( () => {
		const getImages = async(): Promise<void> => {
			const newImages = await getGifs( category );
			setImages( newImages );
			setIsLoading( false )
		}
		getImages();

	}, [category]);

	return {
		images,
		isLoading
	}

}

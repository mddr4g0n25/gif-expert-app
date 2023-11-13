import axios, { AxiosResponse } from "axios";
import { IGifs } from "../interfaces/gifs.interface";

interface IProps {
	id: string;
	title: string;
	url: string;
}

export const getGifs = async( category: string ) => {

	const url:string = `https://api.giphy.com/v1/gifs/search?api_key=CG4gyO53BMeAcQuBnwyHKV9JrDUFRK2o&q=${ category }&limit=10`;

	const { data }: AxiosResponse<IGifs> = await axios.get( url );

	const gifs: IProps[]  = data.data.map( img => ({
		id: img.id,
		title: img.title,
		url: img.images.downsized_medium.url,
	}));

	return gifs;

}


import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = (): JSX.Element => {

	const [ categories, setCategories ] = useState<string[]>([ 'One punch' ]);

	const onAddCategory = ( newCategory: string ) => {
		if ( categories.includes( newCategory ) ) return;
		setCategories( [ newCategory, ...categories ] );
	};

	return(
		<>
			<h1>GifExpertApp</h1>

			< AddCategory 
				// setCategories = { setCategories } 
				onNewCategory = { onAddCategory }
			/>

			{
				categories.map( category => (
					<GifGrid 
						category = { category } 
						key = { category }
					/>
				))
			}
		</>
	)

}

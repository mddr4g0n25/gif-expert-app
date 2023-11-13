
import { 
	ChangeEvent, 
	useState, 
	// Dispatch, 
	// SetStateAction, 
	FormEvent 
} from "react"

interface IProps {
	onNewCategory: ( newCategory: string ) => void;
}

export const AddCategory = ( { onNewCategory }: IProps ): JSX.Element => {

	const [ inputValue, setInputValue ] = useState<string>( '' );

	const onInputChange = ( { target }: ChangeEvent<HTMLInputElement> ): void => {
		// console.log( target.value );
		setInputValue( target.value );
	}

	const onSubmit = ( event: FormEvent<HTMLFormElement> ) => {
		event.preventDefault();
		if ( inputValue.trim().length <= 1 ) return;

		// setCategories( categories => [ inputValue!, ...categories ] );
		onNewCategory( inputValue.trim() );
		setInputValue('');
	}
	
	return(
		<form onSubmit = { ( event ) => onSubmit( event ) } >
			<input
				type = "text"
				placeholder = "Buscar gifs"
				value = { inputValue }
				// onChange = { ( event ) =>  onInputChange( event ) }
				onChange = { ( event ) => onInputChange( event ) }
			/>
			<p>Escribiste {inputValue} </p>
		</form>
	)

}

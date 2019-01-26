import React from 'react';
import "./ImageLinkForm.css"

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div>
			<p className='f3'>
				{'This Magic Brain will detect faces in your pictures. Give it a try'}
			</p>
			<div className='center'>
				<div className='form center pa4 br3 shadow-5'>
					<input type="tex" className="f4 pa2 w-70 center shadow-2 br2" onChange={onInputChange}/>
					<button 
					onClick={onButtonSubmit}
					className='w-30 grow f4 link ph3 shadow-3 br2 pv2 dib white bg-light-purple'>
						<strong>Detect</strong>
					</button>
				</div>
			</div>

		</div>
		);
}

export default ImageLinkForm;
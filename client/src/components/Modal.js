import React from 'react'
import ReactDOM from 'react-dom'

const Modal = ({ onDismiss, title, actions, content }) => {
	return ReactDOM.createPortal(
		<div onClick={onDismiss} className='ui dimmer modals visible active'>
			<div
				onClick={e => e.stopPropagation()}
				className='ui standard modal visible active'
			>
				{title ? <div className='header'>{title}</div> : null}
				<div className='content'>{content}</div>
				{actions ? <div className='actions'>{actions}</div> : null}
			</div>
		</div>,
		document.querySelector('#modal')
	)
}

export default Modal

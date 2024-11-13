import './modal.css'

const Modal = ({character, closeModal}) => {

  return (
  <div id="modal-container">
    <div role="dialog" id="modal">
      <header className="modal-header">
        <button className='close-button' onClick={closeModal}> X </button>
        <img src={character.image} alt={character.name} />
      </header>
      <footer className="modal-footer">
      <h3>
        { character.name }
      </h3>
      </footer>
    </div>
  </div>
  )
}

export default Modal;
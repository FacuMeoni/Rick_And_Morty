import './modal.css'

const Modal = ({character, closeModal}) => {

  return (
  <div className="modal-container">
    <div 
      role="dialog" 
      aria-labelledby="modal-title" 
      aria-describedby="modal-content"
      id="modal"
    >

      <button className='close-button' onClick={closeModal} aria-label="Close modal" > X </button>
      <header className="modal-header">
        <img src={character.image} alt={character.name} id="modal-img"/>
      </header>

      <footer className="modal-footer">
        <h3 id="modal-title">
          { character.name }
        </h3>
        
        <div id="modal-content">
          <span> Status: { character.status } </span> 
          <span> Gender: {character.gender} </span>
          <span> Species: { character.species }</span>
          <span> Origin: { character.origin } </span>
        </div>
      </footer>
    </div>
  </div>
  )
}

export default Modal;
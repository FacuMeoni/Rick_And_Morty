import './modal.css'
import SetStatusByBackground from '../../utils/SetBackgroundByStatus';

const Modal = ({character, closeModal}) => {

  const background = SetStatusByBackground(character.status)

  return (
  <div className="modal-container">
    <div 
      role="dialog" 
      aria-labelledby="modal-title" 
      aria-describedby="modal-content"
      id="modal"
      style={{ backgroundColor: background}}
    >
      <header className="modal-header">
        <button className='close-button' onClick={closeModal} aria-label="Close modal"> X </button>
        <img src={character.image} alt={character.name} id="modal-img" style={{ border:`4px solid ${background}`}} />
      </header>


      <main className="modal-main" style={{ color: background}}>
          <h3 id="modal-title">
            { character.name }
          </h3>

        <div className="modal-info"> 
          <span> Status: { character.status } </span> 
          <span> Gender: {character.gender} </span>
          <span> Species: { character.species }</span>
          <span> Origin: { character.origin } </span>
        </div>
      </main>
    </div>
  </div>
  )
}

export default Modal;
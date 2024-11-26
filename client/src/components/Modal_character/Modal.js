import './modal.css'
import '../../utils/BackgroundStyles.css';
import setBackgroundByStatus from  '../../utils/SetBackgroundByStatus'
import { CloseSvg } from '../../assets/CloseSvg';

const Modal = ({ character, closeModal }) => {

  const background= setBackgroundByStatus(character.status);

  return (
  <div className="modal-container">
    <div 
      role="dialog" 
      aria-labelledby="modal-title" 
      aria-describedby="modal-content"
      className={`modal ${character.status}`}
      style={{ color: background }}
    >
      <header className="modal-header">
        <button className='close-button' onClick={closeModal} aria-label="Close modal"> <CloseSvg/> </button>
        <img src={character.image} alt={character.name} id="modal-img" style={{ border:'6px solid'}} />
      </header>


      <main className="modal-main">
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
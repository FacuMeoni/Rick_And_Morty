import './Error.css';

const ErrorComponent = ({ error }) => {
  return(
    <section className='error-section'>
        <span className="error-text">
            { error }
        </span>
    </section>
  )
}

export default ErrorComponent;
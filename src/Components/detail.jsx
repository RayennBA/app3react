import './detail.css'

function Detail({ image, nom, number, bgColor, textColor }) {
    return (
      <div className='summ' style={{ backgroundColor: `rgb(${bgColor})` }}>
        <div className='title' style={{ color: `rgb(${textColor})` }}>
          <img src={image} alt="icon" />
          <p>{nom}</p>
        </div>
        <p>{number}<span>/100</span></p>
      </div>
    );
  }

export default Detail
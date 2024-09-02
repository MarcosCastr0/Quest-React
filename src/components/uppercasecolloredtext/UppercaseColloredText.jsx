import "./UppercaseColloredText.css"

const UppercaseColloredText = (props) =>{
  return (
    <div className="colored-text-container">
        {/* Armazenando a cor e o estado do paragrafo */}
      <p className="colored-text" style={{ color: props.color }}>
        {props.text.toUpperCase()}
      </p>
    </div>
  );
}

export default UppercaseColloredText;
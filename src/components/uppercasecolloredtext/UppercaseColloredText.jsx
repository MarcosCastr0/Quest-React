import "./UppercaseColloredText.css"

const UppercaseColloredText = (props) =>{
  return (
    <div className="colored-text-container">
      <p className="colored-text" style={{ color: props.color }}>
        {props.text.toUpperCase()}
      </p>
    </div>
  );
}

export default UppercaseColloredText;

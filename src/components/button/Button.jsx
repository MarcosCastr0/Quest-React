import "./Button.css"

const Button = (props) => {

    const handleClick = () => {
        alert(`A label desse botão é ${props.label}`);
    };

    return (
        <button className='btn' onClick={handleClick}>
            {props.label}
        </button>
    );
};

Button.defaultProps = {
    label: 'Clique aqui'
};

export default Button;
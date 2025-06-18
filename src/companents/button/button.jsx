import './button.css';

function Button(props) {
    const { type, title, onClick, disabled } = props;
    return (
        <button className={`btn ${
            (type === 'add' &&'add') ||
            (type === 'remove' && 'remove') ||
            (type === 'checkout' && 'checkout')} 
            ${disabled === true && 'disbaled'}`
            }
        
        
            onClick = {onClick}
            disabled ={disabled}
        >
            {title}
            
        </button>
    );
        }

export default Button;
import './Button.scss';

function Button({ color, prompt }) {
    // modifiers: color (white, blue, red)
    const assignColor = (color) => {
        switch (color) {
            case 'blue':
                return '--action'
            case 'red':
                return '--delete'
            default:
                return '--cancel'
        }
    }

    return (
        <button className={`button${assignColor(color)}`}>{prompt}</button>
    );
}

export default Button;
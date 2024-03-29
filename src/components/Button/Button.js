import './Button.scss';

// Component will takes 2 props: 
// color: 'blue' 'red' or empty. If empty will default to the cancel button styling
// prompt: CTA action of the button

function Button({ color, prompt, handler }) {
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
        <button className={`button${assignColor(color)}`} onClick={handler}>{prompt}</button>
    );
}

export default Button;
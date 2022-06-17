import { Link } from 'react-router-dom';
import './ButtonNav.scss';

// Component will takes 2 props: 
// path: the path where it should navigate to after clicking
// prompt: CTA action of the button

function ButtonNav({ color, prompt, path }) {
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
        <Link to={path} className={`button${assignColor(color)}`}>{prompt}</Link>
    );
}

export default ButtonNav;
import './Header.scss';
import headerLogo from '../../assets/logo/instock-1x.png';
import { NavLink } from 'react-router-dom';

function Header() {
    return ( 
        <header className='header'>
            <div className='header__logo'>
                <img src={headerLogo} alt='logo'/>
            </div>
            <nav className='header__nav'>
                <ul className='header__nav-list'>
                    <li className='header__nav-item header__nav-item--active'>
                        <NavLink to={'/warehouses'}>Warehouses</NavLink>
                    </li>
                    <li className='header__nav-item'>
                        <NavLink to={'/inventories'}>Inventory</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
     );
}

export default Header;
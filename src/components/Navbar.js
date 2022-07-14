import { useNavigate, useLocation } from 'react-router-dom';
import { ReactComponent as OfferIcon } from '../assets/svg/localOfferIcon.svg';
import { ReactComponent as ExploreIcon } from '../assets/svg/exploreIcon.svg';
import { ReactComponent as PersonOutlineIcon } from '../assets/svg/personOutlineIcon.svg';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <footer className="navbar">
            <div className="navbarNav">
                <ul className="navbarListItems">
                    <li className="navbarListItem" onClick={() => navigate('/')}>
                        <ExploreIcon fill={location.pathname === '/' ? '#2c2c2c' : '#8f8f8f'} width='36px' height='36px' />
                        <p
                            className={
                                location.pathname === '/'
                                    ? 'navbarListItemNameActive'
                                    : 'navbarListItemName'
                            }
                        >
                            Explore
                        </p>
                    </li>
                    <li className="navbarListItem" onClick={() => navigate('/offers')}>
                        <OfferIcon fill={location.pathname === '/offers' ? '#2c2c2c' : '#8f8f8f'} width='36px' height='36px' />
                        <p
                            className={
                                location.pathname === '/offers'
                                    ? 'navbarListItemNameActive'
                                    : 'navbarListItemName'
                            }
                        >
                            Offers
                        </p>
                    </li>
                    <li className="navbarListItem" onClick={() => navigate('/profile')}>
                        <PersonOutlineIcon fill={location.pathname === '/profile' ? '#2c2c2c' : '#8f8f8f'} width='36px' height='36px' />
                        <p
                            className={
                                location.pathname === '/profile'
                                    ? 'navbarListItemNameActive'
                                    : 'navbarListItemName'
                            }
                        >
                            Profile
                        </p>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Navbar;
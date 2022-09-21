import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';


const MainNavigation = () => {
    return ( 
    <header className={classes.header}>
        <div className={classes.logo}>
            Great Quotes
        </div>
        <nav className={classes.nav}>
            <ul>
            <li>
            <NavLink to='/quotes' 
            className={({isActive}) => isActive ? classes.active : null}>
                AllQuotes
                </NavLink>
                </li>
                <li>
            <NavLink to='/add-new-quotes' 
            className={({isActive}) => isActive ? classes.active : null}>
                Add a Quotes
                </NavLink>
                </li>
            </ul>
        </nav>
    </header>
    )
};
export default MainNavigation;
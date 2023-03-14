import './Header.scss';

export const Header = ({ menuTogglerFunction, menuTogglerValue, currentComponent }) => {


    return (
        <header className='header'>
            <h1>{currentComponent}</h1>
            <div className='toggle'>
              B.M
            </div>
        </header>
    );
}
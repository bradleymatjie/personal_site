import './Header.scss';

export const Header = ({ menuTogglerFunction, menuTogglerValue, currentComponent }) => {


    return (
        <header className='header'>
            <h1>{currentComponent}</h1>
            <div 
              className={`toggle ${menuTogglerValue ? "active" : ""}`}
              onClick={() => {
                menuTogglerFunction((state) => (!state))
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
        </header>
    );
}
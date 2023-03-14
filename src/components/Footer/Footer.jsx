import './Footer.scss';

export const Footer = ({ menuTogglerFunction, menuTogglerValue }) => {
  return (
    <footer className='footer'>
      <div className={`footer_menu ${menuTogglerValue ? "active" : ""}`}
              onClick={() => {
                menuTogglerFunction((state) => (!state))
              }}>
        <div className='footer_menu-spans'>
          <span></span>
          <span></span>
        </div>
        <p>{menuTogglerValue ? 'close': 'menu'}</p>
      </div>
    </footer>
  );
}
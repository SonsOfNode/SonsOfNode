import Link from 'next/link';

const Popup = ({ popupIsOpen, handlePopupIsOpen }) => {
  const handleOverlayClick = () => {
    handlePopupIsOpen();
  };

  const handleContainerClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      {popupIsOpen && (
        <div className="popup" onClick={handleOverlayClick}>
          <div className="popup__container" onClick={handleContainerClick}>
            <div className="popup__close">
              <button
                className="button popup__button"
                onClick={() => handlePopupIsOpen()}
              >
                <p className="text popup__text">X</p>
              </button>
            </div>
            <ul className="popup__links">
              <Link
                className="navbar__link"
                href="/"
                onClick={() => handlePopupIsOpen()}
              >
                <li className="text navbar__link">Home</li>
              </Link>
              <Link
                className="navbar__link"
                href="/about"
                onClick={() => handlePopupIsOpen()}
              >
                <li className="text navbar__link">Sobre</li>
              </Link>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;

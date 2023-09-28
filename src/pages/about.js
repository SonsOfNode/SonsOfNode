import Popup from '@/components/Popup';
import Navbar from '@/components/Navbar';

const about = ({ popupIsOpen, handlePopupIsOpen }) => {
  return (
    <section className="about">
      <Navbar handlePopupIsOpen={handlePopupIsOpen} />
      <Popup popupIsOpen={popupIsOpen} handlePopupIsOpen={handlePopupIsOpen} />
      <h1>Abossutssssss</h1>
    </section>
  );
};

export default about;

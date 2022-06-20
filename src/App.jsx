import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import Header from './components/Header/Header';
import Item from './components/Item/Item';
import Lightbox from './components/Lightbox/Lightbox';
import ModalMenu from './components/ModalMenu/ModalMenu';
import { changePopupStatus } from './store/Slices/ItemSlice';

function App() {
  const { showPopupStatus, isLightboxOpen, modalMenuStatus } = useSelector((state) => state.item);
  const dispatch = useDispatch();
  return (
    <>
      <div
        onClick={() => {
          showPopupStatus === true && dispatch(changePopupStatus());
        }}
        className="App">
        {modalMenuStatus && <ModalMenu />}
        <Header />
        <Item />
        {isLightboxOpen && <Lightbox />}
      </div>
    </>
  );
}

export default App;

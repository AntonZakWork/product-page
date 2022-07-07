import './App.scss';
import Header from './components/Header/Header';
import Item from './components/Item/Item';
import Lightbox from './components/Lightbox/Lightbox';
import ModalMenu from './components/ModalMenu/ModalMenu';
import { useAppDispatch } from './Hooks/useTypedDispatch';
import { useTypedSelector } from './Hooks/useTypedSelector';
import { changePopupStatus } from './store/Slices/ItemSlice';

const App: React.FC = () => {
  const { modalMenuStatus, showPopupStatus, isLightboxOpen } = useTypedSelector((state) => state.item);
  const dispatch = useAppDispatch();
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
};

export default App;

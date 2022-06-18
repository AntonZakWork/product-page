import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import Header from './components/Header/Header';
import Item from './components/Item/Item';
import { changePopupStatus } from './store/Slices/ItemSlice';

function App() {
  const { showPopupStatus } = useSelector((state) => state.item);
  const dispatch = useDispatch();
  return (
    <>
      <div
        onClick={() => {
          showPopupStatus === true && dispatch(changePopupStatus());
        }}
        className="App">
        <Header />
        <Item />
      </div>
    </>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import { Shop } from './pages/Shop/Shop';
import { Shared } from './pages/Shared/Shared';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Shared />}>
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;

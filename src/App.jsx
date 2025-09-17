import Header from './components/Header/Header';
import Home from './pages/home/home';
import useProducts from './hooks/useProducts';
import { ProductsContext } from './context/ProductsContext';

const App = () => {
  const products = useProducts();

  return (
    <>
      <Header />
      <main>
        <ProductsContext value={{ products }}>
          <Home />
        </ProductsContext>
      </main>
    </>
  );
};

export default App;

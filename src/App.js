import './App.css';
import AdditionalServices from './components/AdditionalServices';
import PurchasedServices from './components/PurchasedServices';

function App() {
  return (
    <div className="App">
      <PurchasedServices />
      <AdditionalServices />
    </div>
  );
}

export default App;

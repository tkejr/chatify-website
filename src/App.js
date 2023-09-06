import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';

function App() {
  return (
  <>
   <main id="MainContent" className="flex flex-col outline-none" tabIndex={-1}>
  
		<Header/>
		<Home/>
		
      </main>

	<Footer/>
		  </>
  );
}

export default App;

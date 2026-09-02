import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import OurProcess from './pages/OurProcess';
import Service from './pages/Service';

const App = () => {
	return (
		<div>
			<Navbar />
			<Home />
			<About />
			<Service />
			<OurProcess />
			<Contact />
			<Footer />
		</div>
	);
};

export default App;

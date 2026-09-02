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
			<section id='home'>
				<Home />
			</section>
			<section id='about'>
				<About />
			</section>
			<section id='service'>
				<Service />
			</section>
			<section id='our-process'>
				<OurProcess />
			</section>
			<section id='contact'>
				<Contact />
			</section>
			<Footer />
		</div>
	);
};

export default App;

import {Route, Routes} from 'react-router-dom';
import Layout from './layout';
import LandingPage from './pages/LandingPage';
import EarningPage from './pages/EarningPage';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/" element={<LandingPage />}></Route>
					<Route path="/earning" element={<EarningPage />}></Route>
				</Route>
			</Routes>
		</>
	);
}

export default App;

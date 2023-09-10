import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import {YoutubeContextProvider} from './youtubeSource.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter basename="/YoutubeVideoApi/">
		<YoutubeContextProvider>
			<App />
		</YoutubeContextProvider>
	</BrowserRouter>
);

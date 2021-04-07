import './admin.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Posts from './components/admin/Post/Posts';
import NewPost from './components/admin/NewPost/NewPost';
import Docs from './components/admin/Docs/Docs';

function App() {
	return (
		<Router>
			<Route path="/" component={Posts} exact />
			<Route path="/posts" component={Posts} exact />
			<Route path="/new-post" component={NewPost} exact />
			<Route path="/docs" component={Docs} exact />
		</Router>
	);
}

export default App;

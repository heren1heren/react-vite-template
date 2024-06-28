import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { LayOut } from './components/Layout';

const App = () => {
  return (
    <LayOut>
      {' '}
      <div>I am app Page </div>
    </LayOut>
  );
};

export const ErrorPage = () => {
  return (
    <div>
      <h1>Oh no, this route doesn&apos;t exist!</h1>
      <Link to="/">
        You can go back to the home page by clicking here, though!
      </Link>
    </div>
  );
};

export default App;

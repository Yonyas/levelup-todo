// import Test from '../Test.js';
import { Route, Switch } from 'react-router-dom';
import CharacterSelect from './pages/characterSelect/characterSelect';

export default function App(): any {
  return (
    <Switch>
      <Route exact path="/" component={CharacterSelect} />
    </Switch>
  );
}

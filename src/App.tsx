// import Test from '../Test.js';
import { Route, Switch } from 'react-router-dom';
import CharacterSelect from './pages/characterSelect/characterSelect';
import NotePage from './pages/note/NotePage';

export default function App(): any {
  return (
    <Switch>
      <Route exact path="/" component={CharacterSelect} />
      <Route exact path="/note" component={NotePage} />
    </Switch>
  );
}

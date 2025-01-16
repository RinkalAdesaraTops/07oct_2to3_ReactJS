import logo from './logo.svg';
import './App.css';
import Firstcomponent from './Firstcomponent';
import Secondcomponent from './Secondcomponent';
import Stateexample from './Stateexample';
import Classcomponent from './Classcomponent';
import LifecycleClass from './LifecycleClass';
import Lifecyclefunc from './Lifecyclefunc';
import CrudExample from './CrudExample';

function App() {
  let name="abc"
  let age = 20
  let arr = [1,2,3,4,5]
  return (
    <div>
      <h3>First React Project</h3>
      {/* <Firstcomponent /> */}
      {/* <Secondcomponent myname={name} myage={age} arr={arr}/> */}
      {/* <Stateexample /> */}
      {/* <Classcomponent myname={name} myage={age}/> */}
      {/* <LifecycleClass /> */}
      {/* <Lifecyclefunc /> */}
      <CrudExample />
    </div>
  );
}

export default App;

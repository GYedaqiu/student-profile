import StudentProfile from './components/StudentProfile';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

library.add(faPlus, faMinus);

function App() {
  return (
    <div>
      <StudentProfile />
    </div>
  );
}

export default App;

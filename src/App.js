import "./App.css";
import Buttons from "./components/Buttons.js";

function App() {
  return (
    <div className='app-container'>
      <Buttons text='¡Cuidado!' />
      <Buttons text='¡Todo ok!' />
      <Buttons text='¡Error!' />
    </div>
  );
}

export default App;

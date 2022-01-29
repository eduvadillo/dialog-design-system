import "./App.css";
import Button from "./components/Button.js";

function App() {
  return (
    <div className='app-container'>
      <Button text='¡Cuidado!' />
      <Button text='¡Todo ok!' />
      <Button text='¡Error!' />
    </div>
  );
}

export default App;

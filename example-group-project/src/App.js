import "./App.css";
import Chat from "./components/Chat";
import Header from "./components/Header";
import SendingMessage from "./components/SendingMessage";

function App() {
  return (
    <div className="App">
      <Header />
      <Chat />
      <SendingMessage />
    </div>
  );
}

export default App;

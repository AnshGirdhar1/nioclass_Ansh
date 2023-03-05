import "./App.css";
import Design from "./components/Design";
import Header from "./components/Header";
import QuestionContainer from "./components/QuestionContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <QuestionContainer />
      <Design
        attribute="circle left-circle"
        source="https://qedge.sarjen.com/wp-content/uploads/2019/11/service1_navy_circle.png"
      />
      <Design
        attribute="circle right-circle"
        source="https://qedge.sarjen.com/wp-content/uploads/2019/11/service1_yellow_circle.png"
      />
    </div>
  );
}

export default App;

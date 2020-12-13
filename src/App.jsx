import { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { covidThunk } from "./Redux/features/covid";
import States from "./components/States";
import Header from "./components/Header";
import Overview from "./components/Overview";
import Footer from "./components/Footer";

function App() {
  const dispatch = useDispatch();

  //fetch data
  useEffect(() => {
    dispatch(covidThunk());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <div className="ui-wrap">
        <Overview />
        <States />
      </div>
      <Footer />
    </div>
  );
}

export default App;

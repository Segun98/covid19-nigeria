import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { covidThunk } from "./Redux/features/covid";
import States from "./components/States";
import Header from "./components/Header";
import Overview from "./components/Overview";
import Footer from "./components/Footer";

function App() {
  const dispatch = useDispatch();
  //redux store
  const { data, loading, error } = useSelector((state) => state);

  //centralising States data in main app component to implement a manual search functionality
  const [statesData, setStatesData] = useState([]);
  //search state
  const [search, setSearch] = useState("");

  //fetch data
  useEffect(() => {
    dispatch(covidThunk());
  }, [dispatch]);

  //set state data from redux store
  useEffect(() => {
    setStatesData(data.states || []);
  }, [data.states]);

  //manual search
  function Filter(e) {
    e.preventDefault();
    //refetch all data if no text
    if (!search) {
      return dispatch(covidThunk());
    }

    const result = data.states.filter(
      (s) => s.state.toLowerCase() === search.toLowerCase()
    );

    //if no result, refecth all data
    if (result.length === 0) {
      return dispatch(covidThunk());
    }
    setStatesData(result);
  }

  return (
    <div className="App">
      <Header />
      <div className="ui-wrap">
        <Overview
          data={data}
          loading={loading}
          error={error}
          search={search}
          setSearch={setSearch}
          Filter={Filter}
        />
        <States data={statesData} loading={loading} error={error} />
      </div>
      <Footer />
    </div>
  );
}

export default App;

import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useState } from "react";

export default function AboutUs() {
  
  const [data, setData] = useState([ { public: "Hello", data: 1 }, { public: "World", data: 2 }, { public: "Hey hey", data: 3 }]);
  const [selectedData, setSelectedData] = useState(null);

    function onChangeHandler(e) {
      setSelectedData( {...data.find((element) => element.data == e.target.value)} )
    }
    
    return(
        <>
        <Navbar />
        <main>
          <h1>About us page!</h1>

          <select onChange={onChangeHandler}>
            {data.length > 0 ?
             data.map((element) => 
                <option key={`${element.data} + ${element.public}`} value={element.data}>{element.public}</option>
              ) : <p>Cannot load data</p>}
          </select>

          { selectedData ? <h2>{selectedData.public} and the data is: {selectedData.data}</h2> : <h2>Please select an option</h2> }
        </main>
        <Footer />
      </>
    )
}
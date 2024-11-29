import logo from './logo.svg';
import './App.css';
import SampleTable from "./SampleTable";
import React, {useEffect, useState} from 'react';
import SuggestedOptimizations from './SuggestedOptimizations';





function App() {

    const onStartup = () => {
        const authUrl = 'http://127.0.0.1:5000/api/data'; // Adjust the URL to match your Flask API

        fetch(authUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data.message); // Update state with the fetched data
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    };

    useEffect(() => {
        onStartup();
    }, []); // Empty dependency array ensures this runs only once
    const [show_suggested_optimizations, set_show_suggested_optimizations] = useState(false);

    var group_id = 41276;
    return (
        <div className="App" style={{padding: "50px"}}>
            <img src="jampp-logo.png" style={{width: "10%", height: "10%",}} className="App-logo" alt="logo"/>
            <div style={{display: "flex", padding: "10px", justifyContent: "space-between"}}>
                <h1>
                    Group: {group_id}
                </h1>
                <button style={{
                    padding: "10px",
                    borderRadius: "5px",
                    height: "50%",
                    marginTop: "auto",
                    marginBottom: "auto"
                }} onClick={() => {
                    set_show_suggested_optimizations((prevState) => !prevState)
                }}>Suggested optimizations
                </button>
            </div>
            {show_suggested_optimizations && <SuggestedOptimizations></SuggestedOptimizations>}
            <img src="group-graph.png"></img>
            <SampleTable/>
        </div>
    );
}

export default App;


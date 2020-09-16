import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Tab from './components/Tab';

function App() {

    // Declaring State variable that has an array of "Tabs" objects with a "label" and "content" property
    const [tabs, setTabs] = useState([
        {
            label: "Tab 1",
            content: "Tab 1 content is showing here"
        },
        {
            label: "Tab 2",
            content: "Tab 2 content is showing here",
        },
        {
            label: "Tab 3",
            content: "Tab 3 content is showing here"
        }
    ]);

    const [index,setIndex] = useState(0);

    return (
        <div className="App bg-light">
            {/* Setting a grid system on Bootstrap to horizontally center the Form and Results components */}
			<div className ="row justify-content-center">  
                <div className="col-4 p-4">
                    { tabs.map((item,i) => 
                        <Tab key={i} tab={item} index={i} setIndex={setIndex} ></Tab>
                    )}
                    <div className="border border-dark m-4">
                        <p className="text-left px-2 py-1"> {tabs[index].content}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

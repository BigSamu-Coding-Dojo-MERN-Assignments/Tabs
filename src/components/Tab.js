import React from 'react'

const tab = (props) => {
    
    //-----------------------------------
    // I) PROP, STATE AND AUX VARIABLES
    // ----------------------------------

    //  We destructure props into "tab", "index" and "setIndex"
    const {tab,index,setIndex} = props;
    // We destructure the properties of each Tab object into "label" and "content" variables
    const {label,content} = tab;

    //-----------------------------------
    // II) HANDLERS
    //-----------------------------------

    const tabSelected = (e, index) => {    
        setIndex(index);

    }

    //-----------------------------------
    // III) JSX
    //-----------------------------------

    return (
        <>
            <button 
                onClick = { e => tabSelected(e, index) } 
                className="button btn-secondary d-inline-block mx-2 px-2">
                    {label}
            </button>
        </>
    )
}

export default tab

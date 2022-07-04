import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Globe from "./images/globe.png";

function App() {
    return (
        <>
            <div className="flex justify-center gap-2 py-3 bg-[#F55A5A]">
                <img className="h-[25px]" src={Globe} />
                <p className="text-white">my travel journal.</p>
            </div>
            <div className="px-10">
                <Card />
                <div className="shadow-[] mx-[0%] py-[30px] text-center"></div>
            </div>
        </>
    );
}

export default App;

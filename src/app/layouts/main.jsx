import React from "react";
import UseMockData from "../utils/mockData";

const Main = () => {
    const { error, initialize, progress, status } = UseMockData();
    const handleClick = () => {
        initialize();
    };

    return (
        <div className="conainer mt-5">
            <h1> Main Page</h1>
            <h3>Иницилизация данных в FireBase</h3>
            <ul>
                <li>Status: {status}</li>
                <li>Progress:{progress}%</li>
                {error && <li>error:{error}</li>}
            </ul>
            <button className="btn btn-primary" onClick={handleClick}>
                Инициализировать
            </button>
        </div>
    );
};

export default Main;

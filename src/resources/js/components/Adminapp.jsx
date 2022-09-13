import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./Navbar";


// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


function Adminapp() {
   const title = 'welcome to admin panel';
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <Navbar />
                        <div className="card-header">
                            <div className="flex text-6xl">
                                <FontAwesomeIcon icon={faCoffee} />
                                {title}
                            </div>

                             Example Component22
                        </div>

                        <div className="card-body">I'm an example component!</div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Adminapp;

if (document.getElementById('Adminapp')) {
    ReactDOM.render(
        <Adminapp />
        , document.getElementById('Adminapp')
    );
}


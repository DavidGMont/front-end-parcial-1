import { useState } from 'react';
import './App.css';
import Card from './Components/Card.jsx';

function App() {
    const [state, setState] = useState(0);

    return (
        <>
            <h1>Carga de estudiantes</h1>
            <form></form>
            <Card />
        </>
    );
}

export default App;

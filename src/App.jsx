import { useState } from 'react';
import './App.css';
import Card from './Components/Card.jsx';

function App() {
    const [cardDetails, setCardDetails] = useState({
        name: '',
        cardNumber: 0,
        month: 0,
        year: 0,
        cvc: 0,
    });

    const [showCard, setShowCard] = useState(false);
    const [showError, setShowError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            cardDetails.name.trim().length > 3 &&
            cardDetails.cardNumber.toString().length >= 15 &&
            cardDetails.cardNumber.toString().length <= 16 &&
            cardDetails.year.toString().length < 3 &&
            cardDetails.month.toString().length < 3 &&
            cardDetails.cvc.toString().length < 4
        ) {
            setShowCard(true);
            setShowError(false);
        } else {
            setShowError(true);
        }
    };

    return (
        <>
            <h1>100% Real, No Fake</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre del tarjetahabiente:</label>
                <input
                    type="text"
                    name="Nombre del portador"
                    id="name"
                    required={true}
                    placeholder={'Ej. Britney Spears'}
                    onChange={(e) => setCardDetails({ ...cardDetails, name: e.target.value })}
                />
                <label htmlFor="card-number">Número de tarjeta:</label>
                <input
                    type="number"
                    name="Número de tarjeta"
                    id="card-number"
                    min={100000000000000}
                    max={9999999999999999}
                    required={true}
                    placeholder={'Ej. 1234 5678 9012 3456'}
                    onChange={(e) =>
                        setCardDetails({ ...cardDetails, cardNumber: Number(e.target.value) })
                    }
                />
                <fieldset>
                    <legend>Fecha de expiración (MM/AA):</legend>
                    <label htmlFor="month">Mes:</label>
                    <input
                        type="number"
                        name="Mes"
                        id="month"
                        max={999}
                        required={true}
                        placeholder={'MM'}
                        onChange={(e) =>
                            setCardDetails({ ...cardDetails, month: Number(e.target.value) })
                        }
                    />
                    <label htmlFor="year">Año:</label>
                    <input
                        type="number"
                        name="Año"
                        id="year"
                        max={99}
                        required={true}
                        placeholder={'YY'}
                        onChange={(e) =>
                            setCardDetails({ ...cardDetails, year: Number(e.target.value) })
                        }
                    />
                    <label htmlFor="cvc">CVC:</label>
                    <input
                        type="number"
                        name="CVC"
                        id="cvc"
                        max={999}
                        required={true}
                        placeholder={'Ej. 123'}
                        onChange={(e) =>
                            setCardDetails({ ...cardDetails, cvc: Number(e.target.value) })
                        }
                    />
                </fieldset>
                <button type={'submit'}>Confirmar</button>
            </form>
            {showError ? <p>Por favor chequea que la información sea correcta</p> : null}
            {showCard ? <Card cardDetails={cardDetails} /> : null}
        </>
    );
}

export default App;

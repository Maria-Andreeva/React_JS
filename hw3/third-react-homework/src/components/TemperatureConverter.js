import {TextField, Button} from "@mui/material";
import React, {useState} from "react";

function TemperatureConverter(){
    const [celsius, setCelsius] = useState("");
    const [fahrenheit, setFahrenheit] = useState("");

    const convertToFahrenheit = () => {
        if (celsius !== "") {
            const fahrenheitValue = (parseFloat(celsius) * 9) / 5 + 32;
            setFahrenheit(fahrenheitValue.toFixed(2));
        }
    };

    const convertToCelsius = () => {
        if (fahrenheit !== "") {
            const celsiusValue = ((parseFloat(fahrenheit) - 32) * 5) / 9;
            setCelsius(celsiusValue.toFixed(2));
        }
    };

    return (
        <div style={{ maxWidth: "400px", margin: "0 auto", marginTop: "50px" }}>
            <TextField
                label="Цельсия"
                variant="outlined"
                fullWidth
                type="number"
                value={celsius}
                onChange={(e) => setCelsius(e.target.value)}
                style={{ marginBottom: "10px" }}
            />

            <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={convertToFahrenheit}
                style={{ marginBottom: "20px" }}
            >
                Конвертировать в Фаренгейты
            </Button>


            <TextField
                label="Фаренгейт"
                variant="outlined"
                fullWidth
                type="number"
                value={fahrenheit}
                onChange={(e) => setFahrenheit(e.target.value)}
                style={{ marginBottom: "10px" }}
            />

            <Button
                variant="contained"
                color="secondary"
                fullWidth
                onClick={convertToCelsius}
            >
                Конвертировать в Цельсии
            </Button>
        </div>

    )
}

export default TemperatureConverter;

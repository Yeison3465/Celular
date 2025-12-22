import React, { useState } from 'react'
import { PhoneLayout } from '../Layout/PhoneLayout';

export const Calculator = () => {
    const [display, setDisplay] = useState("");
    const [firstNumber, setFirstNumber] = useState(null);
    const [operator, setOperator] = useState(null);


    const handleNumber = (num) => {
        setDisplay(display + num);
    };


    const handleOperator = (op) => {
        if (display === "") return;
        setFirstNumber(Number(display));
        setOperator(op);
        setDisplay("");
    };

    const calculate = () => {
        if (firstNumber === null || operator === null || display === "") return;

        const secondNumber = Number(display);
        let result = 0;

        if (operator === "+") result = firstNumber + secondNumber;
        if (operator === "-") result = firstNumber - secondNumber;
        if (operator === "*") result = firstNumber * secondNumber;
        if (operator === "/") result = secondNumber !== 0 ? firstNumber / secondNumber : "Error";

        setDisplay(result.toString());
        setFirstNumber(null);
        setOperator(null);
    };


    const clear = () => {
        setDisplay("");
        setFirstNumber(null);
        setOperator(null);
    };

    return (
        <PhoneLayout>
            <div className="flex flex-col h-full justify-end px-3 pb-4">
                <div className="mb-4 bg-black text-white text-right text-4xl px-4 py-6 rounded-xl">
                    {display || "0"}
                </div>

                
                <div className="grid grid-cols-4 gap-3 text-lg font-semibold">

                   
                    <button
                        onClick={clear}
                        className="col-span-2 bg-red-500 text-white py-4 rounded-full"
                    >
                        C
                    </button>
                    <button
                        onClick={() => handleOperator("/")}
                        className="bg-orange-500 text-white py-4 rounded-full"
                    >
                        ÷
                    </button>
                    <button
                        onClick={() => handleOperator("*")}
                        className="bg-orange-500 text-white py-4 rounded-full"
                    >
                        ×
                    </button>

                   
                    {[7, 8, 9].map((n) => (
                        <button
                            key={n}
                            onClick={() => handleNumber(n.toString())}
                            className="bg-gray-700 text-white py-4 rounded-full"
                        >
                            {n}
                        </button>
                    ))}
                    <button
                        onClick={() => handleOperator("-")}
                        className="bg-orange-500 text-white py-4 rounded-full"
                    >
                        −
                    </button>

                   
                    {[4, 5, 6].map((n) => (
                        <button
                            key={n}
                            onClick={() => handleNumber(n.toString())}
                            className="bg-gray-700 text-white py-4 rounded-full"
                        >
                            {n}
                        </button>
                    ))}
                    <button
                        onClick={() => handleOperator("+")}
                        className="bg-orange-500 text-white py-4 rounded-full"
                    >
                        +
                    </button>

                    
                    {[1, 2, 3].map((n) => (
                        <button
                            key={n}
                            onClick={() => handleNumber(n.toString())}
                            className="bg-gray-700 text-white py-4 rounded-full"
                        >
                            {n}
                        </button>
                    ))}
                    <button
                        onClick={calculate}
                        className="bg-green-500 text-white py-4 rounded-full"
                    >
                        =
                    </button>

                    
                    <button
                        onClick={() => handleNumber("0")}
                        className="col-span-2 bg-gray-700 text-white py-4 rounded-full"
                    >
                        0
                    </button>
                    <button
                        onClick={() => handleNumber(".")}
                        className="bg-gray-700 text-white py-4 rounded-full"
                    >
                        .
                    </button>
                </div>
            </div>
        </PhoneLayout>
    );
}

import {useRef, useState} from "react";


const Button = ({onClick,label}) => {

    const [good, setGood] = useState(0);
    const useReff = useRef({
        name: 'gk',
        age : 11
    });


    const getGood = () =>{
        console.log(good);

        setGood(good+5);
        console.log(useReff.current.name)
    }

    return (
        <button
            onClick={getGood}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-md transition duration-300 ease-in-out transform hover:scale-105"
        >
            {label}
        </button>
    );
};

export default Button;
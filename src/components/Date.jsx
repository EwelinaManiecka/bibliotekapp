import { useEffect, useState } from "react";

const CurrentDate = () => {

    const [date, setDate] = useState(new Date());

    useEffect(()=> {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => clearInterval(timer)
    })

    return (
        <div className="flex text-white gap-2">
            <p>Dzisiaj jest: </p>
            <p>{date.toLocaleString()}</p>
        </div>
    )
}

export default CurrentDate;
import {useState} from "react";
import PasswordInput from "./PasswordInput";
import {days} from "../data/days";

type DayViewProps = {
    day: number;
    onBack: ()=>void;
    markSolved: (day: number) => void;
}

export default function DayView({day, onBack, markSolved}: DayViewProps) {
    const [unlocked, setUnlocked] = useState(false)
    const data = days.find((d) => d.day === day);

    if (!data) return <p>ERROR: Day not Found</p>

    return (
        <div className="dayView">
            <button onClick={onBack} className="back">&#8592; BACK</button>

            <h2>{data.title}</h2>
            

            {!unlocked && (
                <>
                <PasswordInput
                solution={data.solution}
                onCorrect={() => {
                    setUnlocked(true);
                    markSolved(day);
                }}
                />
                </>
            )}
            {unlocked && (
                <div className = "unlocked">
                    <h3>{data.story}</h3>
                    
                    <p>See you tomorrow</p>
                </div>
            )}
        </div>
    )
}

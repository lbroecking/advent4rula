
import {days} from "../data/days";

type DoorGridProps = {
    onSelectDay: (day: number) => void;
    solvedDays: number[];
}

function shuffleArray<T>(array:T[]) : T[] {
    const copy = [...array];
    for (let i = copy.length -1; i>0; i--) {
        const j = Math.floor(Math.random()*(i+1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

const shuffleDays = shuffleArray(days);

export default function DoorGrid({onSelectDay, solvedDays}: DoorGridProps){
    const today = new Date().getDate();
    //const days = today.getDate()

    return (
        <div className="grid">
            {shuffleDays.map((d) => {
            const isLocked = d.day > today;
            const isSolved = solvedDays.includes(d.day);

            return (
                <button
                    key = {d.day}
                    className = {`door ${isSolved ? "solved" : ""}`}
                    onClick={() => !isLocked && onSelectDay(d.day)}
                    disabled = {isLocked}
                    >
                    {d.day}
                </button>
            )})}

        </div>
    )
}
import {useEffect, useState} from 'react';
import DoorGrid from './components/DoorGrid';
import DayView from './components/DayView';
import './App.css';

const App: React.FC = () => {
  const [currentDay, setCurrentDay] = useState<number>(0);
  const [solvedDays, setSolvedDays] = useState<number[]>(() => {
    const stored = localStorage.getItem("solvedDays");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("solvedDays", JSON.stringify(solvedDays));
  }, [solvedDays])


  const markSolved = (day: number) => {
    setSolvedDays((prev) => {
      if (!prev.includes(day)) return [...prev, day];
      return prev;
    })
  
  }
return (
    <div className="app">
      {!currentDay ? (
        <>
          <h1>Advent for Rula 2025</h1>
          <DoorGrid onSelectDay={setCurrentDay} solvedDays={solvedDays}/>
        </>
      ) : (
        <DayView 
        day={currentDay} 
        onBack={() => setCurrentDay(0)} 
        markSolved={markSolved}
        />
      )
    }
    </div>
  );
}

export default App

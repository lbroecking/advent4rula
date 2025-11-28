import {useState} from "react";

type PasswordInputProps = {
    solution: string;
    onCorrect: () => void;
}

export default function PasswordInput({solution, onCorrect} : PasswordInputProps) {
    const [input, setInput] = useState("");

    const check = () => {
        if (input.trim().toLowerCase() === solution.toLowerCase()) {
            onCorrect();
        } else {
            alert("Sorry amore.. wrong password. Try it again.")
        }
    };

    return (
        <div className = "pwContainer">
            <input
            type = "text"
            value = {input}
            placeholder="password please"
            onChange={(e) => setInput(e.target.value)}
            />
            <br></br>
            <button onClick={check}>Check</button>
        </div>
    );
}
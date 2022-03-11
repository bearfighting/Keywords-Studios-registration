import { Button } from "react-bootstrap";

export default function Registred({number, handleDisplay, display}) {
    return (
        <div className="registred">
            <h1>{number}</h1>
            <Button onClick={handleDisplay}>{display ? "Undisplay" : "Display Registration"}</Button>
        </div>
    )
}
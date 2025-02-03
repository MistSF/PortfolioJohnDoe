import "../CSS/Header.css";
import Nav from "./Nav";
export default function Header() {
    return (
        <header className="App-header">
            <h1 className="col-4">John Doe</h1>
            <Nav className="col-8"/>
        </header>
    ); 
}
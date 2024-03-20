import { useState } from 'react'
import './About.css'

function About() {
    const [mycolor, setmyColor] = useState({
        color: "black",
        backgroundColor: "white"
    });
    
    const [btnText, setBtnText] = useState("Enable Light Mode");

    function enableLightMode() {
        // Toggle between light and dark mode
        if (mycolor.color === "black") {
            setmyColor({
                color: "white",
                backgroundColor: "black"
            });
            setBtnText("Enable Light Mode");
        } else {
            setmyColor({
                color: "black",
                backgroundColor: "white"
            });
            setBtnText("Enable Dark Mode");
        }
    }

    return (
        <>
            <div className="About-page" style={{ color: mycolor.color, backgroundColor: mycolor.backgroundColor }}>
                <h2>About</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque expedita hic architecto porro incidunt corrupti obcaecati sit, minima nostrum aspernatur repellendus fugiat tempore quia, vero doloribus iusto delectus dolorem dolores, fuga tempora recusandae animi! Quaerat culpa, possimus est tempora sint saepe beatae odit autem inventore quibusdam id ullam vero nostrum nemo deserunt! Assumenda eveniet cum provident suscipit id debitis tempore?
                </p>
            </div>
            <div>
                <button onClick={enableLightMode}>{btnText}</button>
            </div>
        </>
    );
}

export default About;

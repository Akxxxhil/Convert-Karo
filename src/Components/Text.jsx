import { useState } from "react";
import "./Text.css";
import { toast } from "react-toastify";

function Text() {
    const [text, setText] = useState("");

    function changehandler(event) {
        setText(event.target.value);
    }
    function uppercasehandler() {
        if (text == "") {
            toast.warn("Please Write Something");
        } else {
            let newtext = text.toUpperCase();
            setText(newtext);
            toast.success("Converted to Uppercase");
        }
    }
    function lowercasehandler() {
        if (text == "") {
            toast.warn("Please Write Something");
        } else {
            let newtext = text.toLowerCase();
            setText(newtext);
            toast.success("Converted to Lowercase");
        }
    }
    function Cleartexthandler() {
        let newtext = "";
        setText(newtext);
        toast.success("Text Cleared");
    }
    return (
        <>
            <div>
                <h1> Text to Likho Pahle</h1>
            </div>
            <div className="textareadiv">
                <textarea
                    value={text}
                    onChange={changehandler}
                    name=""
                    id=""
                    cols="150"
                    rows="10"
                ></textarea>
            </div>
            <div className="buttons">
                <div onClick={uppercasehandler}>Convert to Uppercase</div>
                <div onClick={lowercasehandler}>Convert to Lowercase</div>
                <div onClick={Cleartexthandler}>Clear Text</div>
            </div>
            <div className="container">
                <h2>Your Text Summary</h2>
                <p>
                    {text.split(" ").length} words and {text.length} characters
                </p>
                <p>{0.008 * text.split(" ").length} minutes taken to Read</p>
                <h2>Your Preview</h2>
                <p>{text}</p>
            </div>
        </>
    );
}
export default Text;

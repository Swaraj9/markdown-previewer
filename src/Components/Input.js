import '../Styles/Input.css';

const Input = ({input, setInput}) => {

    return (
        <div className = "Input">
            <h2 className = "window-title">Input</h2>
            <textarea className = "textarea" placeholder = "Enter Markdown Here..." value = {input} onChange = {(e) => setInput(e.target.value)}/>
        </div>
    )
}

export default Input

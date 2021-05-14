import marked from 'marked';
import { useEffect } from 'react';
import '../Styles/Preview.css';

const Preview = ({input}) => {

    useEffect(() => {
        document.getElementsByClassName("preview")[0].innerHTML = marked(input);
    })
    
    return (
        <div className = "Preview">
            <h2 className = "window-title">Preview</h2>
            <div className = "preview"></div>
        </div>     
    )
}

export default Preview

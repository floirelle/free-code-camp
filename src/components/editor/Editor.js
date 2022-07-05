import Toolbar from '../toolbar/Toolbar';
import './editor.css';

function Editor(props){
    const {text} = props;
    return (
        <div className="editor">
            <Toolbar className='editor-toolbar' name="Editor" icon="fa fa-compress" handleClick = {props.handleClick}/>
            <textarea id='editor' className='editor-textarea' rows='5' onChange={props.onChangeHandler} value={text}>

      </textarea>
        </div>
    )
}

export default Editor;

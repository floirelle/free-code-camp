import './previewer.css';
import Markdown from 'marked-react';
import Toolbar from '../toolbar/Toolbar';
import Lowlight from 'react-lowlight';
import javascript from 'highlight.js/lib/languages/javascript';

function Previewer(props) {
    Lowlight.registerLanguage('js', javascript);

    const renderer = {
        code(snippet, lang) {
            return <Lowlight key={this.elementId} language={lang} value={snippet} />;
        },
    };
    return(
        <div className='previewer'>
            <Toolbar className='preview-toolbar' name="Editor" icon="fa fa-compress" handleClick = {props.handleClick}/>
            <Markdown value={props.text} renderer={renderer}>
            </Markdown>
        </div>
    )
}

export default Previewer;

import logo from './logo.svg';
import './App.css';
import Editor from './components/editor/Editor';
import {useState} from 'react';
import Toolbar from './components/toolbar/Toolbar';
import Previewer from './components/previewer/Previewer';

function App() {
  const [text, setText] = useState(`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`);
  const onChange = (e) =>{
    setText(e.target.value)
  }
  const handleClick = (e) => {
    console.log(e);
    const classes = [
      'fa fa-compress',
      'fa fa-arrows-alt'
    ];   if(e.target.dataset.state === undefined || e.target.dataset.state === 'minimized' ){
      e.target.className = classes[1]
      e.target.dataset.state = 'maximized'
      e.target.parentNode.parentNode.className += ' maximized'
    }
    else{
      e.target.className = classes[0]
      e.target.dataset.state = 'minimized'
      e.target.parentNode.parentNode.className = e.target.parentNode.parentNode.className.replace(' maximized','')
    }
  }
  return(
      <div className="main-wrapper">
        <Editor handleClick = {handleClick} text={text} onChangeHandler = {onChange}/>
        <Previewer text={text} handleClick = {handleClick}/>
      </div>
  );
}

export default App;

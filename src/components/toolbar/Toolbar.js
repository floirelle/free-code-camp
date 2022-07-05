import './toolbar.css';
function Toolbar(props){
    return(
        <div className='toolbar'>
            <i className= "fa fa-free-code-camp"/>
            {props.name}
            <i className ={props.icon} onClick={props.handleClick} id={`${props.name.toLowerCase()}-button`}/>
        </div>
    )
}

export default Toolbar;

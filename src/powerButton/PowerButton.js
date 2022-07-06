import './powerButton.css';

const PowerButton = ({name,isPowered,handleClick}) => {
    return(
        <div className='d-flex flex-column align-items-center'>
            {name}
            <div className="form-check form-switch" role='button' >
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked={isPowered} onChange={handleClick}/>
            </div>
        </div>
    )
}

export default PowerButton;

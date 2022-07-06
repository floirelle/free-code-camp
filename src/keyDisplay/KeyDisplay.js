import './keyDisplay.css'

function KeyDisplay({description}) {

    return(
        <div className='container-fluid bg-secondary py-3 px-1'>
            <h5 className='text-light text-center' id='display'>{description || ""}</h5>
        </div>
    )
}

export default KeyDisplay;

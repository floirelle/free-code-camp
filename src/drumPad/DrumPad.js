import './drumPad.css';
import {useRef} from 'react';

const DrumPad = ({ keyTrigger, keyId, url, handleClick, idx}) => {

    const ref = useRef(null);

    return(
        <div role="button" className="drum-pad rounded-1 d-flex justify-content-center align-items-center p-3" id={keyId} onClick={(event)=> {
            handleClick(event,ref,keyId,idx)
        }}>
            <h2 className='text-center'>{keyTrigger}</h2>
            <audio src={url} id={keyTrigger} ref={ref} className='clip'></audio>
        </div>
    )
}

export default DrumPad;

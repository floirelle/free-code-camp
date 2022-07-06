import './volumeAdjuster.css'

function VolumeAdjuster({volume,handleChange}) {

    return(
        <input type='range' id='volume-range' onChange={handleChange} value={volume}/>
    )
}

export default VolumeAdjuster

import './drumMachine.css';
import DrumPad from '../drumPad/DrumPad';
import PowerButton from '../powerButton/PowerButton';
import {useCallback, useRef, useState} from 'react';
import KeyDisplay from '../keyDisplay/KeyDisplay';
import VolumeAdjuster from '../volumeAdjuster/VolumeAdjuster';

const DrumMachine = (props) =>{

    const [isPowered,setPowered] = useState(true)
    const [description, setDescription] = useState("")
    const [volume, setVolume] = useState(0.)
    const [isDrum, setMode] = useState(true)
    const lastPressed = useRef(null);
    const bankOne = [
        {
            keyCode: 81,
            keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
        },
    {
        keyCode: 87,
        keyTrigger: 'W',
        id: 'Heater-2',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
        },
    {
        keyCode: 69,
        keyTrigger: 'E',
        id: 'Heater-3',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
        },
    {
        keyCode: 65,
        keyTrigger: 'A',
        id: 'Heater-4',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
        },
    {
        keyCode: 83,
        keyTrigger: 'S',
        id: 'Clap',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
        },
    {
        keyCode: 68,
        keyTrigger: 'D',
        id: 'Open-HH',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
        },
    {
        keyCode: 90,
        keyTrigger: 'Z',
        id: '&quot;Kick-n-Hat&quot;',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
        },
    {
        keyCode: 88,
        keyTrigger: 'X',
        id: 'Kick',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
        },
    {
        keyCode: 67,
        keyTrigger: 'C',
        id: 'Closed-HH',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
        }
    ];

    const bankTwo = [
        {
            keyCode: 81,
            keyTrigger: 'Q',
            id: 'Chord-1',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
        },
        {
            keyCode: 87,
            keyTrigger: 'W',
            id: 'Chord-2',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
            },
        {
            keyCode: 69,
            keyTrigger: 'E',
            id: 'Chord-3',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
            },
        {
            keyCode: 65,
            keyTrigger: 'A',
            id: 'Shaker',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
            },
        {
            keyCode: 83,
            keyTrigger: 'S',
            id: 'Open-HH',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
            },
        {
            keyCode: 68,
            keyTrigger: 'D',
            id: 'Closed-HH',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
            },
        {
            keyCode: 90,
            keyTrigger: 'Z',
            id: 'Punchy-Kick',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
            },
        {
            keyCode: 88,
            keyTrigger: 'X',
            id: 'Side-Stick',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
            },
        {
            keyCode: 67,
            keyTrigger: 'C',
            id: 'Snare',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
            }
    ];
    const current = isDrum? bankOne : bankTwo
    const handleSwitchPower = useCallback(()=>{
        console.log("Switching..")
        if(isPowered)setDescription("")
        setPowered(!isPowered)
    },[isPowered,setPowered]);

    const handleVolumeChange = useCallback((e)=>{
        setVolume(e.target.value)
    },[setVolume]);

    const handleSwitchBank = useCallback(()=>{
        setMode(!isDrum)
        if(isPowered){
            if(lastPressed){
                const bank = isDrum ? bankTwo : bankOne
                console.log(bank,lastPressed.current,bank[lastPressed.current])
                setDescription(bank[lastPressed.current].id)
            }
        }
    },[isPowered,isDrum]);

    const handleDrumPadClick = useCallback((e,ref,description,index)=>{
        if(isPowered){
            if(ref!=null) ref.current.play()
            setDescription(description)
            lastPressed.current = index
        }
    },[isPowered]);

    const handleKeyPressed = (e) => {
        const bank = isDrum ? bankOne : bankTwo
        const index = bank.findIndex(x=>x.keyTrigger === e.key.toUpperCase())
        const item = bank[index]
        console.log(isPowered)
        if(item && isPowered){
            console.log("Playing...")
            const audio = document.getElementById(item.keyTrigger)
            audio.play()
            setDescription(item.id)
            lastPressed.current = index
        }

    }

    document.addEventListener('keydown',handleKeyPressed)

    return(
        <div id='drum-machine' className='drum-machine-container' >
            <div className="icon-container">
                <em><strong>FCC</strong> </em>
                <i className="fa fa-free-code-camp"></i>
            </div>
            <div className="row px-2">
                <div className='col-7 drum-pad-container'>
                    {
                        current.map((key,index)=>{
                        return <DrumPad key={key.id} keyCode={key.keyCode} keyTrigger={key.keyTrigger} keyId={key.id} url = {key.url} handleClick ={handleDrumPadClick} idx={index}/>
                    })}
                </div>
                <div className='col d-flex flex-column align-items-center justify-content-evenly'>
                    <PowerButton isPowered={isPowered} handleClick = {handleSwitchPower} name="Power"/>
                    <KeyDisplay description={description}/>
                    <VolumeAdjuster volume={volume} handleChange={handleVolumeChange}/>
                    <PowerButton isPowered={isDrum} handleClick = {handleSwitchBank} name="Bank"/>
                </div>
            </div>
        </div>
    )
}

export default DrumMachine;

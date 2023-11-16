import React, { useState } from 'react'
import Image from '../download.jpg'
import ReactPlayer from 'react-player'
const Body = (props) => {
    const [likes, setLikes] = useState(0) 
    function count() {
        setLikes(likes + 1);  
    }
    const [text, setText] = useState('')
    function reset() {
        setText('');
    }

    const [fruits, setFruits] = useState([
        { fruit: 'water melon' },
        { fruit: 'apple' },
        {fruit:'mango'}
    ])
    const [index, setIndex] = useState(0)  // 1
    function change() {  //0+1%3
        const newIndex = (index + 1) % fruits.length
        setIndex(newIndex)
    }

    return (
        <div>
            <div style={{ paddingTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <img src={Image} alt="images" /> <br />
                <p>likes: {likes}</p>
                {/* destructuring */}
                <button onClick={count}>Like</button>
            </div>
            <div style={{ paddingTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <label htmlFor="Name">Name : </label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                <p>output : {text}</p>
                <button onClick={props.fun}>Click me</button>
            </div>
            <div style={{ paddingTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                {/* pass down url link in url attribuite */}
                <ReactPlayer url={'https://youtu.be/G8m3nDSh9Q0'} height={200} width={400}controls />
                <div>
                    <p>i like this </p>
                </div>
                <div>
            <p>i like this {fruits[index].fruit}</p>
            <button onClick={change}>Change me</button>
        </div>
            </div>
        </div>
    )
}


export default Body
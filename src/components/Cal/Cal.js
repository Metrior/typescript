import React, {useEffect, useState} from 'react';

const Carousel = ({ delay, children }) => {

    const [current,setCurrent]=useState(null)
    const [currentId,setCurrentId]=useState(0)
    const [interval,setCurrentInterval]=useState(null)

    useEffect(()=>{
        if(!interval && !current && children){
            setCurrent(children[0])
            const newInterval = setInterval(switchElement, 5000)
            setCurrentInterval(newInterval)
        }
        return () => clearInterval(interval)
    },[interval])

    const resetInterval = () => {
        clearInterval(interval)
        const newInterval = setInterval(switchElement, delay)
        setCurrentInterval(newInterval)
    }

    const switchElement = () => {
        if(currentId===children.length-1){
            setCurrentId(0)
            setCurrent(children[0])
        } else {
            const newId = currentId+1
            const newCurrent = children[newId]
            setCurrentId(newId)
            setCurrent(newCurrent)
            console.log("swo",currentId,current )
        }
    }

    const handlePrevClick = () => {
        if(currentId===0){
            setCurrentId(children.length-1)
            setCurrent(children[children.length-1])
        } else {
            const newId = currentId-1
            setCurrentId(newId)
            setCurrent(children[newId])
        }
        resetInterval()
    }

    const handleNextClick = () => {
        if(currentId===0){
            setCurrentId(children.length+1)
            setCurrent(children[children.length+1])
        } else {
            const newId = currentId+1
            setCurrentId(newId)
            setCurrent(children[newId])
        }
        resetInterval()
    }

    return (
        <div className="carousel">
            {children && children.length && <>
                <div>
                    {Array.isArray(current) ? JSON.stringify(current) : current}
                </div>

                {children.length>=2 && <div className="buttons">
                    <button className="button-previous" onClick={()=>handlePrevClick()}>Previous</button>
                    <button className="button-next" onClick={()=>handleNextClick()}>Next</button>
                </div>}
            </>}
        </div>
    );
};

// or
//
// class Carousel extends React.Component {
//   render() {
//     return (
//       <div>
//         YOUR SOLUTION
//       </div>
//     );
//   }
// }

export default Carousel;

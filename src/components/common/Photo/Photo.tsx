import React,{useState} from 'react';
import classnames from "classnames"
import "./Photo.css"

interface Interface {
    image: object,
    handleCopy: (id: string) => any,
    handleDelete: (id: string)=>void,
}

const Photo:React.FC<Interface> = ({image,handleCopy, handleDelete}) => {

    // @ts-ignore
    const {id,url} = image

    const[flip,setFlip] = useState(false)

    return (
        <div className="photoBlock">
            <img className={classnames("photo",{"photoRtl":flip})} src={url}/>

            <div>
                <button onClick={()=>setFlip(!flip)}>
                    flip
                </button>
                <button onClick={()=>handleCopy(id)}>
                    copy
                </button>
                <button onClick={()=>handleDelete(id)}>
                    delete
                </button>
            </div>
        </div>
    );
};

export default Photo;

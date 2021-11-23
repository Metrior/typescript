import React,{useState, useEffect} from 'react';
import axios from "axios";
import VisibilitySensor from "react-visibility-sensor";
import Carousel from "../Cal"

import "./List.css"

import Photo from "../common/Photo";

interface Response {
    albumId:number,
    id:number,
    thumbNailUrl:string,
    url: string,
    title: string,
}

const List = () =>{

    const [longList,setLongList] = useState<Response[]>([])
    const [list,setList] = useState([])
    const [startPoint,setStartPoint] = useState(30)

    useEffect(()=>{
        if (longList.length===0){
            request()
        }
    })

    const request = async () => {
        const response = await axios.get<Response[]>("https://jsonplaceholder.typicode.com/photos")
        const data = response.data
        setLongList(data as Array<Response>)
        const shortList = data.slice(0, startPoint)
        // @ts-ignore
        setList(shortList)
    }

    const loadMore = (isVisible:boolean) => {
        if (isVisible){
            const newStartPoint = startPoint+30
            const newChunk = longList.slice(startPoint,newStartPoint)
            // @ts-ignore
            setList([...list,...newChunk])
            setStartPoint(newStartPoint)
        }
    }

    const handleCopy = (id:string) => {
        // @ts-ignore
        const photo = list.find(photo=>photo.id===id)
        // photo.tempId = Math.random()
        // @ts-ignore
        return setList([...list,photo])
    }

    const handleDelete = (id:string) => {
        // @ts-ignore
        const filteredList = list.filter(image=>image.id!==id)
        setList(filteredList)
    }

    return (
        <div>
            <Carousel delay={50} children={["a","b","c"]}/>
            <div className="flow">
            {list.map((photo,i)=>(
                <Photo
                    key={i}
                    image={photo}
                    handleCopy={(id:string)=>handleCopy(id)}
                    handleDelete={(id:string)=>handleDelete(id)}/>
            ))}
            </div>
            <VisibilitySensor onChange={(isVisible) => loadMore(isVisible)}>
                <div className="bottom-block" />
            </VisibilitySensor>
        </div>
    );
};

export default List;

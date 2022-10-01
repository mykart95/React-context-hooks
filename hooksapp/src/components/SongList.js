import React, { useState, useEffect } from 'react';
import {v4 as uuid} from 'uuid';
import NewSongForm from './NewSongForm';
const SongList = () => {
   const [songs, setSongs]=useState([
    {title:'almost home', id:1},
    {title:"memory gospel", id:2},
    {title:"despacito", id:3}
   ])
   const addSong=(title)=>{
    setSongs([...songs, {title, id: uuid()}])
   }
   const[age, setAge]=useState(20)
   useEffect(()=>{
    console.log('useEffect hook ran', songs);
}, [songs])
    return ( 
        <div className="song-list">
            <ul>
                {songs.map(song=>{
                    return(<li key={song.id}>{song.title}</li>)
                })}
            </ul>
            <NewSongForm addSong={addSong}/>
            <button onClick={()=>setAge(age+1)}>Add 1 age 20: {age}</button>
        </div>
     );
}
 
export default SongList;
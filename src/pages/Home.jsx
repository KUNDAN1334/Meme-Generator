import React from 'react';
import MemeCard from '../components/Card';
import { getAllMemes } from '../api/memes';

const Homepage=()=>{
    const [memes,setMemes]=React.useState([]);

    React.useEffect(()=>{
        getAllMemes().then(memes=>{
            setMemes(memes.data.memes);
        })
    },[])
    return(
        <div className='row'>
            {
                memes.map(meme=>(
                    <MemeCard key={meme.id} title={meme.name} img={meme.url} />
                ))
            }
        </div>
    )
}

export default Homepage;
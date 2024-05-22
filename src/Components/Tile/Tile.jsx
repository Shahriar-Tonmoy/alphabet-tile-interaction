import React from 'react';

const Tile = ({ alphabet,appendingString }) => {

    const {id, character} = alphabet;
    return (
        <div className='flex justify-center items-center p-10 border border-blue-300 text-2xl font-semibold bg-blue-900 hover:cursor-pointer' onClick={()=>appendingString(character, id)}>
            <h1 className='text-white'>{character}</h1>
        </div>
    );
};

export default Tile;
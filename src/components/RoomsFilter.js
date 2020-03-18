import React from 'react';
import { useContext } from 'react';
import { RoomContext } from './../context';
import { Title } from './../components/Title';

export const RoomsFilter = () => {
    const context = useContext(RoomContext);
    // console.log(context)
    const { 
        handleChange, price, capacity, minPrice, maxPrice, minSize, maxSize, pets, type, breakfast
    } = context;
    return (
        <section className='filter-container'>
            <Title title='search rooms' />
            <form className='filter-form'>
                {/* select type */}
                {/*end of select type */}
            </form>
        </section>
    )
}

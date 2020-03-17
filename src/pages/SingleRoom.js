import React, { Component } from 'react';
import defaultBcg from './../assets/images/beach3.jpg';
import { Hero } from './../components/Hero';
import { Banner } from './../components/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from './../context'; 
import StyledHero from './../components/StyledHero';

export default class SingleRoom extends Component {
    constructor(props) {
        super(props); 
        console.log('prooooppppps', props);
        this.state = {
            slug: this.props.match.params.kings,
            defaultBcg
        };
    }

    static contextType = RoomContext;
    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
        if(!room) {
            return (
                <div className='error'>
               <h3>  No such room could be found...</h3>
               <Link to='/rooms' className='btn-primary'>Back to rooms</Link>
            </div>
            );
        }
        const {name, description, capacity, size, price, extras, breakfast, pets, images} = room;

        // note, from the destructuring below, mainImg represents the first image while OtherImages 
        // represent the rest of the images apart from the first image

        const [mainImg, ...otherImages] = images;
        return (
            <>
            <StyledHero img={mainImg || this.state.defaultBcg}>
                <Banner title={`${name} room`}>
                    <Link to='/rooms' className='btn-primary'>
                    Back to rooms
                    </Link>
                </Banner>
            </StyledHero>

            <section className="single-room">
                <div className="single-room-images">
                    {otherImages.map((item, index) => {
                       return <img key={index} src={item} alt={name} />
                    })}
                </div>
                <div className='single-room-info'>
                    <article className='desc'>
                        <h3>Details</h3>
                        <p>{description}</p>
                    </article>
                </div>
            </section>
            </>
        )
    }
}

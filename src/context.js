import React, { Component } from 'react';
// import items from './data';
import Client from './Contentful';

/*Client.getEntries({
    content_type: 'kingsResort'
})
.then((response) => console.log(response.items))
.catch(console.error) */

const RoomContext = React.createContext();
const RoomConsumer = RoomContext.Consumer;

 class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type: "all",
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    }
    // retieve contentfuldata
    getContentfulData = async () => {
        try {
            let response = await Client.getEntries({
                content_type: 'kingsResort',
                order: 'fields.price'
            });
        let rooms = this.formatData(response.items);
        let featuredRooms = rooms.filter(room => room.featured === true);
        let maxPrice = Math.max(...rooms.map(item => item.price));
        let maxSize = Math.max(...rooms.map(item => item.size));
        this.setState({
            rooms, sortedRooms:rooms, featuredRooms, loading:false, price:maxPrice, maxPrice, maxSize
        })
        console.log(rooms);
        } catch(error) {
            console.log(error);
        }
    }
    componentDidMount( ) {
        this.getContentfulData();
        //.......................
        
    }

    formatData(items) {
        let tempItems = items.map((item) => {
            let id = item.sys.id;
            let images = item.fields.images.map(image =>
                image.fields.file.url
            );
            let room = {...item.fields, images, id};
            return room;
        })
        return tempItems;
    }

    getRoom = (slug) => {
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find(room => room.slug === slug);
        return room;
    }

    handleChange = (event) => {
        const target = event.target;
        // const type = event.target.type;
        const name = event.target.name;
        const value = event.type === 'checkbox' ? target.checked: target.value;
       this.setState ({
           [name]:value
       }, this.filterRooms)
    }

    filterRooms = () => {
        let { rooms, type, capacity, price, minSize, maxSize, breakfast, pets } = this.state;
        // get all rooms
        let tempRooms = [...rooms];
        // transform value
        capacity = parseInt(capacity);
        price = parseInt(price);
        // filtering by type
        if (type !== 'all') {
            tempRooms = tempRooms.filter(room => room.type === type)
        }

        // filtering by capacity
        if (capacity !== 1) {
            tempRooms = tempRooms.filter(room => room.capacity >= capacity);
        }

        // filtering by price
        tempRooms = tempRooms.filter(room => room.price <= price);


        // change state
        this.setState({
            sortedRooms:tempRooms
        })
    }

    render() {
        return (
            <RoomContext.Provider value={{...this.state, getRoom:this.getRoom, handleChange:this.handleChange}}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

export function withRoomConsumer(Component) {
    return function ConsumerWrapper(props) {
        return <RoomConsumer>
            {value => <Component {...props} context={value} />}
        </RoomConsumer>
    }
}

export {
    RoomProvider, RoomConsumer, RoomContext
}

import React from "react";
import { RoomsFilter } from "./RoomsFilter";
import { RoomsList } from "./RoomsList";
import { RoomConsumer } from "./../context";
import { Loading } from "./Loading";

export const RoomsContainer = () => {
  return (
        /* The value is the parameter name we used in the context file to store the contents in state*/
    <RoomConsumer>
      {value => {
        const {loading, sortedRooms, rooms} = value;
        if (loading) {
            return <Loading />;
        }
        return (
          <div>
            welcome to roomsContainer
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
          </div>
        );
      }}
    </RoomConsumer>
  );
};

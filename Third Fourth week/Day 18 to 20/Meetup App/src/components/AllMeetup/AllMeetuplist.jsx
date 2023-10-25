import React from "react";
import AllMeetupItem from "./AllMeetupItem";

const AllMeetuplist = (props) => {
  return (
    <>
      <div className="row">
        {props.meetups.map((item) => (
          <AllMeetupItem
          className={styling}
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </>
  );
};

export default AllMeetuplist;

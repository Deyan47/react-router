import { useEffect, useState } from "react";
import { useLoaderData, json } from "react-router-dom";
import EventsList from "../components/EventsList";

const Events = () => {
  const data = useLoaderData(); // the returned promise data from <Events /> in App.js
  const events = data.events;

  if (data.error) {
    return <p>{data.message}</p>;
  }

  //Using loader() in App.js instead of this logic!

  // const [isLoading, setIsLoading] = useState(false);
  // const [fetchedEvents, setFetchedEvents] = useState();
  // const [error, setError] = useState();

  // useEffect(() => {
  //   async function fetchEvents() {
  //     setIsLoading(true);
  //     const response = await fetch("http://localhost:8080/events");

  //     if (!response.ok) {
  //       setError("Fetching events failed.");
  //     } else {
  //       const resData = await response.json();
  //       setFetchedEvents(resData.events);
  //     }
  //     setIsLoading(false);
  //   }

  //   fetchEvents();
  // }, []);
  return (
    <>
      <EventsList events={events} />

      {/* { <div style={{ textAlign: "center" }}>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </div> }
      {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />} */}
    </>
  );
};

export default Events;

export const loader = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // First way - most basic

    // return {
    //   isError: true,
    //   message: "Could not fetch events.",
    // };

    // Second way

    // throw new Response(
    //   JSON.stringify({ message: "Could not fetch events." }, { status: 500 })
    // );

    //Third way - with json from react-router

    return json(
      { message: "Could not fetch events." },
      {
        status: 500,
      }
    );
  } else {
    // const resData = await response.json();
    // return resData.events;
    // OR //
    return response;
  }
};

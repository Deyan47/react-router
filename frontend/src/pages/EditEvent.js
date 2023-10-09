import React from "react";

import EventForm from "../components/EventForm";
import { useLoaderData, useRouteLoaderData } from "react-router-dom";

const EditEvent = () => {
  const data = useRouteLoaderData("event-detail");

  return <EventForm method="PATCH" event={data.event} />;
};

export default EditEvent;

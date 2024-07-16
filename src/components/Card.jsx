import React, { useState, useEffect } from "react";
import { fetchData, patchCall } from "./getCalls";
import LoadingCard from "./LoadingCard.jsx";
import ErrorCard from "./ErrorCard.jsx";
import CallCard from "./CallCard.jsx";

const Card = ({ archived }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    // API Call when first rendering
    getData();
  }, [archived]);

  // getData function to request the data from the API
  const getData = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchData(archived);
      setData(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  // function to archive a call
  const handleArchiveCall = async (id, is_archived) => {
    setLoading(true);
    setError(null);
    try {
      await patchCall(id, is_archived);
      // Get our data after patch request
      await getData();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  // function to archive all the calls
  const handleArchiveAllCalls = async () => {
    setLoading(true);
    setError(null);
    //first we filter all those calls that are not archived
    data.filter((call) => call.is_archived === false);
    for (let call of data) {
      try {
        await patchCall(call.id, call.is_archived);
        // Get our data after patch request
      } catch (error) {
        setError(error.message);
      } finally {
      }
    }
    await getData();
  };

  if (loading) return <LoadingCard />;
  if (error) return <ErrorCard error={error} />;

  return (
    <CallCard
      handleArchiveAllCalls={handleArchiveAllCalls}
      handleArchiveCall={handleArchiveCall}
      data={data}
      archived={archived}
    />
  );
};

export default Card;

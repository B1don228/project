import React, { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_USERS } from "../GraphQL/Queries";

const GetUsers = () => {
  const { data, error, loading } = useQuery(LOAD_USERS);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return <div>GetUsers</div>;
};

export default GetUsers;

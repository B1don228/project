import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_USERS } from "../GraphQL/Queries";

type TypeFilms = {
  director: string;
  releaseDate: string;
  speciesConnection: any;
  title: string;
  __typename: string;
};

const GetUsers = () => {
  const { data, error, loading } = useQuery(LOAD_USERS);
  const [films, setFilms] = useState<TypeFilms[] | null>(null);

  useEffect(() => {
    if (!loading) {
      setFilms(data.allFilms.films);
    }
  }, [data]);

  return (
    <div>
      {loading && <div>Loading</div>}
      {!loading && (
        <div>
          Films:
          {films?.map((item: TypeFilms) => (
            <div key={item.title}>{item.title}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GetUsers;

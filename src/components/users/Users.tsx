import axios from "axios";
import { useQuery } from "react-query";
import Spinner from "../loader/Spinner";

interface UserData {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

async function fetchData() {
  const { data } = await axios.get("https://reqres.in/api/users?page=2");
  console.log("fetch data", data);
  return data;
}
export default function Users() {
  const { data, status, isFetching } = useQuery<UserData[]>("users", fetchData);
  console.log("users data", data);
  if (status === "error") {
    return <p>Error</p>;
  }
  if (status === "loading") {
    return <Spinner />;
  }                                                                                                                                                                             

  return (
    <div className="container">
      <div className="row">
        {data &&
          data.map((user: UserData) => {
            console.log("map data", user);
            return (
              <div className="col" key={user.id}>
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={user.avatar}
                    className="card-img-top"
                    alt="avatar"
                  />
                  <div className="card-body">
                    <h6 className="card-title">
                      {user.first_name} {user.last_name}
                    </h6>
                    <p className="card-text">{user.email}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div>{isFetching ? "Fetching Data" : ""}</div>
    </div>
  );
}

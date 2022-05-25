import React from "react";
import { useQuery } from "react-query";

const MakeAdmin = () => {
  const { data: users, isLoading,refetch } = useQuery("users", () =>
    fetch("https://nameless-chamber-79166.herokuapp.com/users", {
      headers: {
        authorization: `Berer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );


  const makeAdmin = (uid) => {
      fetch(`https://nameless-chamber-79166.herokuapp.com/users/admin/${uid}`,{
          method:'PUT',
        headers:{
            authorization : `Berer ${localStorage.getItem('accessToken')}`
          }
      }).then((res) => res.json())
      .then((data) => {
          console.log(data);
          if(data.acknowledged){
              refetch()
          }
      })
  }
  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>email</th>
              <th>role</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user,i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>
                    {user?.role ? <span className="text-success font-bold text-xl"> {user?.role}</span> : <><button className="btn btn-sm btn-primary" onClick={() => makeAdmin(user?.uid)}>make admin</button></>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;

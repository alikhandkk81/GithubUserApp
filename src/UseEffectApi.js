import React, { useEffect, useState } from "react";

const UseEffectApi = () => {
  const [users, setusers] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://api.github.com/users");
    setusers(await response.json());
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <h2>List Of Github users</h2>
      <div className="container-fluid mt-5 mb-5">
        <div className="row text-center">
          {users.map((curElem) => {
            return (
              <div className="col-10 col-md-4 mt-5">
                <div className="card p-2">
                  <div className="d-flex align-items-center">
                    <div className="image">
                      <img
                        src={curElem.avatar_url}
                        className="rounded"
                        width="155"
                        alt=""
                      />
                    </div>
                    <div className="ml-3 w-100">
                      <h4 className="mb-0 mt-0 textLeft">{curElem.login}</h4>
                      <span className="textLeft">{curElem.node_id}</span>
                      <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                        <div className="d-flex flex-column">
                          <span className="articles">Articless</span>
                          <span className="number-1">85</span>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="followers">followers</span>
                          <span className="number-2">980</span>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="rating">Rating</span>
                          <span className="number-3">38</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default UseEffectApi;

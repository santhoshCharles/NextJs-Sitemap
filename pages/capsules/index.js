import Link from "next/link";
import { useEffect, useState } from "react";

const fetcher = async () =>
  await fetch("https://api.spacexdata.com/v4/capsules").then((response) =>
    response.json()
  );

const Capsules = () => {
  const [data, setData] = useState([]);

  const apiCallFun = async () => {
    if (data.length === 0) {
      let apiData = await fetcher();
      setData(apiData);
    }
  };

  useEffect(() => {
    apiCallFun();
  }, []);

  return (
    <div>
      <h1>Capsules</h1>

      {data ? (
        <ul>
          {data.map((capsule) => (
            <li key={capsule.id}>
              <Link href={`/capsules/${capsule.id}`}>
                <a>
                  {capsule.type} {capsule.serial}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Capsules;

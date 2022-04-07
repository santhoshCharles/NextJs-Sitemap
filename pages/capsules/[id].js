import { GetServerSideProps } from "next";

const Capsule = ({ capsule }) => {
  return (
    <div>
      <h1>
        {capsule.type} {capsule.serial}
      </h1>
      <h2>Status: {capsule.status}</h2>
      <p>{capsule.last_update}</p>
    </div>
  );
};

export const getServerSideProps= async ({ query }) => {
  const { id } = query;

  const response = await fetch(`https://api.spacexdata.com/v4/capsules/${id}`);
  const data = await response.json();

  return { props: { capsule: data } };
};

export default Capsule;
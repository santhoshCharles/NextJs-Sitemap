import { getServerSideSitemap } from "next-sitemap";

export const getServerSideProps = async(ctx) => {

    const responce =  await fetch("https://api.spacexdata.com/v4/capsules");
    const data = await responce.json();

    const fields = data.map( capsul => ({loc:`https://www.cap-sul.com/capsuls/${capsul.id}`}) );

    return getServerSideSitemap(ctx, fields)

}


function ServerSite () {

}

export default ServerSite
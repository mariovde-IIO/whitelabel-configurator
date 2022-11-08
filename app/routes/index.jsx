import Configurator from "../components/Configurator";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { client } from "../models/contentful.server";

export async function loader() {
  const filters = await client.getFilters();
  console.log(filters);
  return json({ filters });
}

export default function Index() {
  const { filters } = useLoaderData();

  return (
    <div>
      <Configurator filters={filters} />
    </div>
  );
}

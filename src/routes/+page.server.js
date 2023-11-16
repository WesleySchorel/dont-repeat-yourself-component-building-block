import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

import getQueryToolboard from "../lib/queries/checklist";

export async function load() {
  let query = getQueryToolboard(gql);

  return await hygraph.request(query);
}

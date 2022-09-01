// libs/client.js
import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "q3nbwmo9br",
  apiKey: process.env.API_KEY,
});

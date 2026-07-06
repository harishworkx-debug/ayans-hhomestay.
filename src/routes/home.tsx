import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "./index";

export const Route = createFileRoute("/home")({
  head: () => ({
    meta: [
      {
        title: "Best Homestay in Yullu Kanda | Ayansh Snow-View Trekker's Nest",
      },
      {
        name: "description",
        content:
          "Looking for the best homestay in Yullu Kanda? Ayansh Snow-View offers authentic wooden rooms, home-cooked meals, and serves as the perfect base camp for the Yullu Kanda Trek at 12,000 ft.",
      },
    ],
  }),
  component: HomePage,
});

import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import "./index.css";
import Root from "./Root.tsx";
import Home from "./Home.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		Component: Root,
		children: [{ index: true, Component: Home }],
	},
]);

createRoot(document.getElementById("root")!).render(
	<RouterProvider router={router} />
);

import {
	createRootRoute,
	createRoute,
	createRouter,
	HeadContent,
	Outlet,
	RouterProvider,
} from "@tanstack/react-router";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import FooterEl from "./components/Footer";
import HeaderEl from "./components/Header";
import * as TanStackQueryProvider from "./integration/tanstack-query";
import createTanStackQueryDemoRoute from "./routes/queryDemo.route";
import { metaDataDefinition } from "./utils/metaDataDefinition";

import "./styles/fonts.css";
import "./styles/style.css";

const rootRoute = createRootRoute({
	component: () => (
		<>
			<HeadContent />
			<div className="flex flex-col gap-0 min-h-screen">
				<HeaderEl />
				<main className="grow flex flex-col justify-center">
					<div className="flex flex-col justify-center">
						<Outlet />
					</div>
				</main>
				<FooterEl />
			</div>
		</>
	),
});

const indexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/",
	component: App,
	head: () =>
		metaDataDefinition({
			path: "/",
		}),
});

const routeTree = rootRoute.addChildren([
	indexRoute,
	createTanStackQueryDemoRoute(rootRoute),
]);

const TanStackQueryProviderContext = TanStackQueryProvider.getContext();
const router = createRouter({
	routeTree,
	context: {
		...TanStackQueryProviderContext,
	},
	defaultPreload: "intent",
	scrollRestoration: true,
	defaultStructuralSharing: true,
	defaultPreloadStaleTime: 0,
});

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

const rootElement = document.getElementById("root");
if (rootElement) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<StrictMode>
			<TanStackQueryProvider.Provider {...TanStackQueryProviderContext}>
				<RouterProvider router={router} />
			</TanStackQueryProvider.Provider>
		</StrictMode>,
	);
}

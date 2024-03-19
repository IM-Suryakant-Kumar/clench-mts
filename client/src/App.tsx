import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import { Layout } from "./components";
import { Home, NotFound } from "./pages";

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route element={<Layout />}>
				<Route path="/" element={<Home />} />
				<Route path="*" element={<NotFound />} />
			</Route>
		)
	);

	return <RouterProvider router={router} />;
}

export default App;

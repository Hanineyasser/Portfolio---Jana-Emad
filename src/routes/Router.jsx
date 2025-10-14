import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/common/loading/Loading";
const Home = lazy(() => import("../pages/Home"));
const ConnectHubPage = lazy(() => import("../pages/projects/ConnectHubPage"));
const GymMembershipPage = lazy(() =>
    import("../pages/projects/GymMembershipPage")
);
const Main = lazy(() => import("../layouts/Main"));


export const router = createBrowserRouter(
    [
        {
            path: `/`,
            element: (
                <Suspense fallback={<Loading />}>
                    <Main />
                </Suspense>
            ),
            children: [
                {
                    path: "/",
                    element: <Home></Home>,
                },
                {
                    path: "/projects/connect-hub",
                    element: <ConnectHubPage />,
                },
                {
                    path: "/projects/gym-membership",
                    element: <GymMembershipPage />,
                },
            ],
        },
    ]

);

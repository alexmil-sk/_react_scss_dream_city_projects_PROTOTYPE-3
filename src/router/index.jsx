import { createBrowserRouter } from "react-router-dom";
import LayoutSk from "../components/sk/LayoutSk/LayoutSk.jsx";
import HomePageSk from "/src/pages/sk/HomePageSk/HomePageSk.jsx";

//import { Layout, HomePage, ObjectPage } from "./router-ru.jsx";

import IntroPage from "/src/pages/IntroPage/IntroPage.jsx";

import Layout from "../components/ru/Layout/Layout.jsx";
import HomePage from "/src/pages/ru/HomePage/HomePage.jsx";
import ObjectPage from "/src/pages/ru/ObjectPage/ObjectPage.jsx";
import NotFoundPage from "/src/pages/ru/NotFoundPage/NotFoundPage.jsx";
import ContactsPage from "/src/pages/ru/ContactsPage/ContactsPage.jsx";
import PostsPage, { loaderPosts } from "/src/pages/ru/PostsPage/PostsPage.jsx";
import PostItemPage, { loaderPostItem } from "/src/pages/ru/PostItemPage/PostItemPage.jsx";
import PostItemEditPage, { loaderEditPost, editPostAction } from "/src/pages/ru/PostItemEditPage/PostItemEditPage.jsx";
import CreatePostPage, { createPostAction } from "/src/pages/ru/CreatePostPage/CreatePostPage.jsx";
import OurTeam from "/src/pages/ru/OurTeam/OurTeam.jsx";
import OurFotos from "/src/pages/ru/OurFotos/OurFotos.jsx";
import Menu from "/src/pages/ru/Menu/Menu.jsx";
import MenuSticker from "/src/pages/ru/MenuSticker/MenuSticker.jsx";
import SortPage from "/src/pages/ru/SortPage/SortPage.jsx";
import TodosPage from "/src/pages/ru/TodosPage/TodosPage.jsx";

import RequireAuth from "/src/hoc/RequireAuth.jsx";
import AuthProvider from "/src/hoc/AuthProvider.jsx";
import ErrorBoundary from "../UI/ErrorBoundary/ErrorBoundary.jsx";


const router = createBrowserRouter([
	{
		path: "/",
		element: <IntroPage />
	},
	{
		path: "/ru",
		element: <AuthProvider><Layout /></AuthProvider>,
		children: [
			{
				path: "home",
				element: <HomePage />,
			},
			{
				path: "objects",
				element: <ObjectPage />,
			},
			{
				path: "contacts",
				element: <ContactsPage />,
				children: [
					{
						path: "fotos",
						element: <OurFotos />
					},
					{
						path: "team",
						element: <OurTeam />
					}
				]
			},
			{
				path: "posts",
				loader: loaderPosts,
				errorElement: <ErrorBoundary />,
				element: <PostsPage />
			},
			{
				path: "posts/:id",
				element: <PostItemPage />,
				loader: loaderPostItem,
				errorElement: <ErrorBoundary />,

			},
			{
				path: "posts/:id/edit",
				element: <RequireAuth><PostItemEditPage /></RequireAuth>,
				loader: loaderEditPost,
				action: editPostAction,
				errorElement: <ErrorBoundary />,
			},
			{
				path: "posts/new",
				element: <RequireAuth><CreatePostPage /></RequireAuth>,
				action: createPostAction,
				errorElement: <ErrorBoundary />,
			},
			{
				path: "sort",
				element: <SortPage />
			},
			{
				path: "menu",
				element: <Menu />
			},
			{
				path: "menusticker",
				element: <MenuSticker />
			},
			{
				path: "todos",
				element: <TodosPage />
			},
			{
				path: "*",
				element: <NotFoundPage />
			}
		]
	},
	{
		path: "/sk",
		element: <AuthProvider><LayoutSk /></AuthProvider>,
		children: [
			{
				path: "home",
				element: <HomePageSk />,
			},
		]
	}
]);





export default router;

import { createBrowserRouter } from "react-router-dom";
import LayoutSk from "../components/sk/LayoutSk/LayoutSk.jsx";
import HomePageSk from "/src/pages/sk/HomePageSk/HomePageSk.jsx";

import IntroPage from "/src/pages/IntroPage/IntroPage.jsx";

import {
	Layout,
	HomePage,
	ObjectPage,
	NotFoundPage,
	ContactsPageRu,
	PostsPage,
	PostItemPage,
	PostItemEditPage,
	CreatePostPage,
	OurTeam,
	OurFotos,
	Menu,
	MenuSticker,
	SortPage,
	TodosPage
} from "./router-ru.jsx";


import { loaderPosts } from "/src/pages/ru/PostsPage/PostsPage.jsx";
import { loaderPostItem } from "/src/pages/ru/PostItemPage/PostItemPage.jsx";
import { loaderEditPost, editPostAction } from "/src/pages/ru/PostItemEditPage/PostItemEditPage.jsx";
import { createPostAction } from "/src/pages/ru/CreatePostPage/CreatePostPage.jsx";

import ErrorBoundary from "../UI/ErrorBoundary/ErrorBoundary.jsx";


const router = createBrowserRouter([
	{
		path: "/",
		element: <IntroPage />
	},
	{
		path: "/ru",
		element: <Layout />,
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
				element: <ContactsPageRu />,
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
				element: <PostItemEditPage />,
				loader: loaderEditPost,
				action: editPostAction,
				errorElement: <ErrorBoundary />,
			},
			{
				path: "posts/new",
				element: <CreatePostPage />,
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
		element: <LayoutSk />,
		children: [
			{
				path: "home",
				element: <HomePageSk />,
			},
		]
	}
]);





export default router;

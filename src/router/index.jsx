import { createBrowserRouter } from "react-router-dom";
import IntroPage from "/src/pages/IntroPage/IntroPage.jsx";

import {
	Layout,
	HomePageRu,
	ObjectPage,
	NotFoundPage,
	ContactsPageRu,
	PostsPage,
	PostItemPage,
	PostItemEditPage,
	CreatePostPageRu,
	OurTeam,
	OurFotos,
	Menu,
	MenuSticker,
	SortPage,
	TodosPage
} from "./router-ru.jsx";

import {
	LayoutSk,
	HomePageSk
} from "./router-sk.jsx";


import { loaderPosts } from "/src/pages/ru/PostsPage/PostsPage.jsx";
import { loaderPostItem } from "/src/pages/ru/PostItemPage/PostItemPage.jsx";
import { loaderEditPost, editPostAction } from "/src/pages/ru/PostItemEditPage/PostItemEditPage.jsx";
import { createPostAction } from "/src/pages/ru/CreatePostPageRu/CreatePostPageRu.jsx";

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
				element: <HomePageRu />,
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
				element: <CreatePostPageRu />,
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

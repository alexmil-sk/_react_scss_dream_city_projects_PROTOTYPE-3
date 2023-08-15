import "./CreatePostPage.scss";
import NewPost from "/src/components/NewPost/NewPost.jsx";
import { redirect, useNavigation, Link } from "react-router-dom";


function CreatePostPage() {

	const navigation = useNavigation();

	return (
		<div className="create-post__wrapper">
			<div className="create-post__container">
				<h1>Create Post Page</h1>
				<NewPost
					submitting={navigation.state === 'submitting'}
				/>
				<div className="block__btn">
					<Link to="/posts"><button name="posts-list">To List of Posts</button></Link>
				</div>
			</div>
		</div>
	)
}

async function createPost({ title, body, userId }) {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ title, body, userId })
	})

	const newPost = await res.json();

	return newPost;
}


export const createPostAction = async ({ request }) => {
	const formData = await request.formData();
	const newPost = {
		title: formData.get('title'),
		body: formData.get('body'),
		userId: formData.get('userId')
	};
	const post = await createPost(newPost);

	return redirect("/posts" + post.id);
}

export default CreatePostPage;
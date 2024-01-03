import Input from "./Input";

import { useForm } from 'react-hook-form';
import { server_calls } from "../api/server";
import { useDispatch, useStore } from "react-redux";
import { chooseISBN, chooseAuthor, chooseTitle, choosePage_Length, chooseCover } from "../redux/slices/RootSlice";

interface BookRegProps {
	id?: string[];
	onClose: () => void;
}

const BookRegForm = ( props:BookRegProps) => {
	const { register, handleSubmit } = useForm({})
	const dispatch = useDispatch();
	const store = useStore();

	const onSubmit = (data: any, event: any) => {
		console.log(`ID: ${typeof props.id}`);
		console.log(props.id);
		console.log(data);
		if (props.id && props.id.length > 0) {
			server_calls.update(props.id[0], data)
			console.log(`Updated: ${ data.isbn } ${ props.id }`)
			setTimeout(() => {window.location.reload()}, 500)
			event.target.reset()
		} else {
			dispatch(chooseISBN(data.isbn));
			dispatch(chooseAuthor(data.author));
			dispatch(chooseTitle(data.title));
			dispatch(choosePage_Length(data.page_length));
			dispatch(chooseCover(data.cover));

			server_calls.create(store.getState());
			setTimeout(() => {window.location.reload()}, 500);
			event.target.reset();

			props.onClose();
		}
	}

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<label htmlFor="isbn">ISBN</label>
					<Input {...register('isbn')} name='isbn' placeholder="ISBN" />
				</div>
				<div>
					<label htmlFor="author">Author</label>
					<Input {...register('author')} name='author' placeholder="Author" />
				</div>
				<div>
					<label htmlFor="title">Title</label>
					<Input {...register('title')} name='title' placeholder="Title" />
				</div>
				<div>
					<label htmlFor="page_length">Page Length</label>
					<Input {...register('page_length')} name='page_length' placeholder="Page Length" />
				</div>
				<div>
					<label htmlFor="cover">Cover</label>
					<Input {...register('cover')} name='cover' placeholder="Cover" />
				</div>
				<div className="flex p-1">
					<button className="flex justify-start m-3 bg-[#C9CBA3] text-[#723D46] p-2 rounded 
						hover:bg-[#472D30] hover:text-[#E26D5C]"
					>
						Submit
					</button>
				</div>
			</form>
    </div>
  )
}

export default BookRegForm

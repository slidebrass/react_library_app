import { useState } from 'react';
import Modal from "./Modal";
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';

const columns: GridColDef[] = [
	{ field: 'isbn', headerName: "ISBN", width: 90, flex: 1 },
	{ field: 'author', headerName: 'Author', flex: 1 },
	{ field: 'title', headerName: 'Title', flex: 1 },
	{ field: 'page_length', headerName: 'Page Length', flex: 1 },
	{ field: 'cover', headerName: 'Cover', flex: 1 }
]

function DataTable() {
	const [ open, setOpen ] = useState(false);
	const { bookData, getData } = useGetData();
	const [ selectionModel, setSelectionModel ] = useState<string[]>([])

	const handleOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	const deleteData = () => {
		server_calls.delete(selectionModel[0])
		getData();
		console.log(`Selection model: ${selectionModel}`)
		setTimeout( () => {window.location.reload() }, 500)
	}

  return (
    <>
			<Modal
				open={open}
				onClose={handleClose}
			/>
			<div className="flex flex-row">
				<div>
					<button className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white"
					onClick={() => handleOpen()}
					>
						Create New Book Record
					</button>
				</div>
				<button onClick={handleOpen} className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover: text-white">
					Update Book Record
				</button>
				<button onClick={deleteData} className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover: text-white">
					Delete Book Record
				</button>
			</div>
			<div className= { open ? "hidden" : "Continaer mx-10 my-5 flex flex-col"}
				style={{ height: 400, width: '100%'}}
			>
				<h2 className="p-3 text-black my-2 rounded">My Books</h2>
				<DataGrid
					rows={bookData}
					columns={columns}
					checkboxSelection={true}
						onSelectionModelChange={ (item:any) => {
							setSelectionModel(item)
						}}
					componentsProps={{
						pagination: {
							rowsPerPageOptions: [7]
						}
					}}
				/>
			</div>
		</>
  )
}

export default DataTable

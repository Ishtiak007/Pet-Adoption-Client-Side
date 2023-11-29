import { Link } from "react-router-dom";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import usePetListingEmail from "../../Hooks/usePetListingEmail";
// import {
//     flexRender,
//     getCoreRowModel,
//     getFilteredRowModel,
//     getPaginationRowModel,
//     getSortedRowModel,
//     useReactTable,
// } from '@tanstack/react-table'
// import { useState } from 'react'


const MyAddedPets = () => {
    // const [sorting, setSorting] = useState([])
    // const [filtering, setFiltering] = useState('')
    // const table = useReactTable({

    //     getCoreRowModel: getCoreRowModel(),
    //     getPaginationRowModel: getPaginationRowModel(),
    //     getSortedRowModel: getSortedRowModel(),
    //     getFilteredRowModel: getFilteredRowModel(),
    //     state: {
    //         sorting: sorting,
    //         globalFilter: filtering,
    //     },
    //     onSortingChange: setSorting,
    //     onGlobalFilterChange: setFiltering,
    // })
    const [petListing, refetch] = usePetListingEmail();
    const axiosSecure = useAxiosSecure();
    // const axiosPublic = useAxiosPublic();


    const handleDeletePet = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/petListing/${item._id}`);
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `Your Added ${item.name}, ${item.category} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        });
    }
    return (
        <div>


            <SectionTitle heading={'Your Pet Listing'} subHeading={'Your All Pet Listing information is here'}></SectionTitle>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    Index ({petListing.length})
                                </th>
                                <th>Image</th>
                                <th>Pet Name</th>
                                <th>Category</th>
                                <th>Age (Month)</th>
                                <th>Adopted Or not</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                petListing.map((item, index) => <tr key={item._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.petName}
                                    </td>
                                    <td>{item.category}</td>
                                    <td>{item.petAge} Month</td>
                                    <td><button className="btn">{item.adopted}</button></td>
                                    <td>
                                        <Link to={`/dashboard/updatePetUser/${item._id}`}>
                                            <button className="btn"><FaEdit className="text-sky-600"></FaEdit></button>
                                        </Link>
                                    </td>
                                    <td><button onClick={() => handleDeletePet(item)} className="btn"><FaTrash className="text-red-600"></FaTrash></button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>



            {/* <div className='w3-container'>
                <input
                    type='text'
                    value={filtering}
                    onChange={e => setFiltering(e.target.value)}
                />
                <table className='w3-table-all'>
                    <thead>
                        {table.getHeaderGroups().map(headerGroup => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map(header => (
                                    <th
                                        key={header.id}
                                        onClick={header.column.getToggleSortingHandler()}
                                    >
                                        {header.isPlaceholder ? null : (
                                            <div>
                                                {flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                                {
                                                    { asc: '🔼', desc: '🔽' }[
                                                    header.column.getIsSorted() ?? null
                                                    ]
                                                }
                                            </div>
                                        )}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>

                    <tbody>
                        {table.getRowModel().rows.map(row => (
                            <tr key={row.id}>
                                {row.getVisibleCells().map(cell => (
                                    <td key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div>
                    <button onClick={() => table.setPageIndex(0)}>First page</button>
                    <button
                        disabled={!table.getCanPreviousPage()}
                        onClick={() => table.previousPage()}
                    >
                        Previous page
                    </button>
                    <button
                        disabled={!table.getCanNextPage()}
                        onClick={() => table.nextPage()}
                    >
                        Next page
                    </button>
                    <button onClick={() => table.setPageIndex(table.getPageCount() - 1)}>
                        Last page
                    </button>
                </div>
            </div> */}
        </div>
    );
};

export default MyAddedPets;
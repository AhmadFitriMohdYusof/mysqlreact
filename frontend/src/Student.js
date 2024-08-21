import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Student() {
    const [student, setStudent] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/")
            .then(res => setStudent(res.data))
            .catch(err => console.log(err));
    }, []);

    const handledelete = async (id) => {
        try {
            await axios.delete('http://localhost:4000/student4/' + id);
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <Link to={"/create"} className='btn btn-success mb-3'>Add</Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Marks</th>
                            <th>Grade</th>
                            <th>City</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {student.map((data, i) => (
                            <tr key={i}>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.marks}</td>
                                <td>{data.grade}</td>
                                <td>{data.city}</td>
                                <td>
                                    <Link to={`update/${data.id}`} className='btn btn-warning'>
                                        Update
                                    </Link>
                                    <button
                                        className='btn btn-danger ms-2'
                                        onClick={() => handledelete(data.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Student;

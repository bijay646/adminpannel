import React, { useEffect, useState } from 'react';
import { Table, Pagination, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import api from "../api/user";
import { getUsers } from '../redux/actions/userActions';

const columns = [
  {
    title: 'First Name',
    dataIndex: 'firstName',
    key: 'firstName',
  },
  {
    title: 'Last Name',
    dataIndex: 'lastName',
    key: 'lastName',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'isActive',
    dataIndex: 'isActive',
    key: 'isActive',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <Button type="primary" style={{ marginRight: '10px', backgroundColor: "orange" }} onClick={() => handleUpdate(record)}>Update Active Status</Button>
      </span>
    ),
  },
];

const handleUpdate = async (record) => {
  console.log(record)
  const newItem = {
    id: record.id,
    firstName: record.firstName,
    lastName: record.lastName,
    email: record.email,
    phone: record.phone,
    password: record.password,
    isActive: record.isActive === "active" ? "inactive" : "active",
    role: record.role
  }

  await api.put('users/' + record.id, newItem)
}

const AdminDashboard = () => {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers())
  }, []);

  const users = useSelector((state) => state.users.users);

  const userData = users && users.filter(item => item.role !== "admin")

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const addUser = () => {
    navigate("/useradd")
  }

  const paginatedData = userData && userData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const adminData = users && users.filter(item => item.role === "admin")[0]

  return (
    <div style={{ padding: "3rem", width: "70%", margin: "3rem auto" }}>
      <div style={{color:"green",fontWeight:"bold"}}>
        {
          <p>Name: {adminData && `${adminData.firstName}  ${adminData.lastName}`}</p>
        }
        {
          <p>Email: {adminData && adminData.email}</p>
        }
        {
          <p>Phone: {adminData && adminData.phone}</p>
        }

      </div>
      <Button type="primary" style={{ marginBottom: "2rem" }} onClick={addUser}>All User</Button>
      {
        <p>Active Users: {userData && userData.filter(item => item.isActive === "active").length}</p>
      }
      {
        <p>Active Users: {userData && userData.filter(item => item.isActive === "inactive").length}</p>
      }
      <Table dataSource={paginatedData} columns={columns} rowKey={(record) => record.id} pagination={false} />
      <Pagination
        total={userData && userData.length}
        pageSize={itemsPerPage}
        current={currentPage}
        onChange={handlePageChange}
        style={{ marginTop: '1.3rem', textAlign: "center" }}
      />
    </div>
  );
}

export default AdminDashboard;

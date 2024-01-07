"use client"
import React from 'react';
import { Table, Space } from 'antd';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import customAxiosInstance from '@/utils/axiosClient';

const fetchUsers = async () => {
  const { data } = await customAxiosInstance.get('/users'); // Update the endpoint based on your API
  return data;
};

interface Data {
  [key: string]: any;
}

interface Column {
  title: string;
  dataIndex: string;
  key: string;
  render: (text: string, record: any) => React.ReactNode;
}

const generateColumns = (data: Data, excludedKeys: string[] = []): Column[] => {
  const columns: Column[] = Object.keys(data[0])
    .filter((key) => !excludedKeys.includes(key))
    .map((key) => ({
      title: key.charAt(0).toUpperCase() + key.slice(1),
      dataIndex: key,
      key: key,
      render: (text, record) => {
        // Optionally, you can customize the rendering based on the key
        if (key === 'role') {
          return (
            <Space size="middle">
              <span>{record.role.name}</span>
            </Space>
          )
        }
        if (key === 'status') {
          return (
            <Space size="middle">
              <span>{record.status.name}</span>
            </Space>
          )
        }
        return text;
      },
    }));

  // Manually add the "Action" column
  columns.push({
    title: 'Action',
    dataIndex: 'action', // Adding the missing property
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  });

  return columns;
};
//   const { data: users, isLoading, isError } = useQuery('users', fetchUsers);
const UsersTable: React.FC = () => {
  const { isPending, isError, data: users, error } = useQuery({ queryKey: ['users'], queryFn: fetchUsers, staleTime: 1000 * 60 * 60 })
  const { data } = users || {};
  console.log(data);

  if (!data) {
    // If users?.data is not defined, return null or any other fallback UI
    return null;
  }

  const excludedKeys: string[] = ['id', 'socialId', 'photo', 'deletedAt', 'updatedAt', '__entity']; // Add keys you want to exclude
  const columns: Column[] = generateColumns(data, excludedKeys);

  if (isPending) return <p>Loading...</p>;
  if (isError) return <p>Error fetching data</p>;

  return <Table dataSource={users?.data} columns={columns} />;
};

export default UsersTable;

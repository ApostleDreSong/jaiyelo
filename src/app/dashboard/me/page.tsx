"use client"
import React from 'react';
import { Table, Space, Descriptions, Avatar, Tag, Card, Divider } from 'antd';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import customAxiosInstance from '@/utils/axiosClient';
import Meta from 'antd/es/card/Meta';

const fetchUsers = async () => {
    const { data } = await customAxiosInstance.get('/auth/me'); // Update the endpoint based on your API
    return data;
};

//   const { data: users, isLoading, isError } = useQuery('users', fetchUsers);
const UsersTable: React.FC = () => {
    const { isPending, isError, data: user, error } = useQuery({ queryKey: ['me'], queryFn: fetchUsers, staleTime: 1000 * 60 * 60 })
    console.log(user);

    if (!user) {
        // If users?.data is not defined, return null or any other fallback UI
        return null;
    }


    if (isPending) return <p>Loading...</p>;
    if (isError) return <p>Error fetching data</p>;

    return (
        <Card className="w-full max-w-sm mx-auto" cover={<img alt="user cover" src={user.photo || '/default-avatar.jpg'} />}>
        <Meta
          avatar={<Avatar src={user.photo || '/default-avatar.jpg'} />}
          title={`${user.firstName} ${user.lastName}`}
          description={user.email}
        />
        <Divider />
        <div className="mb-4">
          <h4 className="text-lg font-semibold">Role:</h4>
          <Tag color="blue">{user.role.name}</Tag>
        </div>
        <div className="mb-4">
          <h4 className="text-lg font-semibold">Status:</h4>
          <Tag color={user.status.name === 'Active' ? 'green' : 'red'}>{user.status.name}</Tag>
        </div>
        <Divider />
        <div>
          <h4 className="text-lg font-semibold">Permissions:</h4>
          <ul className="list-disc pl-6">
            {user.role.permissions.map((permission: { id: React.Key | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }) => (
              <li key={permission.id}>{permission.name}</li>
            ))}
          </ul>
        </div>
      </Card>
    )
};

export default UsersTable;

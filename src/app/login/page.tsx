"use client"
// Import zod and the useZodResolver function
import { zodResolver } from '@hookform/resolvers/zod';
// Rest of the imports and component definition
import { useForm, SubmitHandler } from 'react-hook-form';
import axios, { AxiosError } from 'axios';
import { loginSchema } from '@/zodSchema/login';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import openNotification from '@/utils/notification';
import { Spin } from 'antd';
import { saveToSessionStorage } from '@/utils/sessionStorage';
import customAxiosInstance from '@/utils/axiosClient';


interface FormData {
  email: string;
  password: string;
}

const Page: React.FC = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
  });

  const queryClient = useQueryClient();

  const loginUser = useMutation({
    mutationKey: ['user'],
    mutationFn: async (formData: FormData) => {
      // const result = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/email/login`, formData);
      const result = await axios.post(`/auth/email/login`, formData);
      return result;
    },
    onSuccess: (response) => {
      const { data } = response;
      if (data && 'token' in data) {
        // const { token } = data
        // queryClient.setQueryData(['user'], data);
        saveToSessionStorage('user', data);
        openNotification('success', { message: 'Success' })
        window.location.href = '/dashboard';
      }
    },
    onError: (error: AxiosError) => {
      const [firstKey, firstValue] = Object.entries((error?.response?.data as any)?.message)[0] || [];
      openNotification('error', { message: firstValue as string || 'an error occured' })
    },
  })

  const onSubmit: SubmitHandler<FormData> = (formData) => {
    loginUser.mutate(formData);
  };

  return (
    <Spin spinning={loginUser.status === 'pending'}>
      <form className="max-w-sm mx-auto mt-4" onSubmit={handleSubmit(onSubmit)}>
        {/* Email input */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            {...register('email')}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

        {/* Password input */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            {...register('password')}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
          />
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          disabled={loginUser.status === 'pending'}
        >
          {loginUser.status === 'pending' ? 'Logging in...' : 'Log In'}
        </button>
      </form>
    </Spin>
  );
};

export default Page;

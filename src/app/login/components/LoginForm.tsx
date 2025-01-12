'use client';

import { cn } from '@/utils/functions';
import { Button, Form, Input, message } from 'antd';
import { type Rule } from 'antd/es/form';
import { useRouter } from 'next/navigation';
import { LabelHTMLAttributes, useState } from 'react';
import { BiLoaderAlt } from 'react-icons/bi';

const validationRules: { [key: string]: Rule[] } = {
  email: [{ required: true, type: 'email', message: 'Email is required' }],
  password: [
    {
      required: true,
      min: 6,
      message: 'Password must be at least 6 characters',
    },
  ],
};

const Label = ({
  children,
  className,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement>) => {
  return (
    <label
      className={cn('mb-1 block text-xs uppercase text-gray-500', className)}
      {...props}
    >
      {children}
    </label>
  );
};

export const LoginForm = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const [messageApi, contextHolder] = message.useMessage();
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (res.status === 401) {
        messageApi.error('Invalid credentials');
      }

      if (res.status === 200) {
        try {
          const data = await res.json();
          localStorage.setItem('user', JSON.stringify(data));
          setTimeout(() => {
            router.replace('/dashboard');
          }, 1000);
          const firstName = data.name.split(' ')[0];
          messageApi.success(`Welcome ${firstName}`);
        } catch (error) {
          messageApi.error('Something went wrong');
        }
      }
    } catch (error) {
      messageApi.error('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {contextHolder}
      <Form
        className="!mt-6 flex flex-col"
        validateTrigger="onSubmit"
        onFinish={handleLogin}
      >
        <>
          <Label htmlFor="email">Email</Label>
          <Form.Item name="email" rules={validationRules.email}>
            <Input
              id="email"
              name="email"
              type="text"
              className="!text-gray-500"
              value={credentials.email}
              onChange={handleInputChange}
            />
          </Form.Item>
        </>

        <>
          <Label htmlFor="password">Password</Label>
          <Form.Item
            name="password"
            id="password"
            rules={validationRules.password}
          >
            <Input.Password
              name="password"
              className="!text-gray-500"
              value={credentials.password}
              onChange={handleInputChange}
            />
          </Form.Item>
        </>

        <Form.Item className="!mb-0">
          <Button type="primary" className="w-full" htmlType="submit">
            {loading && (
              <BiLoaderAlt className="h-4 w-4 animate-spin text-white" />
            )}
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

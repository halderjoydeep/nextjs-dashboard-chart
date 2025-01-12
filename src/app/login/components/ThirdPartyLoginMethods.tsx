'use client';

import { Button } from 'antd';
import { FaTwitter } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const icons = {
  google: <FcGoogle className="h-5 w-5" />,
  twitter: <FaTwitter className="h-5 w-5" fill="#1DA1F2" />,
};

interface ThirdPartyButtonProps {
  provider: keyof typeof icons;
}

const ThirdPartyLoginButton = ({ provider }: ThirdPartyButtonProps) => {
  return (
    <Button className="!text-xs !font-semibold">
      {icons[provider]}
      Sign In with{provider.charAt(0).toUpperCase() + provider.slice(1)}
    </Button>
  );
};

export const ThirdPartyLoginMethods = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      <ThirdPartyLoginButton provider="google" />
      <ThirdPartyLoginButton provider="twitter" />
    </div>
  );
};

import logo from '@/assets/logo.svg';
import { Card } from '@/components';
import Image from 'next/image';
import { LoginForm, SignUpCTA, ThirdPartyLoginMethods } from './components';

const LoginPage = () => {
  return (
    <main className="flex min-h-screen w-full items-center justify-center">
      <Card className="w-96 rounded-xl bg-white px-8 py-12 shadow-sm">
        <div className="flex flex-col items-center text-center">
          <Image
            src={logo}
            alt="Logo"
            width={60}
            height={60}
            className="mb-4"
          />
          <h1 className="mb-1 text-lg font-bold">Sign In</h1>
          <p className="text-xs font-medium tracking-tight text-gray-400">
            Empowering E-commerce with Insights <br /> That Drive Success.
          </p>
        </div>

        <LoginForm />
        <ThirdPartyLoginMethods />
        <SignUpCTA />
      </Card>
    </main>
  );
};

export default LoginPage;

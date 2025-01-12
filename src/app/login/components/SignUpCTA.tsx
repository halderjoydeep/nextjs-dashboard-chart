import Link from 'next/link';

export const SignUpCTA = () => {
  return (
    <p className="mt-4 text-center text-xs tracking-tight text-gray-400">
      Already have an Account?{' '}
      <Link href="/sign-up" className="ml-2 font-bold text-primary">
        Sign Up
      </Link>
    </p>
  );
};

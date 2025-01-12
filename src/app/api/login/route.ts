import { DUMMY_USER } from '@/utils/constants';

export async function POST(request: Request) {
  const { email, password } = await request.json();

  if (email === DUMMY_USER.email && password === DUMMY_USER.password) {
    return new Response(
      JSON.stringify({
        name: DUMMY_USER.name,
        email: DUMMY_USER.email,
      })
    );
  } else {
    return new Response(JSON.stringify({ message: 'Invalid credentials' }), {
      status: 401,
    });
  }
}

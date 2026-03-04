
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
const About = async () => {
    const cookieStore = await cookies();
    if(!cookieStore.get('sid'))  redirect('/login');
  return (
    <div>
      About page
    </div>
  )
}

export default About

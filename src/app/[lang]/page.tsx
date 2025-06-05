import { NextPage } from 'next';
import { getDictionary } from './dictionaries';
import Main from '@/components/Main';

const ModernNailsLanding: NextPage<{
  params: Promise<{ lang: 'en' | 'es' | 'nl' }>;
}> = async ({ params }) => {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return <Main dict={dict} />;
};

export default ModernNailsLanding;

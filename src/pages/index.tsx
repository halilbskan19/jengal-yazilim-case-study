import { GetServerSideProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { lazy, Suspense } from 'react';

const ProductList = lazy(() => import('@/components/ProductList'));

export default function Home() {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>{t("home_title")}</title>
        <meta name="description" content={t("home_description")} />
      </Head>
      <main className="min-h-screen bg-gray-100">
        <h1 className="text-2xl font-bold text-center py-6">{t("product_list")}</h1>
        <Suspense fallback={<div className="text-center">{t("loading")}</div>}>
          <ProductList />
        </Suspense>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "tr", ["common"])),
    },
  };
};
"use client"

import Button from "@/components/utils/Button";
import { useRouter } from 'next/navigation'

const ErrorPage = () => {

  const router = useRouter()


  return (
    <div className="flex flex-col justify-center items-center h-full max-w-sm mx-auto">
      <h1 className="text-8xl font-bold">OPPS!</h1>
      <h2 className="font-bold text-2xl my-8">Page not found</h2>
      <p className="text-sm text-gray-600 mb-8">
        Sorry, we couldn't find the page you where looking for. We suggest that
        you return to home page.
      </p>
      <Button title="GO TO HOMEPAGE" onClick={() => router.push('/')} />
    </div>
  );
};
export default ErrorPage;

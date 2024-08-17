import Image from "next/image";
import Dashboard from './Dashboard/page.js'
import Form from './Form/page.jsx'
export default function Home() {
  return (
    <>
      <div className="w-screen h-screen bg-red-400"></div>
      <Dashboard/>
      <Form/>
    </>
  );
}

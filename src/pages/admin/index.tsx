import Head from "next/head";
import AdminLayout from "../../components/adminRoutes/adminLayout";
import DateTimeSelectorForm from "../../components/adminRoutes/adminDashboard/dateTimeSelectorForm";
import ResultUploadForm from "../../components/adminRoutes/adminDashboard/resultUploadForm";


export default function AdminDashboard() {

  return (
    <AdminLayout>
      <Head>
        <title>Admin Dashboard</title>
      </Head>
      <div className="container mx-auto flex h-[90vh] flex-col items-center justify-evenly py-8 font-sans">
        <div className="max-w-screen-xs prose flex w-full flex-col items-center justify-evenly gap-5 rounded-2xl border-2 p-5 duration-500">

          <DateTimeSelectorForm/>

          <div className="w-full flex-grow">
             <ResultUploadForm />
          </div>
          
        </div>
      </div>
    </AdminLayout>
  );
}
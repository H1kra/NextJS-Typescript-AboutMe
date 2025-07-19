import NavBar from "@/components/NavBar/navbar";

export default function Page({params}: {params: Promise<{userid: string}>}) {

    const {userid} = await params;

  return (
    <div>
        <NavBar/>
    </div>
  );
}

import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="flex">
          {/* LEFT */}
          <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] sticky top-0">
            <Link className="flex items-center justify-center lg:justify-start p-4 gap-2" href={'/'}>
            <Image src='/logo.png' alt="logo" width={32} height={32}/>
            <span className="hidden lg:block">My School</span>
            </Link>
            <Menu/>
            </div>
          {/* RIGH */}
          <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#f7f8fa] overflow-scroll">
            <Navbar/>
            {children}
          </div>
        </div>
    );
  }
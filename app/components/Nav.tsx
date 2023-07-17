import Link from "next/link";

export default function Nav() {
    return (
        <nav className="text-4xl p-10 flex justify-center bg-stone-900  ">
            <Link href={"/"}>
                Quiz <span className="text-orange-500">Master</span>
            </Link>
        </nav>
    );
}

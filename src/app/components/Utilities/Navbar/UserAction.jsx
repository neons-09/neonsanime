import Link from "next/link";
import { authUserSession } from "@/libs/auth-libs";

export const UserAction = async () => {
  const user = await authUserSession();
  const actionLabel = user ? "Sign Out" : "Sign IN";
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";
  return (
    <div className="flex justify-between gap-2 text-xl ">
      {user ? (
        <Link href="/users/dashboard" className="py-1">
          DashBoard
        </Link>
      ) : null}
      <Link
        href={actionURL}
        className="bg-black text-emerald-400	py-1 px-2 inline-block"
      >
        {actionLabel}
      </Link>
    </div>
  );
};

export default UserAction;

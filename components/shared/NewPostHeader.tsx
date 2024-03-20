import Link from "next/link";
import Image from "next/image";
import PostThread from "../forms/PostThread";
import { currentUser } from "@clerk/nextjs";
import { fetchUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

interface Props {
  accountId: string;
  authUserId: string;
  name: string;
  username: string;
  imgUrl: string;
  type?: string;
}

async function NewPostHeader({ accountId, authUserId,name, username, imgUrl, type }: Props) {
  const user = await currentUser();
  if (!user) return null;

  // fetch organization list created by user
  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");
  return (
    <div className="flex w-full flex-col justify-start">
      <div className="mt-1 mb-5 h-0.5 w-full bg-dark-3" />

      <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
          <div className="relative h-20 w-20 object-cover">
            <Image
              src={imgUrl}
              alt="logo"
              width={65}
              height={65}
              className="rounded-full object-cover shadow-2xl"
            />
          </div>

          <div className="flex-1">
            <h2 className="text-left text-heading3-bold text-light-1">
              {userInfo.name}
            </h2>
            <p className="text-base-medium text-gray-1">@{username}</p>
          </div>
        </div>
      </div>
      <div>
        <PostThread userId={userInfo._id} />
      </div>
      <div className="mt-5 h-0.5 w-full bg-dark-3" />
    </div>
  );
}

export default NewPostHeader;

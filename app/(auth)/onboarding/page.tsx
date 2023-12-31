import AccountProfile from "@/components/forms/AccountProfile"
import { fetchUser } from "@/lib/actions/user.action";
import { currentUser } from "@clerk/nextjs"
import { redirect } from "next/navigation";

async function page() {
  const user : any = await currentUser()

  if (!user) return null; 

  const userInfo = await fetchUser(user.id);
  if (userInfo?.onboarded) redirect("/");

  const userData = {
      id : user?.id,
      objectId : userInfo?._id,
      username : userInfo?.username || user?.username,
      name : userInfo?.name || user?.firstName || "",
      bio : userInfo?.bio || "",
      image : userInfo?.image || user?.imageUrl

  }
  return (
    <main className="mx-auto  max-w-3xl flex flex-col justify-start px-10 py-20">
      <h1 className="head-text ">Onboardig</h1>
      <p className="mt-3 text-base-regular text-light-2">complete your profile to use thread</p>
    <section className="bg-dark-2 p-10 mt-9" >
      <AccountProfile user ={userData} btnTitle ="continue"/>
    </section>
    </main>
  )
}

export default page
import { UserIcon } from "lucide-react";

const Profile = () => {
  return (
    <div>
      <h2 className="flex items-center text-xl font-semibold gap-2 pb-3">
        Profile
        <UserIcon className="w-5 h-5 text-muted-foreground" />
      </h2>
      <p className="text-muted-foreground ">
        Software Developer with a passion for building scalable, efficient, and
        user-friendly applications. Experienced in full-stack development with
        React, Next.js, TypeScript, and C#.
      </p>
    </div>
  );
};

export default Profile;

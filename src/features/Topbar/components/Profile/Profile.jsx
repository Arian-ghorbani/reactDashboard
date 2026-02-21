function Profile() {
  return (
    <div className="profile-wrapper flex items-center gap-x-3">
      <img
        src="/images/user-image.webp"
        alt="User Profile"
        className="size-11.5 rounded-full"
      />

      <div>
        <h4 className="username font-kalameh-bold text-[0.937rem]">
          آرین قربانی
        </h4>
        <p className="user-type text-sm text-secondary-text">مدیرعامل</p>
      </div>
    </div>
  );
}

export default Profile;

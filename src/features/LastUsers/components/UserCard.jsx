function UserCard({ user }) {
  return (
    <article className="user-card w-full h-17 px-4 flex items-center gap-x-4 rounded-2xl">
      <section className="img-wrapper">
        <img
          src={user.profile}
          alt="پروفایل کاربر"
          className="size-12 rounded-full"
        />
      </section>

      <section className="content-wrapper space-y-1">
        <p className="user-text">
          کاربر{" "}
          <span className="font-kalameh-medium text-primary">
            {user.fullName}
          </span>{" "}
          داخل وب‌سایت ثبت‌نام کرد.
        </p>

        <p className="user-email text-secondary-text">{user.email}</p>
      </section>
    </article>
  );
}

export default UserCard;

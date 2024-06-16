function PersonalInfoForm() {
  return (
    <section className="mt-[-72px] rounded-lg bg-neutral-white px-6 py-8">
      <h2 className="text-2xl font-bold text-primary-blue-1">Personal info</h2>
      <p className="mt-2 text-[16px] font-normal text-neutral-gray-1">
        Please provide your name, email, address, and phone number.
      </p>
      <form action="" className="mt-3 flex flex-col gap-4">
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="text-sm font-medium capitalize text-primary-blue-1"
          >
            Name
          </label>
          <input
            className="rounded border border-neutral-gray-2 px-4 py-2 text-sm font-medium text-primary-blue-1 outline-none placeholder:font-medium focus:border-primary-blue-1"
            type="text"
            name="name"
            id="name"
            placeholder="e.g. Stephen King"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="text-sm font-medium capitalize text-primary-blue-1"
          >
            Email address
          </label>
          <input
            className="rounded border border-neutral-gray-2 px-4 py-2 text-sm font-medium text-primary-blue-1 outline-none placeholder:font-medium focus:border-primary-blue-1"
            type="text"
            name="email"
            id="email"
            placeholder="e.g. stephenking@lorem.com"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="text-sm font-medium capitalize text-primary-blue-1"
          >
            Phone Number
          </label>
          <input
            className="rounded border border-neutral-gray-2 px-4 py-2 text-sm font-medium text-primary-blue-1 outline-none placeholder:font-medium focus:border-primary-blue-1"
            type="text"
            name="phone"
            id="phone"
            placeholder="e.g. +1 234 567 890"
          />
        </div>
      </form>
    </section>
  );
}

export default PersonalInfoForm;

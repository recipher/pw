export type Member = {
  name: string;
  role: string;
  image: string;
};

export default function Members({ members }: { members: Member[] }) {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <p className="mt-6 text-lg/8 text-gray-600">
          Here are a few of our growing membership.
        </p>
      </div>
      <ul
        role="list"
        className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none"
      >
        {members.map((person) => (
          <li key={person.name}>
            <img
              alt=""
              src={person.image}
              className="mx-auto size-24 rounded-full outline-1 -outline-offset-1 outline-black/5"
            />
            <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-gray-900">
              {person.name}
            </h3>
            <p className="text-sm/6 text-gray-600">{person.role}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

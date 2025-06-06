export default function SectionHeader({ name, number }: { name: string; number: number }) {
  return (
    <div
      id={name.toLowerCase()}
      className="hero bg-base-200 bg-opacity-50 rounded-2xl shadow-inner shadow-current">
      <div className="hero-content text-center">
        <div className="flex w-full flex-col">
          <div className="divider"></div>
          <div className="divider">
            <span className="text-2xl mr-4 text-accent select-none">{`0${number}.`}</span>
            <h1 className="text-2xl sm:text-5xl font-bold">{name}</h1>
          </div>
          <div className="divider"></div>
        </div>
      </div>
    </div>
  );
}

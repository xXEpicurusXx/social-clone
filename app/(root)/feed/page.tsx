import Image from "next/image";

const Page = async () => {
  return (
    <section>
      <h1 className="head-text mb-2">T.A.I.O.P Top 10</h1>
      <p className="text-light-4 mb-10 ">
        Top 10 sites for tourists to visit in Tokyo
      </p>

      <div className="mt-10 flex flex-col gap-5 activity-card">
        <h2 className="head-text">1. Tokyo Skytree</h2>
        <Image
          src="/assets/skytree.webp"
          alt="Tokyo Skytree"
          width={548}
          height={548}
        />
        <p className="flex flex-col gap-5 text-light-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe,
          possimus, rem repudiandae sed reiciendis quod tempore blanditiis
          corrupti a pariatur ab cum atque ex laboriosam, incidunt harum
          corporis? Neque, assumenda?
        </p>
      </div>
      <div className="mt-10 flex flex-col gap-5 activity-card">
        <h2 className="head-text">1. Tokyo Skytree</h2>
        <Image
          src="/assets/skytree.webp"
          alt="Tokyo Skytree"
          width={548}
          height={548}
        />
        <p className="flex flex-col gap-5 text-light-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe,
          possimus, rem repudiandae sed reiciendis quod tempore blanditiis
          corrupti a pariatur ab cum atque ex laboriosam, incidunt harum
          corporis? Neque, assumenda?
        </p>
      </div>
      <div className="mt-10 flex flex-col gap-5 activity-card">
        <h2 className="head-text">1. Tokyo Skytree</h2>
        <Image
          src="/assets/skytree.webp"
          alt="Tokyo Skytree"
          width={548}
          height={548}
        />
      </div>
      <p className="flex flex-col gap-5 text-light-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe,
          possimus, rem repudiandae sed reiciendis quod tempore blanditiis
          corrupti a pariatur ab cum atque ex laboriosam, incidunt harum
          corporis? Neque, assumenda?
        </p>
    </section>
  );
};

export default Page;

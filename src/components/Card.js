{
  /* <img
        alt="Aceternity"
        className="mb-4"
        height="200"
        src="/placeholder.svg"
        style={{
          aspectRatio: "350/200",
          objectFit: "cover",
        }}
        width="350"
      /> */
}

{
  /* <Badge className="mr-2" variant="default">
        Nextjs
      </Badge>
      <Badge variant="secondary">Tailwindcss</Badge> */
}

import { Badge } from "@/components/ui/badge";

function ProjectCard({ title, description, imageurl, badges }) {
  //console.log(imageurl?.img1?.src);
  return (
    <div className="flex gap-3 hover:bg-stone-100 rounded-xl mb-8 pt-4 ">
      <div className="bg-gray-200 pl-2 pr-2 pt-2  rounded-xl">
        <img
          alt="image of project"
          className=" rounded-lg "
          height="400"
          src={imageurl?.img1?.src}
          style={{
            aspectRatio: "250/200",
            objectFit: "cover",
          }}
          width="200"
        />
      </div>
      <div className="flex flex-col justify-between">
        <span>
          <h1 className="mb-3 font-bold text-lg">{title}</h1>
          <p className=" text-m text-gray-400">{description}</p>
        </span>

        <div className="flex gap-2">
          {badges.map((badge) => (
            <Badge
            key={badge}
              className="text-xs font-thin text-gray-500"
              variant={"secondary"}
            >
              {badge}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

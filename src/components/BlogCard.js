import { Badge } from "./ui/badge"

function BlogCard({title,description,image,keywords}) {
  return (
    <div className="flex gap-3 hover:bg-stone-100 rounded-xl mb-8 pt-4 pr-2 ">
    <div className="bg-gray-200 pl-2   rounded-xl">
      <img
        alt="image of project"
        className=" rounded-lg "
        height="400"
        src={image}
        style={{
          aspectRatio: "250/200",
          objectFit: "cover",
        }}
        width="200"
      />
    </div>
    <div className="flex flex-col justify-between">
      <span>
        <h1 className="mb-3 font-bold text-lg text-gray-600">{title}</h1>
        <p className=" font-normal text-m text-gray-400">{description}</p>
      </span>

      <div className="flex gap-2">
        {keywords.map((keyword) => (
          <Badge
          key={keyword}
            className="text-xs font-thin text-gray-500 bg-white border-2 border-gray-300"
            variant={"secondary"}
          >
            {keyword}
          </Badge>
        ))}
      </div>
    </div>
  </div>
  )
}

export default BlogCard
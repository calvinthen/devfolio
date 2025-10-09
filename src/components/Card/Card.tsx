import { useNavigate } from "react-router-dom"

type ProjectCardProps = {
  id: string
  title: string
  description: string
  tags?: string[]
  image?: string
  onClick?: (id: string) => void
}

export default function Card({
  id,
  title,
  description,
  tags = [],
  image,
  onClick,
}: ProjectCardProps) {
    const navigate = useNavigate()
    const handleClick = () => {
      navigate(`/projects/${id}`)
    } 

    const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      handleClick()
    }
  }
  return (
    <article
      role="article"
      aria-label={`Open project ${title}`}
      onClick={handleClick}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-transform duration-200 transform hover:-translate-y-1"
    >
      {/* image / placeholder */}
      {image ? (
        <img
          src={image}
          alt={`${title} screenshot`}
          loading="lazy"
          decoding="async"
          className="w-full h-44 object-cover"
        />
      ) : (
        <div className="w-full h-44 bg-gradient-to-tr from-gray-700 to-gray-600 flex items-center justify-center text-3xl font-bold text-gray-200">
          {title.charAt(0)}
        </div>
      )}

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-300 mb-3">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-gray-700 px-2 py-1 rounded"
              aria-hidden
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex justify-end">
          <button
            aria-label={`View ${title}`}
            onClick={() => onClick?.(id)}
            className="px-4 py-1 bg-blue-600 hover:bg-blue-700 rounded text-sm font-medium transition-colors"
          >
            View
          </button>
        </div>
      </div>
    </article>
  )
}

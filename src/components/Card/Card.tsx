// src/components/Card/Card.tsx
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
  return (
    <article
      role="article"
      className="bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-transform duration-200 transform hover:-translate-y-1"
    >
      {/* image / placeholder */}
      {image ? (
        <img
          src={image}
          alt={`${title} screenshot`}
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
          {tags.map((t) => (
            <span
              key={t}
              className="text-xs bg-gray-700 px-2 py-1 rounded"
              aria-hidden
            >
              {t}
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

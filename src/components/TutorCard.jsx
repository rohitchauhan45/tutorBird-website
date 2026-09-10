import FaceIcon from './FaceIcon.jsx'

export default function TutorCard({ tutor }) {
  return (
    <article className={`card p-6 flex flex-col h-full ${tutor.featured ? 'ring-2 ring-violet' : ''}`}>
      <div className="flex items-center gap-3 mb-5">
        <FaceIcon size={48} initial={tutor.initial} color={tutor.color} name={tutor.name} />
        <div>
          <h3 className="text-lg leading-tight">{tutor.name}</h3>
          <p className="text-sm text-raven/45 mt-0.5">{tutor.meta}</p>
        </div>
      </div>
      <p className="text-[1.02rem] text-raven/80 mb-2 leading-snug font-medium">{tutor.headline}</p>
      <p className="text-sm text-raven/45 mb-4">{tutor.subjects}</p>
      <p className="text-2xl font-extrabold tracking-tight mb-4">
        {tutor.price} <span className="text-base font-semibold text-raven/40">/hr</span>
      </p>
      <div className="mt-auto space-y-2 text-sm text-raven/55">
        <div className="flex items-center gap-2">
          <span className="status-dot" /> {tutor.availability}
        </div>
        <p className="text-violet font-semibold">{tutor.distance}</p>
      </div>
    </article>
  )
}

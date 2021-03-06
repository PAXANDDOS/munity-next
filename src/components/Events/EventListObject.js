import Image from "next/image"
import Link from "next/link"

import { Pin, Format, Theme, People, Comment } from "../../lib/icons/Misc"
import style from "../../styles/app.module.scss"

const EventListObject = ({ event }) => {
	if (event.description)
		event.description =
			event.description.length >= 400
				? event.description.substr(0, 400) + ".."
				: event.description
	return (
		<div className={style.eventListObject}>
			<div className={style.eventListMain}>
				<div className={style.eventListCreator} title='Organizer'>
					<Link href={`/user/${event.organizer[0].name}`}>
						<a className={style.eventListCreatorImage}>
							<Image
								src={event.organizer[0].image}
								alt='creatorImage'
								width={64}
								height={64}
								className={style.eventListCreatorImage}
								quality={100}
								objectFit='cover'
							/>
						</a>
					</Link>
					<h3 className={style.eventListCreatorName}>
						{event.organizer[0].name}
					</h3>
				</div>
				<span className={style.eventListPrice} title='Price'>
					$ {event.price}
				</span>
			</div>
			<div className={style.eventListInfo}>
				<Link
					href={`/user/${event.organizer[0].name}/events/${event.id}`}
				>
					<a className={style.eventListTitle}>{event.title}</a>
				</Link>
				<span className={style.eventListDecsription}>
					{event.description}
				</span>
				<span className={style.eventListAddress} title='Event address'>
					<Pin /> {event.address}
				</span>
				<div className={style.eventListSub}>
					<span
						className={style.eventListSubObject}
						title='Event theme'
					>
						<Theme />
						{event.theme}
					</span>
					<span
						className={style.eventListSubObject}
						title='Event format'
					>
						<Format />
						{event.format}
					</span>
					<span
						className={style.eventListSubObject}
						title='Also coming'
					>
						<People />
						{event.members.length}
					</span>
					<span className={style.eventListSubObject} title='Comments'>
						<Comment />
						{event.comments.length}
					</span>
				</div>
			</div>
		</div>
	)
}

export default EventListObject

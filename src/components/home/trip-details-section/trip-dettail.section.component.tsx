
export interface TripDetailsProp {
    key?: number,
    image: string,
    title: string,
    desc: string
}


export const TripDetail = ({ key, image, title, desc }: TripDetailsProp) => {
    return (
        <div className='text-center' key={key}>
            <img src={image} alt={title} height="170px" />

            <h2>
                {title}
            </h2>

            <p className='text-gray-500'>
                {desc}
            </p>

        </div>
    )
}

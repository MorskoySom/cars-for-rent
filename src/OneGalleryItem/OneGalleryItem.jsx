import { GalleryItem, Image } from "./OneGalleryItem.styled"

export const OneGalleryItem = ({ data }) => {
    return (
        <GalleryItem key={data.id}>
            <div>
                <Image src={data.img} alt={data.make} />           
            </div>
            <h1>
                {data.make} , {data.model}
            </h1>
        </GalleryItem>
    )
}

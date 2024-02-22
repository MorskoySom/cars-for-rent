export const OneGalleryItem = ({ data }) => {
    return (
        <div key={data.id}>
            <div>
                <img src={data.img} alt={data.make} />           
            </div>
            <h1>
                {data.make} , {data.model}
            </h1>
        </div>
    )
}

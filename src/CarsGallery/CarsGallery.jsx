import { OneGalleryItem } from 'OneGalleryItem/OneGalleryItem';
import datacars from '../cars.json';

export const CarGallery = () => {    
    return (
        <div>
            {datacars.map((car) => {
                return <OneGalleryItem data={car} key={car.id}/>
            })}
        </div>
    )
}

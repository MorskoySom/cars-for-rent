import datacars from '../cars.json';
import { v4 as uuidv4 } from 'uuid';

export const CarGallery = () => {
    console.log(datacars);
    return (
        <div>
            {datacars.map((car) => (
                <div key={uuidv4()}>
                    {car.make}
                </div>
            ))}
        </div>
    )
}

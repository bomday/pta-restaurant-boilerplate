import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Restaurant {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    restaurantName: string

    @Column()
    restaurantStreet: string

    @Column()
    foodStyle: string

}

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: "credentials"
})
export class Credential {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 200,
    })
    username: string;

    @Column()
    password: string;
}


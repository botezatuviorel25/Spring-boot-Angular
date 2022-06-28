import { Pachet } from "./pachet";
import { Serviciu } from "./serviciu";
import { User } from "./user";

export class Programare{
    id!: number;
    userid!: number;
    serviciu_id!: number;
    pachet_id!: number;
    data_programare!: Date;
    confirmare!: String | undefined;
    user!: User;
    serviciu!: Serviciu;
    pachet!: Pachet;

}
import { Exclude, Expose } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { BaseDto } from "../../common/dto/base.dto";
import { Board } from "../game.models";

@Expose()
export class GameUpdateDto  extends BaseDto<GameUpdateDto>{

  @Expose()
  row!: number;

  @Expose()
  col!: number;

  @Expose()
  value!: boolean;

}

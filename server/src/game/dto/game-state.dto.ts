import { Exclude, Expose } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { BaseDto } from "../../common/dto/base.dto";
import { Board } from "../game.models";

@Exclude()
export class GameStateDto  extends BaseDto<GameStateDto>{

  @Expose()
  @IsNotEmpty()
  board!: Board;

  @Expose()
  @IsNotEmpty()
  step!: number;

  @Expose()
  @IsNotEmpty()
  running!: boolean;

  @Expose()
  isAllDead!: boolean;

}

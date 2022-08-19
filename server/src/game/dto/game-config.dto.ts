import { Exclude, Expose } from "class-transformer";
import { BaseDto } from "../../common/dto/base.dto";
import { GameState } from "../game.models";

@Exclude()
export class GameConfigDto  extends BaseDto<GameConfigDto>{

  @Expose()
  game!: GameState;

  @Expose()
  rows!: number;

  @Expose()
  cols!: number;

}

import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { GameService } from './game.service';
import { GameStateDto } from "./dto/game-state.dto";
import { GameConfigDto } from "./dto/game-config.dto";
import { COLS, ROWS } from "./game.constants";
import { GameUpdateDto } from "./dto/game-update.dto";

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {
  }

  @Get()
  getGameConfig(): GameConfigDto {
    const game = this.gameService.getGameState();
    return new GameConfigDto({ game, cols: COLS, rows: ROWS });
  }

  @Put('update')
  updateCell(@Body() gameUpdateDto: GameUpdateDto): GameStateDto {
    return this.gameService.updateCell(gameUpdateDto);
  }

  @Post('next')
  next(): GameStateDto {
    return this.gameService.nextStep();
  }

  @Post('start')
  start(): GameStateDto {
    return this.gameService.start();
  }

  @Post('stop')
  stop(): GameStateDto {
    return this.gameService.stop();
  }

  @Post('reset')
  reset(): GameStateDto {
    return this.gameService.reset();
  }

}

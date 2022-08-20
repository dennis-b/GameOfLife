import { Injectable } from '@nestjs/common';
import { SchedulerRegistry } from "@nestjs/schedule";
import { NotificationService } from "../notification/notification.service";
import { GameStateDto } from "./dto/game-state.dto";
import { getNextBoard, initGame } from "./game.utils";
import { GameUpdateDto } from "./dto/game-update.dto";
import { GAME_INTERVAL } from "./game.constants";

@Injectable()
export class GameService {
  private gameState = initGame()

  constructor(
    private schedulerRegistry: SchedulerRegistry,
    private notificationService: NotificationService
  ) {
  }

  getGameState() {
    return this.gameState
  }

  updateCell({ col, row }: GameUpdateDto) {
    this.gameState.board[row][col] = !this.gameState.board[row][col];
    return this.gameState;

  }

  start(): GameStateDto {
    this.gameState.running = true;
    const interval = setInterval(() => this.notificationService.emit({ state: this.nextStep() }), GAME_INTERVAL);
    this.schedulerRegistry.addInterval('runGame', interval);
    return this.gameState
  }

  stop(): GameStateDto {
    this.schedulerRegistry.doesExist('interval', 'runGame') && this.schedulerRegistry.deleteInterval('runGame');
    this.gameState.running = false;
    this.notificationService.emit({ state: this.gameState })
    return this.gameState
  }

  reset(): GameStateDto {
    this.gameState = initGame();
    return this.gameState;
  }

  nextStep(): GameStateDto {
    const { isAllDead, board } = getNextBoard(this.gameState.board);
    this.gameState = { ...this.gameState, board, isAllDead, step: this.gameState.step + 1 }
    return this.gameState;
  }
}

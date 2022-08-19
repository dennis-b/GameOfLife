import { useMutation, useQuery } from "react-query";
import { BASE_API_URL } from "../App.constants";
import { GameConfigState } from "../App.models";
import { useGameContext } from "../GameContext/GameContext";

const headers = { 'Content-Type': 'application/json' }

export function useGameState({ parseData }: { parseData?: (data: GameConfigState) => GameConfigState } = {}) {
  const url = `${BASE_API_URL}/game`
  const { setGame } = useGameContext()
  return useQuery(
    "gameState",
    async () => {
      const rawData: GameConfigState = await fetch(url).then(res => res.json());
      return parseData ? parseData(rawData) : rawData;
    },
    {
      onSuccess: (data) => setGame(data.game)
    }
  );
}

export function useGameStateReset() {
  const url = `${BASE_API_URL}/game/reset`
  const { setGame } = useGameContext()
  return useMutation(
    () => {
      const config = { method: 'POST', headers };
      return fetch(url, config).then(res => res.json());
    },
    {
      onSuccess: (data) => setGame(data)
    }
  );
}

export function useGameNext() {
  const url = `${BASE_API_URL}/game/next`
  const { setGame } = useGameContext()
  return useMutation(
    () => {
      const config = { method: 'POST', headers };
      return fetch(url, config).then(res => res.json());
    },
    {
      onSuccess: (data) => setGame(data)
    }
  );
}

export function useGameStart() {
  return useMutation(
    () => fetch(`${BASE_API_URL}/game/start`, { method: 'POST', headers }).then(res => res.json()),
  );
}

export function useGameStop() {
  return useMutation(
    () => fetch(`${BASE_API_URL}/game/stop`, { method: 'POST', headers }).then(res => res.json()),
  );
}

export function useUpdateGameCell() {
  const url = `${BASE_API_URL}/game/update`
  const { setGame } = useGameContext()
  return useMutation(
    ({ row, col, value }: { row: number, col: number, value: boolean }) => {
      const config = {
        method: 'PUT',
        headers,
        body: JSON.stringify({ row, col, value })
      };
      return fetch(url, config).then(res => res.json());
    }, {
      onSuccess: (data) => setGame(data)
    });

}

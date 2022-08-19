import { useEffect } from "react";
import { BASE_API_URL } from "../App.constants";
import { useGameContext } from "../GameContext/GameContext";

export function useGameStateEvent() {

  const { game, setGame } = useGameContext()

  useEffect(() => {
    const eventSource = new EventSource(`${BASE_API_URL}/notifications/sse`)
    eventSource.onmessage = ({ data }) => {
      setGame(JSON.parse(data).state)
    }
    return () => eventSource.close()
  }, [])

  return {
    game
  }
}

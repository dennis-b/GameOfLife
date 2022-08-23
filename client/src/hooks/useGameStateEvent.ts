import { useEffect } from "react";
import { useGameApiContext, useGameContext } from "../GameContext/GameContext";
const BASE_API_URL = import.meta.env.VITE_BASE_API_URL

export function useGameStateEvent() {

  const { game } = useGameContext()
  const { setGame } = useGameApiContext()

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

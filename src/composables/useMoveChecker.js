import { useMainStore } from "@/store";
import { useTakeEnemy } from "@/composables/useTakeEnemy.js";

export function useMoveChecker(current) {

  const store = useMainStore();

  const { cx, cy } = current;

  if (store.tableHighlight[cy][cx] !== 1) return;

  if (store.tableHighlight[cy][cx] === 1) {
    useTakeEnemy(current);
    store.$patch((state) => {
      state.table[store.currentChecker.cy][store.currentChecker.cx] = 0;
      state.table[cy][cx] = store.currentChecker.figureType;
    });
    store.resetTableHighlight();
    store.resetCurrentChecker();
    store.changePlayer();
  }
}

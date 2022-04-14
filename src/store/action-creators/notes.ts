import { initStatisticAction } from "../actions/notesActions";
import { updatedStatistic } from "../../utils/updateStatistic";
import { NoteType } from "../../types/notes";

export const initStatistic = (categories : string[], notes : NoteType[]) => {
  const updStatistic = updatedStatistic(categories, notes);

  return initStatisticAction(updStatistic)
}
import { NoteType } from "../types/notes";
import { StatisticType } from "../types/notes";

const addStatisticNumber = (notes: NoteType[], category: string, activeState: boolean) : number => {
  const filteredNotes = notes.filter(
    note => note.active === activeState && note.category === category
  );

  return filteredNotes.length;
}

export const updatedStatistic = (categories: string[], notes: NoteType[]) : StatisticType[] => {
  const updStatistic : StatisticType[] = [];
  categories.forEach((category, index) => {
    updStatistic.push({
      id: index,
      category,
      activeNotes: addStatisticNumber(
        notes,
        category,
        true
      ),
      archivedNotes: addStatisticNumber(
        notes,
        category,
        false
      )
    });
  });

  return updStatistic;
}
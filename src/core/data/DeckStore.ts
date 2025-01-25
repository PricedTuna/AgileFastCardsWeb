import { create } from "zustand";
import { Deck } from "../domain/Deck";

interface DeckStore {
  decks: Deck[];
  addDeck: (deck: Deck) => void;
  updateDeck: (id: string, updatedDeck: Partial<Deck>) => void;
  removeDeck: (id: string) => void;
}

export const useDeckStore = create<DeckStore>((set) => ({
  decks: [],
  addDeck: (deck) => set((state) => ({ decks: [...state.decks, deck] })),
  removeDeck: (id) => {
    set((state) => ({ decks: state.decks.filter((deck) => deck.id == id) }));
  },
  updateDeck: (id, updatedDeck) => {
    set((state) => ({
      decks: state.decks.map((deck) =>
        deck.id === id ? { ...deck, updatedDeck } : deck
      ),
    }));
  },
}));

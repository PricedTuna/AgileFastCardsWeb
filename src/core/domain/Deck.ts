import { Card } from "./Card";

export interface Deck {
  id: string;
  title: string;
  createdAt: Date; // default: new Date()
  cards?: Card[];
}

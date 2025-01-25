import { Deck } from "../Deck";

export interface CreateDeckDto extends Pick<Deck, "title"> {}
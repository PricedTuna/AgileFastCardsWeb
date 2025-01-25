import { Card } from "../Card";

export interface CardCreateDto extends Pick<Card, "front" | "back"> {}
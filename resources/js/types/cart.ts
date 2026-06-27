import type { MenuType } from "./menu";

export interface CartItem extends MenuType {
    quantity: number;
}

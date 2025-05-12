import { z } from "zod";
import {
  ProductInputSchema,
  OrderItemSchema,
  CartSchema,
  UserInputSchema,
  UserSignInSchema,
  UserSignUpSchema,
  ShippingAddressSchema,
  SettingInputSchema,
  CarouselSchema,
} from "@/lib/validator";

export type IProductInput = z.infer<typeof ProductInputSchema>;
export type Data = {
  settings: ISettingInput[];
  users: IUserInput[];
  products: IProductInput[];
  headerMenus: {
    name: string;
    href: string;
  }[];
  carousels: {
    image: string;
    url: string;
    title: string;
    buttonCaption: string;
    isPublished: boolean;
  }[];
};
export type OrderItem = z.infer<typeof OrderItemSchema>;
export type Cart = z.infer<typeof CartSchema>;
export type ShippingAddress = z.infer<typeof ShippingAddressSchema>;
// user
export type IUserInput = z.infer<typeof UserInputSchema>;
export type IUserSignIn = z.infer<typeof UserSignInSchema>;

export type IUserSignUp = z.infer<typeof UserSignUpSchema>;

// setting
export type ICarousel = z.infer<typeof CarouselSchema>
export type ISettingInput = z.infer<typeof SettingInputSchema>
export type ClientSetting = ISettingInput & {
  currency: string
}

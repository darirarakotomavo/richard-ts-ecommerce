import { z } from "zod";
import {
  ProductInputSchema,
  OrderItemSchema,
  CartSchema,
  UserInputSchema,
  UserSignInSchema,
  UserSignUpSchema,
  ShippingAddressSchema,
  OrderInputSchema,
} from "@/lib/validator";

export type IProductInput = z.infer<typeof ProductInputSchema>;

export type Data = {
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
//order

// export type IOrderList = IOrderInput & {
//   _id: string
//   user: {
//     name: string
//     email: string
//   }
//   createdAt: Date
// }

export type IOrderInput = z.infer<typeof OrderInputSchema>
export type OrderItem = z.infer<typeof OrderItemSchema>;
export type Cart = z.infer<typeof CartSchema>;
export type ShippingAddress = z.infer<typeof ShippingAddressSchema>;
// user
export type IUserInput = z.infer<typeof UserInputSchema>;
export type IUserSignIn = z.infer<typeof UserSignInSchema>;

export type IUserSignUp = z.infer<typeof UserSignUpSchema>;
//export type IUserName = z.infer<typeof UserNameSchema>;


// // webpage
// export type IWebPageInput = z.infer<typeof WebPageInputSchema>

// // setting
// export type ICarousel = z.infer<typeof CarouselSchema>
// export type ISettingInput = z.infer<typeof SettingInputSchema>
// export type ClientSetting = ISettingInput & {
//   currency: string
// }
// export type SiteLanguage = z.infer<typeof SiteLanguageSchema>
// export type SiteCurrency = z.infer<typeof SiteCurrencySchema>
// export type PaymentMethod = z.infer<typeof PaymentMethodSchema>
// export type DeliveryDate = z.infer<typeof DeliveryDateSchema>





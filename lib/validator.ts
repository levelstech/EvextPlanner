import { z } from "zod";

export const eventFormSchema = z.object({
  title: z.string().min(3, {
    message: "Title must be at least 3 characters.",
  }),
  description: z
    .string()
    .min(3, {
      message: "Description must be at least 3 characters.",
    })
    .max(500, {
      message: "Description must be at most 500 characters.",
    }),
  location: z
    .string()
    .min(3, {
      message: "Location must be at least 3 characters.",
    })
    .max(400, {
      message: "Location must be at most 400 characters.",
    }),
  imageUrl: z.string().url("Image URL must be a valid URL."),
  startDateTime: z.date(),
  endDateTime: z.date(),
  categoryId: z
    .string()
    .min(1, { message: "A category must be at least 1 character long." }),
  price: z.string(),
  isFree: z.boolean(),
  url: z.string().url("URL must be a valid URL."),
});

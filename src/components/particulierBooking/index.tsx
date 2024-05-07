import { useRef } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm, type SubmitHandler } from "react-hook-form";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

interface FormData {
  name: string;
  number: string;
  email: string;
  address: string;
  place: string;
  nb: string;
  message?: string;
}
interface ParticulierBookingProps {
  children: React.ReactNode;
}

export function ParticulierBooking({ children }: ParticulierBookingProps) {
  const form = useRef<HTMLFormElement>(null);

  const notify = () =>
    toast.success("Success, Merci nous vous appellerons bientôt", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);

    emailjs
      .sendForm(
        "service_a0pqcxr",
        "template_k8zr4ph",
        form.current!,
        "EwhTfNif09PeCdVpl",
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          form.current!.reset();
          notify();
        },
        (error) => {
          toast.error("L'adresse e-mail est mal formatée", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        },
      );
  };
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="p-0">
        <SheetHeader>
          <SheetTitle className="flex min-h-20 items-center justify-center bg-primaryColorLight !p-0 text-2xl font-semibold text-primaryColor">
            Réservation
          </SheetTitle>
          <SheetDescription className="p-6">
            Ces informations seront utilisées pour vous contacter au sujet de
            votre service. N&apos;hésitez pas à nous contacter en utilisant le
            formulaire ci-dessous
          </SheetDescription>
        </SheetHeader>
        <div className="Contact w-full" id="contact">
          <div className="">
            <div className=" w-full p-6">
              <div className="Contact-content-form ">
                <form
                  id="stripe-login"
                  ref={form}
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-2"
                >
                  <div className="field padding-bottom--24 border bg-gray-100 p-2">
                    <Label htmlFor="name">Nom Complète*</Label>
                    <Input
                      className="rounded-none border-0 bg-gray-100"
                      id="name"
                      type="text"
                      {...register("name", {
                        required: true,
                      })}
                      placeholder="Nom Complète"
                    />
                    <p className="error-message text-red-400">
                      {errors.name && "Ce champ est obligatoire.."}
                    </p>
                  </div>
                  <div className="field padding-bottom--24 border bg-gray-100 p-2">
                    <Label htmlFor="number">Numéro de téléphone*</Label>
                    <Input
                      className="rounded-none border-0 bg-gray-100"
                      id="number"
                      type="text"
                      {...register("number", {
                        required: true,
                      })}
                      placeholder="Numéro de téléphone"
                    />
                    <p className="error-message text-red-400">
                      {errors.number && "Ce champ est obligatoire.."}
                    </p>
                  </div>
                  <div className="field padding-bottom--24 border bg-gray-100 p-2">
                    <Label htmlFor="email">E-mail*</Label>
                    <Input
                      className="rounded-none border-0 bg-gray-100"
                      id="email"
                      type="email"
                      {...register("email", {
                        required: true,
                      })}
                      placeholder="example@menagelik.com"
                    />
                    <p className="error-message text-red-400">
                      {errors.email && "Ce champ est obligatoire.."}
                    </p>
                  </div>
                  <div className="field padding-bottom--24 border bg-gray-100 p-2">
                    <Label htmlFor="address">Adresse Complète*</Label>
                    <Input
                      className="rounded-none border-0 bg-gray-100"
                      id="address"
                      type="text"
                      {...register("address", {
                        required: true,
                      })}
                      placeholder="Adresse Complète"
                    />
                    <p className="error-message text-red-400">
                      {errors.address && "Ce champ est obligatoire.."}
                    </p>
                  </div>
                  <div className="bh flex w-full flex-col items-center justify-center md:flex-col">
                    <div className="flex w-full items-center justify-center gap-3 ">
                      <div className="w-full border bg-gray-100 p-2">
                        <Label htmlFor="address">L&apos;endroit*</Label>
                        <Select
                          {...register("place", {
                            required: false,
                          })}
                        >
                          <SelectTrigger className="w-full rounded-none border-0 bg-gray-100">
                            <SelectValue placeholder="Sélectionnez" />
                          </SelectTrigger>
                          <SelectContent className="w-full">
                            <SelectGroup>
                              <SelectItem value="Appartement">
                                Appartement
                              </SelectItem>
                              <SelectItem value="Maison">Maison</SelectItem>
                              <SelectItem value="Cafe et restaurant">
                                Café et restaurant
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        <p className="error-message text-red-400">
                          {errors.place && "Ce champ est obligatoire select.."}
                        </p>
                      </div>
                      <div className="field padding-bottom--24 w-full border bg-gray-100 p-2">
                        <Label htmlFor="address">Nombre de personnes*</Label>
                        <Select
                          defaultValue={"1"}
                          {...register("nb", {
                            required: false,
                          })}
                        >
                          <SelectTrigger className="w-full rounded-none border-0 bg-gray-100">
                            <SelectValue placeholder="Sélectionnez" />
                          </SelectTrigger>
                          <SelectContent className="w-full ">
                            <SelectGroup defaultValue={"1"}>
                              <SelectItem value="1">1 personne</SelectItem>
                              <SelectItem value="2">2 personnes</SelectItem>
                              <SelectItem value="3">3 personnes</SelectItem>
                              <SelectItem value="4 ou plus">
                                4 ou plus
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        <p className="error-message text-red-400">
                          {errors.nb && "Ce champ est obligatoire select.."}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="field padding-bottom--24 border bg-gray-100 p-2">
                    <Label htmlFor="Message">Message</Label>
                    <Textarea
                      className="rounded-none border-0 bg-gray-100"
                      placeholder="Veuillez nous donner plus de détails sur votre demande, par exemple le nombre de personnes, la date et l'heure de la réservation, etc.
                    "
                    />
                  </div>

                  <div className="mt-2 flex w-full cursor-pointer items-start justify-start">
                    <Button type="submit" className="w-28 text-lg">
                      <input type="submit" name="submit" value="Envoyer" />
                    </Button>
                  </div>
                </form>
                <ToastContainer
                  position="top-center"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                />
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

import { useRef, useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm, type SubmitHandler, Controller } from "react-hook-form";
import { format } from "date-fns";
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
import { Switch } from "../ui/switch";
import { Anvil, CalendarIcon, PawPrint, Loader2 } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { cn } from "~/lib/utils";

interface FormData {
  name: string;
  number: string;
  email: string;
  address: string;
  place: string;
  nb: string;
  message?: string;
  type?: string;
  date: Date;
  hasAnimals?: boolean;
  needsTools?: boolean;
}

interface ParticulierBookingProps {
  children: React.ReactNode;
  buttons?: boolean;
  type?: string;
}

export function ParticulierBooking({
  children,
  buttons,
  type,
}: ParticulierBookingProps) {
  const form = useRef<HTMLFormElement>(null);
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [date, setDate] = useState<Date>();
  const [isLoading, setIsLoading] = useState(false); // Add loading state

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
    control,
    setValue,
  } = useForm<FormData>({
    defaultValues: {
      nb: "1",
      hasAnimals: false,
      needsTools: false,
      type: type ?? "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    // Set loading to true when starting submission
    setIsLoading(true);

    // Add the date and switch values to the form data
    const formData = {
      ...data,
      date: date,
      hasAnimals: checked,
      needsTools: checked2,
      type: type ?? data.type ?? "",
    };

    console.log("Form Data:", formData);

    // Create EmailJS template variables
    const templateParams = {
      name: formData.name,
      number: formData.number,
      email: formData.email,
      address: formData.address,
      place: formData.place,
      nb: formData.nb,
      date: date ? format(date, "PPP") : "Non spécifiée",
      hasAnimals: checked ? "Oui" : "Non",
      needsTools: checked2 ? "Oui" : "Non",
      message: formData.message ?? "Aucun message spécifique",
      type: formData.type ?? "",
    };

    // Send email with EmailJS
    emailjs
      .send(
        "service_r7r7ff8",
        "template_k8zr4ph",
        templateParams,
        "EwhTfNif09PeCdVpl",
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          form.current!.reset();
          setDate(undefined);
          setChecked(false);
          setChecked2(false);
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
      )
      .finally(() => {
        // Set loading to false when submission is complete (success or error)
        setIsLoading(false);
      });
  };

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="p-0">
        <SheetHeader>
          <SheetTitle className="flex min-h-20 items-center justify-center bg-primaryColorLight !p-0 text-2xl font-semibold text-primaryColor">
            Réservation {type && `- ${type}`}
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
                  className="flex flex-col gap-4"
                >
                  <input
                    type="hidden"
                    {...register("type")}
                    value={type ?? ""}
                  />
                  <div className="field padding-bottom--24 border bg-gray-100 p-2">
                    <Label htmlFor="name">Nom Complet*</Label>
                    <Input
                      className="rounded-none border-0 bg-gray-100"
                      id="name"
                      type="text"
                      {...register("name", {
                        required: true,
                      })}
                      placeholder="nom complet"
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

                  <div className="flex w-full flex-col items-center gap-4 md:flex-row">
                    <div className="field padding-bottom--24 w-full border bg-gray-100 p-2">
                      <Label htmlFor="email">E-mail</Label>
                      <Input
                        className="rounded-none border-0 bg-gray-100"
                        id="email"
                        type="email"
                        {...register("email", {
                          required: false,
                        })}
                        placeholder="example@menagelik.com"
                      />
                      <p className="error-message text-red-400">
                        {errors.email && "Ce champ est obligatoire.."}
                      </p>
                    </div>
                    <div className="field padding-bottom--24 w-full border bg-gray-100 p-2">
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
                  </div>

                  {/* Switch buttons for animals and tools */}
                  <div
                    className={cn(
                      "w-full items-center justify-between gap-4 ",
                      buttons && "flex flex-col md:flex-row",
                      !buttons && "hidden",
                    )}
                  >
                    <div
                      className={cn(
                        "flex w-full flex-row items-center justify-between border p-4 transition-colors duration-200",
                        checked ? "bg-white" : "bg-gray-100",
                      )}
                    >
                      <div className="space-y-0.5">
                        <PawPrint
                          className={cn(
                            "transition-colors duration-200",
                            checked ? "text-secondaryColor" : "text-gray-400",
                          )}
                        />
                        <div className="flex flex-col">
                          <Label
                            className={cn(
                              "text-base transition-colors duration-200",
                              checked ? "text-black" : "text-gray-500",
                            )}
                          >
                            J&apos;ai des animaux
                          </Label>
                          <span className="text-primaryColor">
                            {checked ? "oui" : "non"}
                          </span>
                        </div>
                      </div>
                      <div>
                        <Switch
                          checked={checked}
                          onCheckedChange={(value) => {
                            setChecked(value);
                            setValue("hasAnimals", value);
                          }}
                        />
                      </div>
                    </div>
                    <div
                      className={cn(
                        "flex w-full flex-row items-center justify-between border p-4 transition-colors duration-200",
                        checked2 ? "bg-white" : "bg-gray-100",
                      )}
                    >
                      <div className="space-y-0.5">
                        <Anvil
                          className={cn(
                            "transition-colors duration-200",
                            checked2 ? "text-secondaryColor" : "text-gray-400",
                          )}
                        />
                        <div className="flex flex-col">
                          <Label
                            className={cn(
                              "text-base transition-colors duration-200",
                              checked2 ? "text-black" : "text-gray-500",
                            )}
                          >
                            Produits et outils
                          </Label>
                          <span className="text-primaryColor">
                            {checked2 ? "oui" : "non"}
                          </span>
                        </div>
                      </div>
                      <div>
                        <Switch
                          checked={checked2}
                          onCheckedChange={(value) => {
                            setChecked2(value);
                            setValue("needsTools", value);
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Place and Number of people selects */}
                  <div className="bh flex w-full flex-col items-center justify-center md:flex-col">
                    <div className="flex w-full flex-col items-center justify-center gap-3 md:flex-row">
                      <div className="w-full border bg-gray-100 p-2">
                        <Label htmlFor="place">L&apos;endroit*</Label>
                        <Controller
                          name="place"
                          control={control}
                          rules={{ required: "Ce champ est obligatoire" }}
                          render={({ field }) => (
                            <Select
                              onValueChange={field.onChange}
                              value={field.value}
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
                                  <SelectItem value="Villa">Villa</SelectItem>
                                  <SelectItem value="autre">Autre..</SelectItem>
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          )}
                        />
                        <p className="error-message text-red-400">
                          {errors.place?.message}
                        </p>
                      </div>

                      <div className="field padding-bottom--24 w-full border bg-gray-100 p-2">
                        <Label htmlFor="nb">N.B de personnes*</Label>
                        <Controller
                          name="nb"
                          control={control}
                          rules={{ required: "Ce champ est obligatoire" }}
                          render={({ field }) => (
                            <Select
                              onValueChange={field.onChange}
                              value={field.value}
                              defaultValue="1"
                            >
                              <SelectTrigger className="w-full rounded-none border-0 bg-gray-100">
                                <SelectValue placeholder="Sélectionnez" />
                              </SelectTrigger>
                              <SelectContent className="w-full ">
                                <SelectGroup>
                                  <SelectItem value="1">1 personne</SelectItem>
                                  <SelectItem value="2">2 personnes</SelectItem>
                                  <SelectItem value="3">3 personnes</SelectItem>
                                  <SelectItem value="4 ou plus">
                                    4 ou plus
                                  </SelectItem>
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          )}
                        />
                        <p className="error-message text-red-400">
                          {errors.nb?.message}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Date picker */}
                  <div className="w-full">
                    <Label htmlFor="date">La date du prestation*</Label>
                    <Controller
                      name="date"
                      control={control}
                      rules={{ required: "Ce champ est obligatoire" }}
                      render={({ field }) => (
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "h-16 w-full justify-start bg-gray-100 text-left font-normal",
                                !date && "text-muted-foreground",
                                errors.date && "border-red-400",
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {date ? (
                                format(date, "PPP")
                              ) : (
                                <span>Veuillez sélectionner une date</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={(selectedDate) => {
                                setDate(selectedDate);
                                field.onChange(selectedDate);
                                setValue("date", selectedDate ?? new Date());
                              }}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      )}
                    />
                    <p className="error-message text-red-400">
                      {errors.date?.message}
                    </p>
                  </div>

                  {/* Message field (optional) */}
                  <div className="field padding-bottom--24 border bg-gray-100 p-2">
                    <Label htmlFor="message">Message (optionnel)</Label>
                    <Textarea
                      className="rounded-none border-0 bg-gray-100"
                      {...register("message")}
                      placeholder="Veuillez nous donner plus de détails sur votre demande..."
                    />
                  </div>

                  <div className="mt-2 flex w-full cursor-pointer items-start justify-start">
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-6 text-lg md:w-1/2"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Envoi en cours...
                        </>
                      ) : (
                        "Envoyer"
                      )}
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

import React from "react";
import { Input } from "./input";
import type {
  ControllerRenderProps,
  FieldPath,
  FieldValues,
} from "react-hook-form";
import { Label } from "./label";

interface InputLabelProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: React.ReactNode;
  field: ControllerRenderProps<TFieldValues, TName>;
}

export const InputLabel = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  label,
  icon,
  ...props
}: InputLabelProps<TFieldValues, TName>) => {
  return (
    <div className="rounded-sm border bg-slate-100 px-3 py-1.5  ">
      <Label className="flex items-center gap-1 px-0">
        {icon}
        {label}
        {props.required && (
          <span className="text-red-500" aria-hidden="true">
            *
          </span>
        )}
      </Label>
      <div>
        <Input
          className="!border-input-0 w-full border-0 bg-slate-100 px-0 focus-visible:ring-0 focus-visible:ring-offset-0"
          {...props}
        //   {...field}
        />
      </div>
    </div>
  );
};

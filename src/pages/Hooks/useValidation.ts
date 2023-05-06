import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";

const useValidation = <T extends FieldValues>(schema: any) =>
  useForm<T>({ resolver: zodResolver(schema) });

export default useValidation;

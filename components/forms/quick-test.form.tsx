"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PatientInformation, type FormProps } from "@/lib/utils/types";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  SelectContent,
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ForwardedRef, forwardRef, useImperativeHandle } from "react";
import { PatientInformationSchema } from "@/lib/schema/patient-information.schema";
import { GrNext } from "react-icons/gr";
import { useQuickTestState } from "@/store";

export const QuickTestForm = forwardRef(
  (
    props: FormProps<PatientInformation>,
    ref: ForwardedRef<{}>,
  ): JSX.Element => {
    const { patientInformation } = useQuickTestState((state) => state);

    // initialize form
    const form = useForm<PatientInformation>({
      resolver: zodResolver(PatientInformationSchema),
      defaultValues: {
        title: !patientInformation ? "MR" : patientInformation.title,
        firstName: !patientInformation ? "" : patientInformation.firstName,
        middleName: !patientInformation ? "" : patientInformation.middleName,
        lastName: !patientInformation ? "" : patientInformation.lastName,
        age: {
          years: !patientInformation ? "" : patientInformation.age.years,
          months: !patientInformation ? "" : patientInformation.age.months,
          days: !patientInformation ? "" : patientInformation.age.days,
        },
        gender: !patientInformation ? "MALE" : patientInformation.gender,
        phone: !patientInformation ? "" : patientInformation.phone,
        email: !patientInformation ? "" : patientInformation.email,
        address: {
          street: !patientInformation ? "" : patientInformation.address.street,
          city: !patientInformation ? "" : patientInformation.address.city,
          zip: !patientInformation ? "" : patientInformation.address.zip,
        },
        referredBy: !patientInformation
          ? ""
          : patientInformation.referredBy,
      },
    });

    useImperativeHandle(ref, () => {
      return {};
    }, []);

    const onSubmit = async () => {
      const isValid = await form.trigger();

      if (!isValid) return;

      await props.onSubmit(form.getValues());
    };

    return (
      <div className="flex w-full justify-center">
        <Form {...form}>
          <form action={onSubmit}>
            {/* name field set */}
            <fieldset className="mb-4">
              <legend>Patinet name</legend>
              <div className="flex space-x-4">
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="hidden">Gender</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="MALE">Male</SelectItem>
                          <SelectItem value="FEMALE">Female</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="hidden">Title</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Title" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="MR">Mr</SelectItem>
                          <SelectItem value="MS">Ms</SelectItem>
                          <SelectItem value="MRS">Mrs</SelectItem>
                          <SelectItem value="MISS">Miss</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="hidden">First name</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Fist Name" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="middleName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="hidden">Middle name</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Middle Name" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="hidden">Last name</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Last Name" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </fieldset>
            {/* Age fieldset */}
            <fieldset className="my-4">
              <legend>Age (years* - months - days)</legend>
              <div className="flex space-x-4">
                <FormField
                  control={form.control}
                  name="age.years"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="hidden">Years</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Years *" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="age.months"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="hidden">Months</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Months (optional)" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="age.days"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="hidden">Days</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Days (optional)" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </fieldset>
            {/* contact details field set */}
            <fieldset className="my-4">
              <legend>Contact details</legend>
              <div className="flex space-x-4">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="hidden">Phone</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Phone Number *" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="hidden">Email</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Email (optional)" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </fieldset>
            {/* address field set */}
            <fieldset className="my-4">
              <legend>Address</legend>
              <div className="flex space-x-4">
                <FormField
                  control={form.control}
                  name="address.street"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="hidden">Street</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Street *" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address.city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="hidden">City</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="City *" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address.zip"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="hidden">Zip</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Zip Code (optional)" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </fieldset>
            {/* referred by */}
            <fieldset className="mt-4">
              <legend>Referred by</legend>
              <div className="flex space-x-4">
                <FormField
                  control={form.control}
                  name="referredBy"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="hidden">Referred By</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Referred By *" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </fieldset>
            <div className="flex justify-end">
              <Button type="submit">
                Select Tests <GrNext />
              </Button>
            </div>
          </form>
        </Form>
      </div>
    );
  },
);

QuickTestForm.displayName = "QuickTestForm";

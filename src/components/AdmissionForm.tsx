import { FormEvent, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Send } from 'lucide-react';
import { programs } from '../data/content';

type FormValues = {
  parentName: string;
  phoneNumber: string;
  childAge: string;
  programInterested: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  parentName: '',
  phoneNumber: '',
  childAge: '',
  programInterested: '',
  message: '',
};

export default function AdmissionForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const programOptions = useMemo(() => programs.map((program) => program.name), []);

  const validate = () => {
    const nextErrors: FormErrors = {};
    const digitsOnlyPhone = values.phoneNumber.replace(/\D/g, '');
    const age = Number(values.childAge);

    if (!values.parentName.trim()) {
      nextErrors.parentName = 'Parent name is required.';
    }

    if (!digitsOnlyPhone) {
      nextErrors.phoneNumber = 'Phone number is required.';
    } else if (digitsOnlyPhone.length < 10) {
      nextErrors.phoneNumber = 'Enter a valid 10-digit phone number.';
    }

    if (!values.childAge.trim()) {
      nextErrors.childAge = 'Child age is required.';
    } else if (Number.isNaN(age) || age < 2 || age > 6) {
      nextErrors.childAge = 'Child age must be between 2 and 6 years.';
    }

    if (!values.programInterested) {
      nextErrors.programInterested = 'Select a program of interest.';
    }

    if (values.message.trim().length > 500) {
      nextErrors.message = 'Message must be 500 characters or fewer.';
    }

    return nextErrors;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();

    setErrors(nextErrors);
    setIsSubmitted(false);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    await new Promise((resolve) => {
      window.setTimeout(resolve, 800);
    });

    console.log('Admission enquiry submitted', values);
    setValues(initialValues);
    setErrors({});
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl bg-gradient-to-br from-pink-50 via-white to-blue-50 p-6 shadow-xl ring-1 ring-blue-100 md:p-8"
    >
      <div className="mb-6">
        <div className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          Admission Enquiry
        </div>
        <h3 className="mt-4 text-3xl font-bold text-gray-900">Ask About Admissions</h3>
        <p className="mt-2 text-gray-600">
          Share a few details and our team will contact you with program guidance and visit timings.
        </p>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit} noValidate>
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label htmlFor="parentName" className="mb-2 block text-sm font-semibold text-gray-700">
              Parent Name
            </label>
            <input
              id="parentName"
              type="text"
              value={values.parentName}
              onChange={(event) => setValues((current) => ({ ...current, parentName: event.target.value }))}
              className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
              placeholder="Enter your name"
            />
            {errors.parentName ? <p className="mt-2 text-sm text-red-600">{errors.parentName}</p> : null}
          </div>

          <div>
            <label htmlFor="phoneNumber" className="mb-2 block text-sm font-semibold text-gray-700">
              Phone Number
            </label>
            <input
              id="phoneNumber"
              type="tel"
              inputMode="tel"
              value={values.phoneNumber}
              onChange={(event) => setValues((current) => ({ ...current, phoneNumber: event.target.value }))}
              className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
              placeholder="Enter your phone number"
            />
            {errors.phoneNumber ? <p className="mt-2 text-sm text-red-600">{errors.phoneNumber}</p> : null}
          </div>

          <div>
            <label htmlFor="childAge" className="mb-2 block text-sm font-semibold text-gray-700">
              Child Age
            </label>
            <input
              id="childAge"
              type="number"
              min="2"
              max="6"
              step="0.5"
              value={values.childAge}
              onChange={(event) => setValues((current) => ({ ...current, childAge: event.target.value }))}
              className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
              placeholder="Age in years"
            />
            {errors.childAge ? <p className="mt-2 text-sm text-red-600">{errors.childAge}</p> : null}
          </div>

          <div>
            <label htmlFor="programInterested" className="mb-2 block text-sm font-semibold text-gray-700">
              Program Interested
            </label>
            <select
              id="programInterested"
              value={values.programInterested}
              onChange={(event) => setValues((current) => ({ ...current, programInterested: event.target.value }))}
              className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
            >
              <option value="">Select a program</option>
              {programOptions.map((program) => (
                <option key={program} value={program}>
                  {program}
                </option>
              ))}
            </select>
            {errors.programInterested ? <p className="mt-2 text-sm text-red-600">{errors.programInterested}</p> : null}
          </div>
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-semibold text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            value={values.message}
            onChange={(event) => setValues((current) => ({ ...current, message: event.target.value }))}
            className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
            placeholder="Tell us about your child or preferred visit date"
          />
          {errors.message ? <p className="mt-2 text-sm text-red-600">{errors.message}</p> : null}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-400"
          >
            <Send className="h-4 w-4" />
            {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
          </button>
        </div>

        {isSubmitted ? (
          <div className="flex items-center gap-2 rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
            <CheckCircle2 className="h-5 w-5" />
            Your enquiry has been captured. Our team will reach out shortly.
          </div>
        ) : null}
      </form>
    </motion.div>
  );
}

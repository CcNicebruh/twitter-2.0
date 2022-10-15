import cn from 'clsx';
import type { ChangeEvent } from 'react';

type InputFieldProps = {
  label: string;
  inputId: string;
  inputValue: string;
  inputLimit?: number;
  useTextArea?: boolean;
  errorMessage?: string;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

export function InputField({
  label,
  inputId,
  inputValue,
  inputLimit,
  useTextArea,
  errorMessage,
  handleChange
}: InputFieldProps): JSX.Element {
  return (
    <div className='flex flex-col gap-1'>
      <div
        className={cn(
          'relative rounded ring-1 ring-border-color transition duration-200',
          errorMessage
            ? 'ring-1 ring-accent-red'
            : 'focus-within:ring-2 focus-within:ring-accent-blue'
        )}
      >
        {useTextArea ? (
          <textarea
            className='peer mt-6 w-full resize-none bg-inherit px-3 pb-1
                       placeholder-transparent outline-none transition'
            id={inputId}
            placeholder={inputId}
            onChange={handleChange}
            value={inputValue}
            rows={3}
          />
        ) : (
          <input
            className='peer mt-6 w-full bg-inherit px-3 pb-1
                       placeholder-transparent outline-none transition'
            id={inputId}
            type='text'
            placeholder={inputId}
            onChange={handleChange}
            value={inputValue}
          />
        )}
        <label
          className={cn(
            `group-peer absolute left-3 translate-y-1 bg-black
             text-sm text-secondary transition-all
             peer-placeholder-shown:translate-y-3
             peer-placeholder-shown:text-lg
             peer-focus:translate-y-1
             peer-focus:text-sm`,
            errorMessage
              ? 'text-accent-red peer-focus:text-accent-red'
              : 'peer-focus:text-accent-blue'
          )}
          htmlFor={inputId}
        >
          {label}
        </label>
      </div>
      {errorMessage && (
        <p className='text-sm text-accent-red'>{errorMessage}</p>
      )}
    </div>
  );
}
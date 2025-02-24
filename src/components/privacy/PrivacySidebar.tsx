import { FC } from "react";

export const PrivacySidebar: FC = () => {
  return (
    <nav className="flex w-full flex-col items-stretch text-sm text-[#707074] font-bold leading-none">
      <div className="flex items-stretch gap-5">
        <div className="flex flex-col">
          <h2 className="text-[#282a2c] text-lg leading-none self-stretch">
            User related Policies
          </h2>
          <a
            href="#"
            className="mt-[11px] hover:text-[#00c4b5] transition-colors"
          >
            Terms of Use
          </a>
          <a href="#" className="mt-3 hover:text-[#00c4b5] transition-colors">
            Code of Conduct
          </a>
          <a href="#" className="mt-3 hover:text-[#00c4b5] transition-colors">
            Fair Use Policy
          </a>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/b89c0c195d054cd0b194754874d486dc/e7a60b89b1c5846cdfe6d1f52cfc89e47521eb46655d513c47e84dee7d061893?placeholderIfAbsent=true"
          className="aspect-square object-contain w-6 shrink-0"
          alt="User policies icon"
        />
      </div>

      <div className="border-t border-[#e7eceb] my-[15px]" />

      <div className="flex items-stretch gap-[18px] text-lg text-[#282a2c] leading-none">
        <h2 className="grow">Data related Policies</h2>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/b89c0c195d054cd0b194754874d486dc/4e65b194804ee58065a4483f03837d1fcb85611c04c1e0d21035f566b601c84c?placeholderIfAbsent=true"
          className="aspect-square object-contain w-6 shrink-0"
          alt="Data policies icon"
        />
      </div>

      <a href="#" className="mt-3 hover:text-[#00c4b5] transition-colors">
        Privacy Policy
      </a>
      <a href="#" className="mt-3 text-[#00c4b5]">
        Data Processing Addendum
      </a>
      <a href="#" className="mt-3 hover:text-[#00c4b5] transition-colors">
        Cookies Policy
      </a>
    </nav>
  );
};

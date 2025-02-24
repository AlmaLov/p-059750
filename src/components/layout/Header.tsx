import { FC } from "react";

export const Header: FC = () => {
  return (
    <header className="bg-white shadow-[0px_4px_5px_rgba(0,0,0,0.14)] flex w-full gap-5 justify-between px-11 py-[19px] max-md:max-w-full max-md:px-5">
      <div className="flex items-stretch gap-[7px] text-xl font-bold">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/b89c0c195d054cd0b194754874d486dc/5b0ed0b08faa676cd7b5f7be3d4eb59a24e7d401160856b8688f52f7c4dfd2b2?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/b89c0c195d054cd0b194754874d486dc/5b0ed0b08faa676cd7b5f7be3d4eb59a24e7d401160856b8688f52f7c4dfd2b2?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/b89c0c195d054cd0b194754874d486dc/5b0ed0b08faa676cd7b5f7be3d4eb59a24e7d401160856b8688f52f7c4dfd2b2?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/b89c0c195d054cd0b194754874d486dc/5b0ed0b08faa676cd7b5f7be3d4eb59a24e7d401160856b8688f52f7c4dfd2b2?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/b89c0c195d054cd0b194754874d486dc/5b0ed0b08faa676cd7b5f7be3d4eb59a24e7d401160856b8688f52f7c4dfd2b2?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/b89c0c195d054cd0b194754874d486dc/5b0ed0b08faa676cd7b5f7be3d4eb59a24e7d401160856b8688f52f7c4dfd2b2?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/b89c0c195d054cd0b194754874d486dc/5b0ed0b08faa676cd7b5f7be3d4eb59a24e7d401160856b8688f52f7c4dfd2b2?placeholderIfAbsent=true&width=2000 2000w"
          className="aspect-[0.92] object-contain w-9 shrink-0"
          alt="AlmaNews Logo"
        />
        <div className="basis-auto my-auto">
          <span className="text-[#00c4b5]">Alma</span>
          <span className="text-[#707074]">News</span>
        </div>
      </div>

      <nav className="self-stretch flex items-stretch gap-10 text-base text-[#b6b9bb] font-bold whitespace-nowrap leading-none my-auto">
        <a href="#" className="hover:text-[#00c4b5] transition-colors">
          Newsfeed
        </a>
        <a href="#" className="hover:text-[#00c4b5] transition-colors">
          Prospects
        </a>
      </nav>

      <div className="flex items-stretch gap-[27px]">
        <a
          href="#"
          className="text-[#707074] text-sm font-bold leading-none my-auto hover:text-[#00c4b5] transition-colors"
        >
          Help center
        </a>
        <div className="bg-[rgba(67,126,254,0.1)] text-lg text-[#437efe] font-semibold whitespace-nowrap w-10 h-10 flex items-center justify-center rounded-full">
          MJ
        </div>
      </div>
    </header>
  );
};

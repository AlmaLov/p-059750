import { Header } from "@/components/layout/Header";
import { PrivacySidebar } from "@/components/privacy/PrivacySidebar";
import { ProcessingInfo } from "@/components/privacy/ProcessingInfo";

const Index = () => {
  return (
    <div className="bg-white flex flex-col overflow-hidden items-stretch pb-[149px] max-md:pb-[100px]">
      <Header />

      <main className="self-center flex w-full max-w-[1017px] flex-col ml-4 mt-12 max-md:max-w-full max-md:mt-10">
        <h1 className="text-[#282a2c] text-[32px] font-bold leading-none max-md:max-w-full">
          AlmaConnect Privacy Centre
        </h1>

        <div className="w-[984px] shrink-0 max-w-full h-0.5 mt-2.5 border-[#e7eceb] border-solid border-2" />

        <div className="self-stretch mt-6 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <aside className="w-[22%] max-md:w-full max-md:ml-0">
              <PrivacySidebar />
            </aside>

            <div className="w-[78%] ml-5 max-md:w-full max-md:ml-0">
              <article className="flex w-full flex-col max-md:max-w-full max-md:mt-9">
                <div className="flex flex-col items-stretch text-xl text-[#282a2c] font-bold leading-[1.6] ml-[13px] max-md:max-w-full">
                  <h2 className="text-2xl leading-none">
                    Data Processing Addendum
                  </h2>
                  <h3 className="self-center ml-[26px] mt-[13px]">
                    Annex 1 to Data Protection Addendum
                  </h3>
                  <h4 className="ml-[51px] mt-3 max-md:max-w-full">
                    Description of Processing Activities for Customer Personal
                    Data
                  </h4>
                </div>

                <p className="text-[#282a2c] text-base font-normal leading-[22px] self-stretch mr-[45px] mt-6 max-md:max-w-full max-md:mr-2.5">
                  This Annex includes certain details of the Processing of
                  Customer Personal Data by Alma Labs in connection with the
                  Services.
                </p>

                <ProcessingInfo />
              </article>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;

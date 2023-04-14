import Logo from "../../public/static/logo";
export default function BracketCSHome() {
  return (
    <div
      className={`relative w-screen h-screen bg-white font-['Space_Grotesk']`}
    >
      <nav className="bg-gray-200 bg-opacity-80 sticky top-0 z-50">
        <div className="w-full px-4 sm:px-8 lg:px-16">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex justify-start items-center ">
              <Logo className="h-10 " />
              <div className="ml-6">
                <div className="flex space-x-4">
                  <a
                    href="/"
                    className="rounded-md px-3 py-2 text-lg font-medium text-gray-700"
                  >
                    CerealCodes
                  </a>
                  <a
                    href="/"
                    className="rounded-md px-3 py-2 text-lg font-medium text-gray-700"
                  >
                    Team
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex h-1/2 ">
        <div className="m-auto text-center">
          {/* <div className="bg-gray-200 w-16 h-16" /> */}
          <p className="text-6xl sm:text-7xl lg:text-8xl font-bold">
            Bracket<span className="text-blue-500">CS</span>
          </p>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 mt-4">
            Fostering the spirit of problem solving
          </p>
          <div className="font-bold mt-16 flex justify-center items-center text-gray-800">
            <p className="z-20 absolute text-2xl lg:text-3xl px-6 py-2  bg-[#94D2FF]">
              Learn more
            </p>
            <p className="z-10 absolute text-2xl lg:text-3xl px-6 py-2 border-2 border-blue-600 border-opacity-60 mt-4 ml-4 rotate-[2deg]">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
          </div>
          {/* <div>
            <div className="absolute w-[1321px] bg-[rgba(218,219,221,1)] [transform:scaleY(-1)]" />
          </div> */}
        </div>
      </div>
      {/*
      <div>
        <div className="origin-top-left absolute w-20 h-20 left-1/2 top-1/3 bg-gray-400 bg-opacity-20 -rotate-12" />
      </div>
      <div>
        <div className="origin-top-left absolute w-20 h-20 left-1/3 top-1/2 bg-gray-400 bg-opacity-20 rotate-45" />
      </div>
      <div>
        <div className="origin-top-left absolute w-[275.33px] h-[69.38px] left-[590px] top-[414.26px] [rotate:0.92deg] [box-shadow:0px_0px_0px_2px_rgba(154,_198,_223,_1)_inset] [box-shadow-width:2px]" />
      </div>
      <div>
        <div className="absolute w-[279px] h-[68px] left-[572px] top-[403px] bg-[rgba(148,210,255,1)]" />
      </div> */}
      {/* <div className="text-center font-bold">
        <div className="absolute -left-0.5 leading-none inline-block h-[187px] w-screen ">
          <p className="text-black inline m-0 text-[96px] leading-[normal]">
            Bracket
          </p>
          <p className="inline m-0 text-[96px] leading-[normal] text-[rgba(45,167,255,1)]">
            CS
          </p>
        </div>
      </div>
      <p className="left-0 absolute text-2xl lg:text-4xl m-0 w-screen text-gray-800 text-center">
        Fostering the spirit of problem solving
      </p>
      <div className="text-center font-bold text-[rgba(55,58,63,1)]">
        <p className="absolute text-4xl m-0 w-screen  leading-[normal]">
          Learn more
        </p>
      </div>
      <div>
        <div className="h-px left-16 absolute w-[1321px] top-[720px] bg-[rgba(218,219,221,1)] [transform:scaleY(-1)]" />
      </div>
      <Rect />
      <div className="text-left font-bold text-[rgba(44,51,54,1)]">
        <p className="absolute text-4xl m-0 left-[193px] top-[823px] leading-[normal]">
          Who are we?
        </p>
      </div>
      <div className="text-left font-bold text-[rgba(44,51,54,1)]">
        <p className="absolute text-4xl m-0 left-[193px] top-[1081px] leading-[normal]">
          Our projects:
        </p>
      </div>
      <div className="text-left font-normal">
        <div className="absolute leading-none inline-block w-[672px] left-[193px] top-[901px]">
          <p className="text-2xl inline m-0 leading-[normal] text-[rgba(96,100,104,1)]">
            {"We are "}
          </p>
          <p className="text-2xl underline inline m-0 leading-[normal] text-[rgba(64,159,255,1)]">
            a team
          </p>
          <p className="text-2xl inline m-0 leading-[normal] text-[rgba(96,100,104,1)]">
            {
              " of programming (and red panda) enthusiasts trying to spread all aspects of computer science by offering high quality programming competitions and other resources!"
            }
          </p>
        </div>
      </div>
      <div className="text-left font-normal">
        <div className="absolute leading-none inline-block w-[717px] left-[193px] top-[1159px]">
          <p className="text-2xl underline inline m-0 leading-[normal] text-[rgba(5,130,255,1)]">
            CerealCodes
          </p>
          <p className="text-2xl inline m-0 leading-[normal] text-[rgba(96,100,104,1)]">
            {
              " - A coding competition targeted towards middle to high school students."
            }
          </p>
        </div>
      </div>
      <Loops />
      <div className="text-left font-normal text-[rgba(96,100,104,1)]">
        <p className="absolute text-2xl m-0 left-[483px] top-[2533px] leading-[normal]">
          {"Designed by the BracketCS Team with <3"}
        </p>
      </div>
      <div className="text-black text-left font-normal">
        <p className="absolute text-xs m-0 left-[1098px] top-[1325px] leading-[normal]">
          credit: tina
        </p>
      </div>
      <div className="text-left font-bold text-[rgba(44,51,54,1)]">
        <p className="absolute text-4xl m-0 h-[30px] w-[175px] left-[189px] top-[1563px] leading-[normal]">
          Sponsors:
        </p>
      </div>
      <div className="text-left font-normal text-[rgba(96,100,104,1)]">
        <p className="absolute text-2xl m-0 h-[18px] w-[825px] left-[189px] top-[1623px] leading-[normal]">
          A big thank you to all of our sponsors for making this contest
          possible!
        </p>
      </div>
      <div className="text-black text-left font-bold">
        <p className="absolute text-4xl m-0 h-[34px] w-[249px] left-[596px] top-[1701px] leading-[normal]">
          Gold sponsors
        </p>
      </div>
      <div className="text-black text-left font-bold">
        <p className="absolute text-4xl m-0 h-[30px] w-[266px] left-[587px] top-[1884px] leading-[normal]">
          Silver sponsors
        </p>
      </div>
      <div className="text-black text-left font-bold">
        <p className="absolute text-4xl m-0 h-[30px] w-[266px] left-[587px] top-[2163px] leading-[normal]">
          Past sponsors
        </p>
      </div>
      <div>
        <div className="left-52 absolute w-[336px] h-[82px] top-[1940px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/69b103a30e71724ec2a819150b1b30ec0e219466.webp)_center_/_cover]" />
      </div>
      <div>
        <div className="h-14 absolute w-[241px] left-[742px] top-[1768px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/5ee51d450c0ca4a636020bb9f2872cbaac9133ba.webp)_center_/_cover]" />
      </div>
      <div>
        <div className="absolute w-[304px] h-[67px] left-[926px] top-[1947px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/bcaa01cf92e754770aed817f2e8d86d286c34442.webp)_center_/_cover]" />
      </div>
      <div>
        <div className="absolute w-[471px] h-[60px] left-[484px] top-[2051px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/d201a31dada2f7893e9b60184d184aa4b6a40dcf.webp)_center_/_cover]" />
      </div>
      <div className="text-left font-normal text-[rgba(96,100,104,1)]">
        <p className="absolute text-2xl m-0 h-[22px] w-[986px] left-[227px] top-[2339px] leading-[normal]">
          If you are interested in sponsoring cerealcodes, contact us at
          email@bracketcs.org!
        </p>
      </div>
      <div>
        <div className="h-16 absolute w-[242px] left-[446px] top-[1764px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/d8a9fb08e6845d33da19ffc1cde453b7e774eee1.webp)_center_/_cover]" />
      </div>
      <div>
        <div className="absolute w-[309px] h-[75px] left-[566px] top-[1947px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/443fff5dd084e4ee5e5eb940eea977a8052d8ac8.webp)_center_/_cover]" />
      </div> */}
    </div>
  );
}

import footerData from "../constant/footerData";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineFolderCopy } from "react-icons/md";
import { LuNewspaper } from "react-icons/lu";

const Footer = () => {
  return (
    <>
      <div className="centering flex-col justify-between bg-darker text-text mt-24 py-5">
        <div className="py-2.5 px-[30px] rounded-[50px] bg-box mx-auto centering">
          <img className="size-10" src="/icon.png" alt="icon" />
          <h1 className="font-black mr-0.5">فیلم پد</h1>
        </div>

        <div className="w-full px-3 footer-width lg:centering lg:justify-between lg:items-start lg:mt-2">
          <div className="my-[30px] lg:mx-5 mt-12 lg:mt-0 lg:w-1/3 lg:centering lg:items-start lg:justify-between">
            {footerData.map((item) => (
              <ul key={item.id}>
                <h1 className="text-[15px] font-bold my-3 lg:mt-0 pl-2.5 after:after">
                  {item.name}
                </h1>

                {item.items.map((item) => (
                  <li
                    key={item}
                    className="p-0.5 mb-1 font-normal before:before cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ))}
          </div>

          <p className="py-10 lg:py-5 lg:mx-5 text-[15px] leading-[30px] text-justify my-4 lg:mt-0 lg:w-1/3">
            فیلم پد جایی است که شما می‌توانید به صورت رایگان به جدیدترین
            فیلم‌های سینمایی و سریال‌های محبوب دسترسی پیدا کنید. تماشای فیلم‌های
            مورد علاقه خود را بصورت آنلاین و یا با دانلود رایگان تجربه کنید!
            سایت ما منبعی است که علاقه‌مندان به هنر سینما به دنبال آن هستند. با
            سرعت و کیفیت بالا، مجموعه‌ای از بهترین فیلم‌های سینمایی و سریال‌های
            جذاب را به شما ارائه می‌دهیم. سرگرمی بی‌پایان با سینمای رایگان فیلم
            پد
          </p>

          <div className="w-full lg:w-1/3 lg:mx-5 lg:mt-0">
            <div className="button-footer">
              <div className="centering">
                <MdOutlineFolderCopy className="text-primary text-[22px]" />
                <h4 className="mr-2 text-sm font-bold">درخواست فیلم</h4>
              </div>
              <IoIosArrowBack className="text-[20px]" />
            </div>

            <div className="button-footer">
              <div className="centering">
                <LuNewspaper className="text-primary text-[22px]" />
                <h4 className="mr-2 text-sm font-bold">
                  اخبار دنیای فیلم و سریال
                </h4>
              </div>
              <IoIosArrowBack className="text-[20px]" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-darker2">
        <div className="p-5 text-text text-sm centering justify-start footer-width mx-auto">
          <h1 className="pr-4">تمامی حقوق برای فیلم پد محفوظ می‌باشد.</h1>
        </div>
      </div>
    </>
  );
};

export default Footer;

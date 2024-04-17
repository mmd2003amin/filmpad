const useStyleSub = (name) => {
  return name === "کشور سازنده"
    ? "right-[4%] pt-[68px]"
    : name === "نمایش بر اساس"
    ? "right-[20%] h-fit"
    : name === "رده سنی"
    ? "right-[36%] pt-[180px]"
    : name === "امتیاز IMDb"
    ? "right-[52%] h-fit"
    : name === "از سال"
    ? "right-[68%] pt-[250px]"
    : name === "تا سال"
    ? "right-[84%] pt-[250px]"
    : "scale-50 opacity-0 invisible right-0";
};

const useStyleSubMobile = (name) => {
  return name === "تا سال"
    ? "top-[136px] h-64"
    : name === "از سال"
    ? "top-[136px] h-64"
    : name === "همه"
    ? "top-[208px] h-fit"
    : name === "ژانر"
    ? "top-[280px] h-64"
    : name === "کشور سازنده"
    ? "top-[568px] h-64"
    : name === "نمایش بر اساس"
    ? "top-[640px] h-fit"
    : name === "رده سنی"
    ? "top-[712px] h-64"
    : name === "امتیاز IMDb" ? "top-[784px] h-fit" : "top-0 invisible opacity-50 scale-0"
};

export { useStyleSubMobile, useStyleSub };

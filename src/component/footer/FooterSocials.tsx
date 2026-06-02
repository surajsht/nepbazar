import { socialLinks } from "../../Data/FooterData";

const FooterSocials = () => {
  return (
    <div className="mb-8">
      <h2 className="font-bold text-3xl mb-4"> NepBazar </h2>

      <div className="flex flex-col gap-2 mb-6">
        <span>New Baneshwor Kathmandu, Nepal</span>
        <span> +977-9812345678 </span>
        <span> nepbazar@gmail.com </span>
      </div>

      <ul className="flex items-center gap-4 flex-wrap">
        {socialLinks.map((data) => {
          return <li key={data.id}>{data.icon}</li>;
        })}
      </ul>
    </div>
  );
};

export default FooterSocials;

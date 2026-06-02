type FooterColumnProps = {
  title: string;
  items: string[];
};

const FooterColumn = ({ title, items }: FooterColumnProps) => {
  return (
    <div>
      <h3 className="text-lg font-medium mb-3">{title}</h3>
      <ul className="space-y-2 text-sm">
        {items.map((item, i) => (
          <li key={i} className="cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;

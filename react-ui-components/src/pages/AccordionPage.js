import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "l2kj5",
      label: "Can ı use react on project ?",
      content: "you can use react on any project you want",
    },
    {
      id: "l2k5gsgdsj5",
      label: "Can ı use javascript on project ?",
      content: "you can use react on any project you want",
    },
    {
      id: "l2sghh563kj5",
      label: "Can ı use css on project ?",
      content: "you can use react on any project you want",
    },
  ];
  return <Accordion items={items} />;
}

export default AccordionPage;
